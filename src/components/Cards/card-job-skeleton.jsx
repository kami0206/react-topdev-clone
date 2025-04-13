import React from "react"

const CardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4 w-full max-w-xl mx-auto animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded bg-gray-200"></div>
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Body */}
      <div className="space-y-3">
        <div className="flex gap-6">
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
