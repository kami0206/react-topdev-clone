import React, { useState } from "react";

function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="flex gap-2  md:flex-row items-center justify-center">
        <div className="relative flex-1">
          <input
            type="text"
            id="js-job-search-input"
            className="w-full py-2 px-4 border bg-gray-200 rounded-md"
            placeholder="Công việc bạn đang tìm ?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img
            src="public/assets/img/spotlight-section/icon/img_icon_search.png"
            alt="search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>
      </div>  
    </>
  );
}

export default JobSearch;
