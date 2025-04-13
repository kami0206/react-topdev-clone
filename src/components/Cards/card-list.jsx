import React, { useEffect } from "react"

const API_URL = 'https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/jobs'

const CardList = ({ onData }) => {
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        onData && onData(data)
      })
      .catch((err) => {
        console.error("API error:", err)
      })
  }, [onData])

  return null // tuyệt đối không render gì cả
}

export default CardList
