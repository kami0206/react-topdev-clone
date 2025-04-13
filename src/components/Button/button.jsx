import React from "react"

const Button = ({
  title,
  onClick,
  type = "button",
  variant = "gray",
  className = ""
}) => {
  const base = "px-4 py-2 font-medium rounded-md transition duration-200"

  const variants = {
    gray: 
      "bg-gray-100 hover:bg-gray-200 text-black",
    gradientWrapper:
      "inline-block p-[1px] bg-gradient-to-r from-[#EB2702] via-[#FF7D25] to-[#FF7D25] rounded-md hover:shadow-md transition",
    gradient:
      "bg-white hover:bg-gradient-to-r hover:from-[#EB2702] hover:to-[#FF7D25] text-black w-full h-full",
    dark:
      "bg-black text-white active:bg-white active:text-black active:border active:border-black",
    white: 
      "bg-white text-black hover:bg-gray-100",

  }

  if (variant === "gradient") {
    return (
      <div className={`${variants.gradientWrapper}`}>
        <button 
          onClick={onClick}
          type={type}
          className={`${base} ${variants.gradient} ${className}`}
        >
          {title}
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {title}
    </button>
  )
}

export default Button
