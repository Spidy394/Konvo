import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"

export const Sidebar = () => {
    const { getUsers, users, selectUser, setSelectedUser, isUsersLoading } = useChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers();
    }, [getUsers])
  return (
    <div>Sidebar</div>
  )
}
