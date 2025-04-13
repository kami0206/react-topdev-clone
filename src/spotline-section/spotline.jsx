import React from "react"
import CategoryList from "../components/Spotline/cate-gory"
import Company from "../components/Spotline/company"
import Propose from "../components/Spotline/propose"

const SpotlightSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 max-w-[1376px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Danh mục */}
        <div className="w-full lg:w-1/4">
          <CategoryList />
        </div>

        {/* Middle: Công ty nổi bật */}
        <div className="w-full lg:w-2/4">
          <Company />
        </div>

        {/* Right: Đề xuất */}
        <div className="w-full lg:w-1/4">
          <Propose />
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
