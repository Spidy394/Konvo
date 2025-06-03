import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SignupPage } from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfiePage from "./pages/ProfiePage";
import HomePage from "./pages/HomePage";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" /> } />
        <Route path="/signup" element={ !authUser ? <SignupPage /> : <Navigate to="/" /> } />
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to="/" /> } />
        <Route path="/settings" element={ <SettingsPage /> } />
        <Route path="/profile" element={  authUser ? <ProfiePage /> : <Navigate to="/login" /> } />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;