import React from 'react'
import Term from "../../pdf/TAndC.pdf"
import Policy from "../../pdf/PAndP.pdf"

export default function Footer() {
    return (
        <> 
            <div className=' w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-12 py-10 ' >
                <div className=' w-full flex flex-col lg:items-start items-center ' >
                    <button className=' bg-[#7B53FF] text-white rounded-full font-semibold px-3 py-1 ' >GET IN TOUCH</button>
                    <p className=' text-xl my-8 ' >hello@hiroek.com</p>
                    <div className=' flex gap-2 ' >
                        <div className=' w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center ' >

                        </div>
                        <div className=' w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center ' >

                        </div>
                        <div className=' w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center ' >

                        </div>
                        <div className=' w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center ' >

                        </div>
                    </div>
                </div>
                <div className=' w-full flex flex-col lg:items-start items-center text-lg ' >
                    <div className=' flex mb-4 items-center ' >
                        <div className=' w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 ' />
                        <a href={Term} target="_blank" rel="noreferrer" className=' text-[#0B0D39CC] ' >Terms and Conditions</a>
                    </div>
                    <div className=' flex mb-4 items-center ' >
                        <div className=' w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 ' />
                        <a href={Policy} target="_blank" rel="noreferrer" className=' text-[#0B0D39CC] ' >Privacy Policy</a>
                    </div>
                    <div className=' flex mb-4 items-center ' >
                        <div className=' w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 ' />
                        <p className=' text-[#0B0D39CC] ' >Join Us</p>
                    </div>
                </div>
                <div className=' w-full flex justify-center ' >
                    <img src='/assets/imgs/comingsoon.png' />
                </div> 
            </div>
            <div className=' w-full flex relative justify-center' > 
                <div className='  bg-[#FFB300] w-[20px] h-[20px] absolute lg:-top-[0%] right-[50%] rounded-full ' /> 
                <div className=' lg:w-[70%] py-5 flex lg:text-base text-xs font-medium justify-center text-center border-t border-[#e7d6fe] ' >
                    Copyright MyHero Ltd © 2023. All right reserved
                </div>
            </div>
        </>
    )
} 