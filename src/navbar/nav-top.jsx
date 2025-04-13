import React from "react";

function NavTop() {
  return (
    <header className="sticky top-0 bg-black z-50">
      {/* Container wrapper */}
      <div className="bg-black text-white">
        <div className="max-w-[1376px] py-4 flex justify-between items-center gap-6 flex-wrap m-auto px-4">
          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-base font-semibold">
            <a href="#">
              <span>Việc Làm IT</span>
            </a>
            <a href="#">
              <span>Tạo CV</span>
            </a>
            <a href="#">
              <span>Công Ty ID</span>
            </a>
            <a href="#">
              <span>Trắc Nghiệm Tính Cách</span>
            </a>
            <a href="#">
              <span>Blog</span>
            </a>
            <a href="#">
              <span>Việc Làm IT</span>
              <span className="bg-gradient-to-r from-[#FF7D25] to-[#FFB400] text-transparent bg-clip-text ml-1">
                Fresher
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-base"></i>
              <span>028.6273.3496</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-user-tie text-base"></i>
              <span>Tuyển dụng</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-base"></i>
              <span>Liên hệ</span>
            </div>
            <div className="flex items-center gap-4">
            <img
              className="rounded-full w-6 h-6"
              src="/assets/img/header/img_united_kingdom.png"
              alt="English"
            />
          </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default NavTop;
