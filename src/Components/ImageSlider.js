import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'
import chennai from '../images/chennai.jpg';



function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
            <Carousel.Item interval={2000000000}>
                    <img
                        className="d-block w-100"
                        src={chennai}
                        alt="Our Library"
                    />
                    <Carousel.Caption>
                        <h3>Our Library</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}

export default ImageSlider
