import React, { useEffect, useState } from "react";
import Dropdown from "./dropdown-defaul";
import { LoginModal, LogoutConfirmModal } from "../Modal/index";
import { useNavigate } from "react-router-dom";
import Button from "../Button/button";

const UserDropdown = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/users/${userId}`
        );
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    setUser(null);
    setShowConfirmLogout(false);
  };

  if (!user) {
    return (
      <>
        <Button
          title="Đăng nhập"
          onClick={() => setShowLogin(true)}
          variant="gradientWrapper"
        />

        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(user) => setUser(user)}
        />
      </>
    );
  }

  return (
    <>
      <Dropdown
        icon={
          <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full" />
        }
        label={
          <div className="text-left">
            <p className="text-xs font-medium flex items-center gap-1">
              {user.name}
              {user.verified && (
                <i className="fa-solid fa-circle-check text-blue-500"></i>
              )}
            </p>
            <p className="text-xs font-bold text-white">UX/UI</p>
          </div>
        }
        options={[
          { label: "Trang cá nhân", onClick: () => navigate("/profile") },
          { label: "Cài đặt", onClick: () => navigate("/settings") },
          { label: "Đăng xuất", onClick: () => setShowConfirmLogout(true) },
        ]}
        dark
      />

      <LogoutConfirmModal
        isOpen={showConfirmLogout}
        onClose={() => setShowConfirmLogout(false)}
        onConfirm={logout}
      />
    </>
  );
};

export default UserDropdown;
