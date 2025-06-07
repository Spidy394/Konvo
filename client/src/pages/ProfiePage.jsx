import { AtSign, Camera, Info, Mail, User, Edit3, Check, X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore"
import { useState } from "react";


const ProfiePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [SelectedImg, setSelectedImg] = useState(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [tempUsername, setTempUsername] = useState("");
  const [tempBio, setTempBio] = useState("");

  const handleImageUpload = async (e) =>{
    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    }
  }

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
    setTempUsername(authUser?.userName || "");
  };

  const handleUsernameSave = async () => {
    if (tempUsername.trim() && tempUsername !== authUser?.userName) {
      await updateProfile({ userName: tempUsername.trim() });
    }
    setIsEditingUsername(false);
  };

  const handleUsernameCancel = () => {
    setIsEditingUsername(false);
    setTempUsername("");
  };

  const handleBioEdit = () => {
    setIsEditingBio(true);
    setTempBio(authUser?.bio || "");
  };

  const handleBioSave = async () => {
    await updateProfile({ bio: tempBio });
    setIsEditingBio(false);
  };

  const handleBioCancel = () => {
    setIsEditingBio(false);
    setTempBio("");
  };

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img 
                src={SelectedImg || authUser.profilePic || "/avatar.png" }
                alt="Profile-Picture" 
                className="size-32 rounded-full object-cover border-4"
              />
              <label 
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
              >
                <Camera className="size-5 text-base-200" />
                <input 
                  type="file" 
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your avatar"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <AtSign className="size-4" />
                Username
              </div>
              {isEditingUsername ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempUsername}
                    onChange={(e) => setTempUsername(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter username"
                    disabled={isUpdatingProfile}
                  />
                  <button
                    onClick={handleUsernameSave}
                    disabled={isUpdatingProfile || !tempUsername.trim()}
                    className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Check className="size-4" />
                  </button>
                  <button
                    onClick={handleUsernameCancel}
                    disabled={isUpdatingProfile}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="flex-1 px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200">{authUser?.userName}</p>
                  <button
                    onClick={handleUsernameEdit}
                    disabled={isUpdatingProfile}
                    className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-base-200 rounded-lg transition-colors"
                  >
                    <Edit3 className="size-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Info className="size-4" />
                About
              </div>
              {isEditingBio ? (
                <div className="space-y-2">
                  <textarea
                    value={tempBio}
                    onChange={(e) => setTempBio(e.target.value)}
                    className="w-full px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us what makes you... you ✨🖋️"
                    rows={3}
                    maxLength={200}
                    disabled={isUpdatingProfile}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">{tempBio.length}/200</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleBioSave}
                        disabled={isUpdatingProfile}
                        className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                      >
                        <Check className="size-4" />
                      </button>
                      <button
                        onClick={handleBioCancel}
                        disabled={isUpdatingProfile}
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2">
                  <p className="flex-1 px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200 min-h-[44px]">
                    {authUser?.bio || <span className="text-zinc-500">Tell us what makes you... you ✨🖋️</span>}
                  </p>
                  <button
                    onClick={handleBioEdit}
                    disabled={isUpdatingProfile}
                    className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-base-200 rounded-lg transition-colors mt-0.5"
                  >
                    <Edit3 className="size-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="text-sm text-zinc-100 flex items-center gap-2">
                <User className="size-4" />
                Fullname
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="size-4" />
                Email
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border text-zinc-200">{authUser?.email}</p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Active Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfiePage