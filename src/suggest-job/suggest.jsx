import { useState } from "react";
import { Card, CardList } from "@/components/Cards/index";
const SuggestJob = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Tất cả");

  const locations = [
    "Tất cả",
    ...new Set(jobs.map((job) => job.location.name)),
  ];

  const filteredJobs =
    selectedLocation === "Tất cả"
      ? jobs
      : jobs.filter((job) => job.location.name === selectedLocation);

  return (
    <div className="px-4 py-8 max-w-[1376px] mx-auto">
      <h2 className=" text-2xl px-6 font-bold bg-gradient-to-r from-[#EB2702] via-[#FF7D25] to-[#FF7D25] text-transparent bg-clip-text mb-6">
        Công việc hot hôm nay
      </h2>
      <div className="flex px-6 flex-wrap gap-2 mb-6">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition ${
              selectedLocation === loc
                ? "bg-[#d34127] text-white border-[#d34127]"
                : "bg-white text-[#d34127] border-[#d34127] hover:bg-[#ffece6]"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            title={job.title}
            description={job.description}
            salary={job.salary}
            locationType={job.locationType}
            type={job.type}
            thumbnail={job.thumbnail}
          />
        ))}
      </div>

      {/* Fetch data bằng CardList */}
      <CardList onData={setJobs} />
    </div>
  );
};

export default SuggestJob;
