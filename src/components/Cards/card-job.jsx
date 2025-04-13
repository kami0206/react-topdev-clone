import React from "react"

const Card = ({
  title = "Card-Title",
  description = "Card-Description",
  locationType = "Remote",
  type = "Full-time",
  salary = 1000,
  thumbnail = "",
}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm text-left">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
              {thumbnail ? (
                <img src={thumbnail} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <div className="text-xs text-gray-400">No Logo</div>
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-gray-900 line-clamp-1">{title}</h2>
              <p className="text-sm text-orange-600">Up to ${Math.round(salary)}</p>
            </div>
          </div>
          <i className="fa-solid fa-bookmark text-lg text-gray-400 hover:text-gray-600 cursor-pointer mt-1"></i>
        </div>

        <div className="border-t border-gray-200 my-2" />

        {/* Body */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-laptop-file"></i>
              <span className="line-clamp-1">{locationType}</span>
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              <span className="line-clamp-1">{type}</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
