import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'
import ForthSection from '../../components/ForthSection'
import Footer from '../../components/Footer'

export default function HomePage() {
    return (
        <div style={{background: "transparent linear-gradient(356deg, #E4ECFE 0%, #FFFFFF 12%, #EAF0FE 47%, #FDFDFE 96%, #FFFFFF 100%) 0% 0% no-repeat padding-box"}} className=' w-full ' >
            <Navbar />
            <HeroSection />
            <SecondSection />
            <div className=' lg:px-12 ' >
                <ThirdSection />
            </div>
            <ForthSection />
            <Footer />
        </div>
    )
} 