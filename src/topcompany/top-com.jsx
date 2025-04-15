import React from "react";
import Slider from "react-slick";
import companyLogos from "../components/Carousel/carousel-img";

const TopCompany = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return(
    <div className="container mx-auto px-4 py-6 max-w-[1376px]">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#EB2702] via-[#FF7D25] to-[#FF7D25] text-transparent bg-clip-text mb-4">Nhà tuyển dụng hàng đầu</h2>
      <Slider {...settings}>
        {companyLogos.map((logo, index) => (
          <div key={index} className="px-2">
            <div className="h-24 flex items-center justify-center bg-white">
            <img
                src={`/assets/img/spotlight-section/logo/${logo}`}
                alt={`logo-${index}`}
                className="h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};


export default TopCompany;