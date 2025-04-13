import React, { useState } from 'react'
import Dropdown from './dropdown-defaul'

const LocationDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState('Vị Trí')

  const handleSelect = (location) => {
    setSelectedLocation(location)
    console.log('Đã chọn:', location)
  }

  const locationOptions = [
    { label: 'Vị Trí', onClick: () => handleSelect('Vị Trí') },
    { label: 'Hà Nội', onClick: () => handleSelect('Hà Nội') },
    { label: 'TP. Hồ Chí Minh', onClick: () => handleSelect('TP. Hồ Chí Minh') },
    { label: 'Đà Nẵng', onClick: () => handleSelect('Đà Nẵng') },
  ]

  return (
    <Dropdown
      icon={<i className="fa-solid fa-location-dot" />}
      label={<span>{selectedLocation}</span>}
      options={locationOptions}
    />
  )
}

export default LocationDropdown
