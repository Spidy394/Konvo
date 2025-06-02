import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const { fullName, email, userName, password } = req.body;
    try {
        if(!fullName || !email || !userName || !password){
            return res.status(400).json({ message: "All fields are required"});
        }

        if (password.length < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters"});
        }

        const user = await User.findOne({ email });
        if(user) return res.status(400).json({ message: "Email already exist" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            userName,
            email,
            password: hashedPassword,
        })

        if(newUser) {
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                email: newUser.email,
                profilePic: newUser.profilePic,
                bio: newUser.bio,
            })
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error is signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    const { email, userName, password } = req.body;
    try {
        const user = await User.findOne({ $or: [{ email }, { userName }] });

        if(!user) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const isPasswordeCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordeCorrect){
            return res.status(400).json({ message: "Invalid credentials"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            profilePic: user.profilePic,
            bio: user.bio,
        })

    } catch (error) {
        console.log("Error is login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge:0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error is login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "No data provided" });
        }

        const { profilePic, userName, bio } = req.body;
        const userId = req.user._id;

        const updateData = {};

        if(profilePic){
            const uploadResponse = await cloudinary.uploader.upload(profilePic);
            updateData.profilePic = uploadResponse.secure_url;
        }

        if(userName){
            updateData.userName = userName;
        }

        if(bio !== undefined){
            updateData.bio = bio;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true }
        ).select("-password");

        res.status(200).json(updatedUser)

    } catch (error) {
        console.log("Error in update profile", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error"})
    }
};