import jwt, { JsonWebTokenError } from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookie.jwt;

        if(!token){
            return res.status(401).json({ message: "Unauthorized - No Token Provided" })
        }

        const decoded = jwt.verify(token.process.env.JWT_SECRECT)

    } catch (error) {
        
    }
}