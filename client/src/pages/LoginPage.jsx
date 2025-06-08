import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  MessageSquare,
  UserSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const { login, isLoggindIn } = useAuthStore();

  const validateForm = () => {
    if (!formData.emailOrUsername.trim())
      return 
    if (!formData.password.trim())
      return
    const isEmail = /\S+@\S+\.\S+/.test(formData.emailOrUsername);
    const loginData = {
      [isEmail ? "email" : "userName"]: formData.emailOrUsername,
      password: formData.password,
    };
    return loginData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = validateForm();
    if (loginData) login(loginData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Email or Username
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserSearch className="size-5 text-base-content/40 z-10" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Your name in the next scene?"
                  value={formData.emailOrUsername}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emailOrUsername: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40 z-10" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="The key to secrets and regrets."
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40 z-10" />
                  ) : (
                    <Eye className="size-5 text-base-content/40 z-10" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoggindIn}
            >
              {isLoggindIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Haven’t penned your tale yet?{" "}
              <Link to="/signup" className="link link-primary z-10">
                Create
              </Link>{" "}
              one now.
            </p>
          </div>
        </div>
      </div>

      {/* right-side */}
      <AuthImagePattern
        title="You’ve returned 🌺"
        subtitle="Pick up the conversation where your heart left off 💬💖"
      />
    </div>
  );
};

export default LoginPage;
