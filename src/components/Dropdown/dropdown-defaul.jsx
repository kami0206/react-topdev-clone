import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ icon, label, options = [], dark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Thêm hàm xử lý click item
  const handleItemClick = (onClick) => {
    onClick(); // chạy hàm gán sẵn
    setIsOpen(false); // đóng menu lại sau khi chọn
  };

  return (
    <div className="relative text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full gap-3 px-4 py-2 border rounded-lg shadow-sm transition ${
          dark
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
      >
        {icon}
        {label}
        <i className="fa-solid fa-chevron-down ml-1 text-sm"></i>
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-44 right-0 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="py-1">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleItemClick(option.onClick)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  dark ? "hover:bg-gray-700" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
