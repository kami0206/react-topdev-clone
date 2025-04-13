import React from "react"

const CardBlogSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col gap-4 pb-3 animate-pulse">
      <div className="w-24 h-6 bg-gray-200 rounded-full mx-4 mt-4"></div>
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="px-4 py-1 flex flex-col gap-3">
        <div className="space-y-2">
          <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default CardBlogSkeleton
