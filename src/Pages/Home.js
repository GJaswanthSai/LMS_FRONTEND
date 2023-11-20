import React from 'react'

import About from '../Components/About'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import WelcomeBox from '../Components/WelcomeBox'

function Home() {
    return (
        <div id='home'>
            <WelcomeBox/>
            <ImageSlider/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home
