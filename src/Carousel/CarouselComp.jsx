import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'
import landing from '../Images/landing.jpg'
import landing1 from '../Images/landing3 (1).jpg'
import landing2 from '../Images/landing3 (4).jpg'
import landing3 from '../Images/landing3 (5).jpg'
import { Link } from 'react-router-dom'
const CarouselComp = () => {
  return (
  
    <Carousel className="carousel-slide" animation="slide" infiniteLoop={true}  autoPlay={true}  showThumbs={false}>
        
             <div className='img_Carousel'>
             <div className='cr-1'>
          <h1 className='cr-2'>
             Present All Over India !!!!
          </h1>
            <h4>
              10,000+ Trusted Customer ,One stop Solution for  All your Needs
            </h4>
          <li>
          <Link to='/Product' href="#"><button className='cr_btn'>ClickMe</button></Link>
        </li>
        </div>
             <img   src={landing} alt="homepage"/>
             </div>
             <div className='img_Carousel1'>
             <div className='cr-1'>
          <h1 className='cr-2'>
             Present All Over India !!!!
          </h1>
          <h4>
            24x7 Custmer support !!!!
          </h4>
          <li>
          <Link to='/Product' href="#"><button className='cr_btn'>Shop Now</button></Link>
        </li>
        </div>
             <img  src={landing1} alt=""/>
             </div>
             <div className='img_Carousel2'>
             <div className='cr-1'>
         <div className='third-slide'>
         <h1 className='cr-2'>
            Present All Over India !!!!
          </h1>
          <h4>
            Brands On All Your Choice's !!!!
          </h4>
         </div>
          <li className='third-slide-btn'>
          <Link to='/Product' href="#"><button className='cr_btn'>Buy Now</button></Link>
        </li>
        </div>
             <img  src={landing2} alt=""/>
             </div>
             <div className='img_Carousel3'>
             <div className='cr-1'>
          <h1 className='cr-2'>
             Present All Over India !!!!
          </h1>
          <h4>
            Best Quality available !!!!
          </h4>
          <li>
          <Link to='/Product' href="#"><button className='cr_btn'>ShopNow</button></Link>
        </li>
        </div>
             <img  src={landing3} alt=""/>
             </div>
    
    </Carousel>
 
  )
}

export default CarouselComp