import React from "react";
import Button from "../Button/button";

const CategoryList = () => {
  const categories = [
    { title: "Việc làm IT" },
    { title: "Tạo CV" },
    { title: "Công Ty IT" },
    { title: "Trắc nghiệm tính cách" },
    { title: "Blog" },
    {
      title: (
        <>
          Việc làm IT{" "}
          <span className="bg-gradient-to-r from-[#FF7D25] to-[#FFB400] text-transparent bg-clip-text ml-1">
            Fresher
          </span>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Danh Mục</h2>
      <div className="flex flex-wrap -mx-2">
        {categories.map((item, index) => (
          <div key={index} className="w-1/2 xl:w-[91.666667%] px-2">
            <Button
              title={item.title}
              variant="gray"
              className="w-full text-left mb-1 text-sm font-semibold"
            />
          </div>
        ))}
        <div className="w-1/2 xl:w-[91.666667%] px-2">
          <Button
            title="Xem thêm"
            variant="white"
            className="w-full text-left text-xs mb-2 font-semibold bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
