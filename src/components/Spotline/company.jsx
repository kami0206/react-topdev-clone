import Slider from "react-slick";
import companyLogos from "../Carousel/carousel-img";

const Company = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 568,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full px-4 ">
      <h2 className="text-2xl font-semibold mb-4">Công ty nổi bật</h2>

      {/* Logo Carousel */}
      <Slider {...settings} className="mb-8">
        {companyLogos.map((logo, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg flex justify-center items-center p-2 shadow">
              <img
                src={`/assets/img/spotlight-section/logo/${logo}`}
                alt={`logo-${index}`}
                className="h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Spotlight Job Section */}
      <div className="flex flex-col xl:flex-row gap-4 items-start">
        {/* Left image */}
        <div className="w-full xl:w-2/3">
          <img
            src="/assets/img/spotlight-section/thumb-job/img_thumb_mgm_job.png"
            alt="spotlight-thumb"
            className="w-full rounded-lg"
          />
        </div>

        {/* Job info */}
        <div className="w-full xl:w-1/3 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl font-bold text-red-600 my-1">
              mgm technology partners Vietnam
            </h1>
            <h2 className="text-md font-semibold text-red-600 mb-4">
              Up to 5000$
            </h2>
            <p className="text-gray-600">Đà Nẵng, Hồ Chí Minh</p>
          </div>
          <div className="text-right xl:py-14 mt-4 xl:mt-0">
            <span className="text-red-600 text-xl font-bold">8 Job</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
