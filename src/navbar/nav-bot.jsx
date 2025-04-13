import React from "react";
import UserDropdown from "../components/Dropdown/dropdown-user"; // component dropdown của bạn

 function NavBot() {

  return (
    <header className="sticky top-0 bg-white z-50 shadow">
      <div className="max-w-[1376px] mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <div className="max-w-[210px] max-h-[40px]">
          <img
            src="/assets/img/header/img_logo.png"
            alt="TOPDev Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Nav Right */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative">
            <img
              src="/assets/img/spotlight-section/icon/img_icon_bell.png"
              alt="Thông báo"
              className="w-6 h-7"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">
              99+
            </span>
          </div>

          {/* User Area (Dropdown or Login Button) */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}

export default NavBot;