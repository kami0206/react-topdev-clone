import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardBlog, CardBlogSkeleton } from "../components/Blogs/index";

const API_URL = "https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/blogs";

// Component Nav cho mũi tên


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const blogCarouselRef = useRef(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  // Hàm xử lý thay đổi slide
  function handleBlogSliderChange(_,current) {
    const slickInstance = blogCarouselRef.current.innerSlider; // Lấy instance của Slick Carousel
    const slidesToScroll = slickInstance.props.slidesToScroll || 1; // Lấy slidesToScroll từ instance
    const dotIndex = Math.floor(current / slidesToScroll); // Tính toán dot index
    setCurrentSlide(dotIndex); // Cập nhật trạng thái dot hiện tại

}

  // Nút điều hướng trái
  const blogLeftNav = (
    <div
      onClick={() => blogCarouselRef.current?.slickPrev()}
      className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-transparent ring-2 ring-red-500 cursor-pointer hover:ring-red-400 hover:ring-4"
    >
      <span className="text-red-500 border-2 border-red-500 hover:bg-red-400 hover:text-white active:bg-red-500 active:border-red-500 w-full h-full flex items-center justify-center rounded-full ">
        &lt;
      </span>
    </div>
  );
  
  const blogRightNav = (
    <div
      onClick={() => blogCarouselRef.current?.slickNext()}
      className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-transparent ring-2 ring-red-500 cursor-pointer hover:ring-red-400 hover:ring-4"
    >
      <span className="text-red-500 border-2 border-red-500 hover:bg-red-400 hover:text-white active:bg-red-500 active:border-red-500 w-full h-full flex items-center justify-center rounded-full ">
        &gt;
      </span>
    </div>
  );
  

  // Tùy chỉnh wrapper cho dots
  const customDotsWrapper = (dots) => {
    const totalPages = Math.ceil(blogs.length / 2); // Tổng số trang (3 slide mỗi trang)
    return (
      <div
        style={{
          width: "auto",
          marginTop: "32px",
          position: "static",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {blogLeftNav}
        <ul
          style={{
            display: "flex",
            margin: "0",
            padding: "0",
            listStyle: "none",
          }}
        >
          {React.Children.map(dots, (dot, i) => {
            if (!blogCarouselRef.current) return null;
            const slickInstance = blogCarouselRef.current.innerSlider;
            const slidesToScroll = slickInstance.props.slidesToScroll || 1;
            return (
              <li
                className={`w-[14px] !h-2 rounded-full transition-all hover:bg-red-400 cursor-pointer ${
                  currentSlide === i ? "bg-red-500 w-3.5" : "bg-gray-300 !w-2"
                }`}
                onClick={() => {
                  blogCarouselRef.current?.slickGoTo(i * slidesToScroll);
                }}
              ></li>
            );
          })}
        </ul>
        {blogRightNav}
        <span className="text-sm text-gray-600  ml-auto">{`${
          currentSlide + 1
        }/${totalPages}`}</span>
      </div>
    );
  };

  // Cấu hình slider
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBlogSliderChange, 
    appendDots: customDotsWrapper, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto justify-center max-w-[1376px] px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <CardBlogSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="relative mb-6">
            <Slider ref={blogCarouselRef} {...sliderSettings}>
              {blogs.slice(0, 6).map((blog) => (
                <div key={blog.id} className="px-2">
                  <CardBlog
                    title={blog.title}
                    content={blog.content}
                    field={blog.field}
                    imgUrl={blog.imgUrl}
                    createdAt={blog.createdAt}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogList;
