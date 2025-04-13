import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardList, CardSkeleton } from "@/components/Cards/index";
import { NextArrow, PrevArrow } from "@/components/Carousel/index";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HotJobToday = () => {
  const [jobs, setJobs] = useState(null);
  return (
    <div className="border-y border-[#d34127] bg-gradient-to-b from-[#ffece6] to-[#fff5f0]">
      <div className="container mx-auto px-4 py-8 max-w-[1376px] relative  ">
        <h2 className="text-center text-2xl font-bold  bg-gradient-to-r from-[#EB2702] via-[#FF7D25] to-[#FF7D25] text-transparent bg-clip-text mb-4">
          Công viêc Hot hôm nay
        </h2>
        {!jobs ? (
          [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
        ) : (
          <Slider {...settings}>
            {getRandomItems(jobs, 4).map((job) => (
              <div key={job.id}>
                <Card
                  title={job.title}
                  description={job.description}
                  salary={job.salary}
                  locationType={job.locationType}
                  type={job.type}
                  thumbnail={job.thumbnail}
                />
              </div>
            ))}
          </Slider>
        )}
        <CardList onData={setJobs} />
      </div>
    </div>
  );
};

export default HotJobToday;
