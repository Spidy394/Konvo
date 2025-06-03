import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SignupPage } from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfiePage from "./pages/ProfiePage";
import HomePage from "./pages/HomePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

const App = () => {
  const { authUser, checkAuth } = useAuthStore()

  useEffect(() =>{
    checkAuth();
  }, [checkAuth])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/settings" element={ <SettingsPage /> } />
        <Route path="/profile" element={ <ProfiePage /> } />
      </Routes>
    </div>
  );
};

export default App;