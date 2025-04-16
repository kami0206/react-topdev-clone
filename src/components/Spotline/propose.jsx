import React, { useState } from "react"
import Slider from "react-slick"
import Card from "../Cards/card-job"
import CardList from "../Cards/card-list"
import CardSkeleton from "../Cards/card-job-skeleton"

const settings = {
  
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
}

const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const Propose = () => {
  const [jobs, setJobs] = useState(null)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Đề xuất cho bạn</h2>
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
  )
}

export default Propose
