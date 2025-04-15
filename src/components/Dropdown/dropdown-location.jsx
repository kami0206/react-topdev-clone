import React from "react";
import Dropdown from "./dropdown-defaul";

const LocationDropdown = ({ value, onChange }) => {
  const locationOptions = [
    { label: "Vị Trí", value: "all", onClick: () => onChange("all") },
    { label: "Hà Nội", value: "ha-noi", onClick: () => onChange("ha-noi") },
    {
      label: "Hồ Chí Minh",
      value: "ho-chi-minh",
      onClick: () => onChange("ho-chi-minh"),
    },
    { label: "Đà Nẵng", value: "da-nang", onClick: () => onChange("da-nang") },
  ];

  // Tìm label tương ứng với value để hiển thị
  const selectedOption =
    locationOptions.find((option) => option.value === value) ||
    locationOptions[0];

  return (
    <Dropdown
      icon={<i className="fa-solid fa-location-dot" />}
      label={<span>{selectedOption.label}</span>}
      options={locationOptions}
    />
  );
};

export default LocationDropdown;
