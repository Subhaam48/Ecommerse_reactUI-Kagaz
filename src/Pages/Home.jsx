import React from 'react'
// import landing from '../Images/landing.jpg'
// import landingVideo from '../Videos/landingVideo.mp4'
import  './Csspages/Home.css'
import CarouselComp from '../Carousel/CarouselComp'
import Footer from './Footer/Footer'




const Home = () => {
  return (
   
      <div className='landing-page'>
        <CarouselComp/>
        <Footer />
       
      </div>
  )
}

export default Home