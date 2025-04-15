import { useState, useEffect } from "react";
import { Card, CardList, CardSkeleton } from "@/components/Cards/index";

const SuggestJob = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Tất cả");
  const [loading, setLoading] = useState(true);

  const handleData = (data) => {
    setJobs(data);
    setLoading(false); // Sau khi nhận được dữ liệu, set loading thành false
  };

  // Các địa điểm có trong danh sách
  const locations = [
    "Tất cả",
    ...new Set(jobs.map((job) => job.location.name)),
  ];

  // Lọc các công việc theo location đã chọn
  const filteredJobs =
    selectedLocation === "Tất cả"
      ? jobs
      : jobs.filter((job) => job.location.name === selectedLocation);

  // Hàm fetch dữ liệu
  const fetchJobs = () => {
    setLoading(true); // Set loading trước khi fetch
    // Giả lập fetch dữ liệu
    setTimeout(() => {
      // Giả sử CardList gọi hàm fetch từ API hoặc một nguồn dữ liệu
      // CardList sẽ gọi handleData sau khi lấy được dữ liệu
      CardList.onData(handleData); // Giả lập fetch dữ liệu từ API
    }, 2000); // Giả lập thời gian fetch (2 giây)
  };

  // Khi thay đổi location, sẽ reset loading và fetch lại dữ liệu
  useEffect(() => {
    setLoading(true); // Reset trạng thái loading
    fetchJobs(); // Gọi hàm fetch dữ liệu khi thay đổi location
  }, [selectedLocation]); // Theo dõi khi thay đổi location

  return (
    <div className="px-4 py-8 max-w-[1376px] mx-auto">
      <h2 className="text-2xl px-6 font-bold bg-gradient-to-r from-[#EB2702] via-[#FF7D25] to-[#FF7D25] text-transparent bg-clip-text mb-6">
        Công việc hot hôm nay
      </h2>

      {/* Location filter buttons */}
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

      {/* Job cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />) // Hiển thị skeleton khi loading
          : filteredJobs.length > 0
          ? filteredJobs.map((job) => (
              <Card
                key={job.id}
                title={job.title}
                description={job.description}
                salary={job.salary}
                locationType={job.locationType}
                type={job.type}
                thumbnail={job.thumbnail}
              />
            ))
          : <div className="col-span-full text-center text-gray-500 py-10">Không có công việc nào phù hợp.</div>
        }
      </div>

      {/* Fetch data từ CardList */}
      <CardList onData={handleData} />
    </div>
  );
};

export default SuggestJob;
