import React from 'react'

export default function ThirdSection() {
    return (
        <div style={{ boxShadow: "0px 20px 40px #0000001A" }} className=' text-[#0B0D39] relative w-full rounded-[50px] pt-16 pb-10 px-4 lg:px-[70px] ' >
            <p className=' text-3xl text-[#761799] text-center font-bold ' >Features</p> 
            <div className='  bg-[#7EC68F] w-[40px] h-[40px] absolute top-[15%] left-[5%] rounded-full ' /> 
            <div className=' w-full flex lg:flex-row flex-col gap-10 items-center justify-center  ' >
                <div style={{boxShadow: "0px 33px 61px #0B0D3914", borderRadius: "50px 50px 50px 20px"}} className=' max-w-xl py-14 px-8 flex items-center text-center flex-col' >
                    <p className=' font-bold text-2xl lg:max-w-sm ' >Connect & Share With Friends</p>
                    <p className=' mt-4 font-medium text-center ' >Create / Discover a wide range of community groups, access to events and unlock creative ways to support causes you care about.</p>
                </div>
                <div style={{boxShadow: "0px 33px 61px #0B0D3914", borderRadius: "50px 50px 50px 20px"}} className=' max-w-xl  py-14 px-8  flex items-center text-center flex-col' >
                    <p className=' font-bold text-2xl lg:max-w-sm ' >Better Donor Interaction</p>
                    <p className=' mt-4 font-medium  ' >Charities and social impact organisations are now able to closely interact with their donors and share the impact they are making all in one platform.</p>
                </div>
            </div>
            <div className=' w-full flex py-8 gap-4 justify-center  ' >
                <div style={{boxShadow: "0px 3px 6px #0000001A"}} className=' w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full ' >

                </div>
                <div style={{boxShadow: "0px 3px 6px #0000001A"}} className=' w-[50px] h-[50px] flex justify-center items-center bg-[#7B53FF] rounded-full ' >

                </div>
            </div>
            <div className=' w-full text-center ' >
                <p className=' text-2xl font-bold ' >No longer do you have to jump from app to app.</p>
                <p className=' mt-1 font-medium  ' >Hiroek is your one stop destination which makes it easier to give, connect, create and discover events. Providing you the tools to support causes close to your heart. It encourages giving via creative expression.</p>
            </div>
        </div>
    )
} 