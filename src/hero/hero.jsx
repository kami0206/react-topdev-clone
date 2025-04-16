import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import JobSearch from "../components/Input/input-search";
import LocationDropdown from "../components/Dropdown/dropdown-location";
import { CardSkeleton, Card } from "../components/Cards";
import instance from "../utils/api.js"; // axios đã setup baseURL

const HeroSection = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("all");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Hàm fetch chung
  const fetchResults = async (
    keywordInput = keyword,
    locationInput = location
  ) => {
    if (!keywordInput && locationInput === "all") {
      setResults([]);
      setShowResult(false);
      return;
    }

    setShowResult(true);
    setLoading(true);
    setResults([]);

    try {
      const response = await instance.get("jobs");
      let filtered = response.data || [];

      filtered = filtered.filter((job) => {
        const matchKeyword =
          !keywordInput ||
          job.title?.toLowerCase().includes(keywordInput.toLowerCase()) ||
          job.description?.toLowerCase().includes(keywordInput.toLowerCase());

        const matchLocation =
          !locationInput ||
          locationInput === "all" ||
          job.location?.slug === locationInput;

        return matchKeyword && matchLocation;
      });

      setResults(filtered);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounce tìm kiếm sau 2 giây khi gõ xong
  useEffect(() => {
    if (!keyword) {
      setShowResult(false); // ẩn kết quả nếu xóa hết nội dung
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchResults(keyword, location);
    }, 500);    
    return () => clearTimeout(delayDebounce);
  }, [keyword]);

  // Khi click nút tìm kiếm
  const handleSearch = () => {
    fetchResults(keyword, location);
  };

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 xl:w-5/12">
            <img
              src="/assets/img/hero-section/img_banner.png"
              alt="banner"
              className="w-full"
            />
          </div>
        </div>

        {/* Search */}
        <div className="py-10">
          <div className="flex flex-wrap items-center justify-center mb-4 gap-3">
            <div className="w-full md:w-10/12 lg:w-6/12 xl:w-6/12">
              <div className="gap-2 md:flex flex-col md:flex-row items-center">
                <div className="relative flex-1">
                  <JobSearch
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-fit text-center">
              <LocationDropdown
                value={location}
                onChange={(val) => {
                  setLocation(val);
                  if (keyword) {
                    fetchResults(keyword, val); 
                  }
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/12 text-center">
              <Button
                title="Tìm kiếm"
                onClick={handleSearch}
                variant="dark"
                className="w-full py-2"
              />
            </div>
          </div>

          {/* Filters (Optional) */}
          <div className="flex gap-2 justify-center mb-4">
            <Button
              title="New Job"
              variant="gradient"
              className="text-xs px-3 py-1"
            />
            <Button
              title="Part Time"
              variant="gradient"
              className="text-xs px-3 py-1"
            />
            <Button
              title="Full Time"
              variant="gradient"
              className="text-xs px-3 py-1"
            />
            <Button
              title="Work from home"
              variant="gradient"
              className="text-xs px-3 py-1"
            />
          </div>

          {/* Kết quả */}
          {showResult && (
            <div className="container mx-auto max-w-[1376px] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gradient">
                  Kết quả tìm kiếm
                </h1>
                <button
                  onClick={() => setShowResult(false)}
                  className="text-xl text-red-500 hover:underline font-semibold"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))
                ) : results.length === 0 ? (
                  <p className="text-start col-span-full">
                    Không tìm thấy kết quả phù hợp
                  </p>
                ) : (
                  results.map((job) => (
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
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
