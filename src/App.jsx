
import './App.css'
import HeroSection from './hero/hero'
import NavBar from './navbar/nav-bar'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SpotlightSection from './spotline-section/spotline'
import TopCompany from './topcompany/top-com'
import HotJobToday from './hotjobtoday/hot-job'
import SuggestJob from './suggest-job/suggest'
import BlogList from './blog-section/blog-slider'
import Footer from './footer'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <SpotlightSection/>
      <TopCompany/>
      <HotJobToday/>
      <SuggestJob/>
      <BlogList/>
      <Footer/>
    </>
  )
}

export default App
