import React from "react";

function JobSearch({ value, onChange }) {
  return (
    <div className="flex gap-2 md:flex-row items-center justify-center">
      <div className="relative flex-1 ">
        {/* Icon bên trái */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <img
            src="/assets/img/spotlight-section/icon/img_icon_search.png"
            alt="search"
            className="w-5 h-5"
          />
        </div>

        <input
          type="text"
          id="js-job-search-input"
          className="w-full py-2.5 pl-12 pr-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
          placeholder="Công việc bạn đang tìm?"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default JobSearch;
