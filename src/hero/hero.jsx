import React from 'react';

import Button from '../components/Button/button';
import JobSearch from '../components/Input/input-search';
import LocationDropdown from '../components/Dropdown/dropdown-location';

const HeroSection = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        {/* Banner Image */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 xl:w-5/12">
            <img
              src="/assets/img/hero-section/img_banner.png"
              alt="banner"
              className="w-full"
            />
          </div>
        </div>

        {/* Job Search Section */}
        <div className="py-10  ">
          <div className="flex flex-wrap items-center justify-center mb-4 gap-3">
            <div className="w-full md:w-10/12 lg:w-6/12 xl:w-6/12">
              <div className="gap-2 md:flex flex-col md:flex-row items-center ">
                <div className="relative flex-1">
                  <JobSearch />
                </div>
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="w-fit md:w-fit  text-center">
              <div className="relative w-full mx-0">
                <LocationDropdown />
              </div>
            </div>

            {/* Search Button */}
            <div className="w-1/2 md:w-1/12 text-center ">
              <Button
                title="Tìm kiếm"
                onClick={() => console.log('Searching...')}
                variant="dark"
                className="w-full py-3"
              />
            </div>
          </div>

          {/* Job Type Filters */}
          <div className="flex gap-2 justify-center mb-4">
                <Button title="New Job" variant="gradient" className="text-xs px-3 py-1" />
                <Button title="Part Time" variant="gradient" className="text-xs px-3 py-1" />
                <Button title="Full Time" variant="gradient" className="text-xs px-3 py-1" />
                <Button title="Work from home" variant="gradient" className="text-xs px-3 py-1" />
           </div>


          {/* Search Result Section */}
          <div id="js-search-jobs-result" className="container hidden">
            <h1 className="text-2xl font-bold text-gradient mb-8">
              Kết quả tìm kiếm
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" id="js-search-result-list">
              {/* Job results will be populated here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
