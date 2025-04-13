import React from "react";

const CardBlog = ({
  title = "Blog-Title",
  content = "Blog-Content",
  field = "Blog-Field",
  imgUrl = "",
  createdAt = new Date().toISOString(),
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col pb-3 mb-3 text-left">
      <div
        className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.24)" }}
      >
        {field}
      </div>

      {/* Image */}
      {imgUrl && (
        <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      )}

      {/* Content */}
      <div className="px-4 py-3 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
        </div>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className="text-gray-500">{formattedDate}</span>
          <span className="text-red-500 hover:underline cursor-pointer">
            Read More &#9658;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
