import React from 'react'

export default function SecondSection() {
    return (
        <div className=' w-full px-4 lg:px-12 relative text-[#0B0D39] font-medium gap-12 flex lg:flex-row flex-col items-center py-12 ' >
            
            <div className='  bg-[#F65529] w-[26px] h-[26px] absolute top-0 lg:top-12 left-[7%] rounded-full ' />
            <div className=' w-full flex flex-col items-center  ' >
                <div className=' lg:max-w-xl pb-6 border-b border-[#c7a5fd] ' >
                    <p className=' text-3xl font-bold ' >Connect With Friends, & Other Like Minded Individuals</p>
                    <p className=' text-base mt-4 ' >Engage in discussion on trending topics you care about in a moderated environment.</p>
                </div>
                <div className=' max-w-xl pt-6' >
                    <p className=' text-base' >Hiroek is passionate about helping the youth see themselves as global citizens, as part of the community and to become part of the solution on issues they face on a daily basis.</p>
                </div>
            </div>
            <div className=' w-full flex items-center relative ' > 
                <div className='  bg-[#356DFF] w-[26px] h-[26px] absolute top-[20%] right-[1%] rounded-full ' />
                <div className='  bg-[#8C43FE] w-[40px] h-[40px] absolute top-[48%] right-[3%] rounded-full ' />
                <img src='/assets/imgs/connect.png' />
                <div className='  bg-[#FFB300] w-[50px] h-[50px] absolute bottom-[20%] -left-[6%] rounded-full ' />
                <div className='  bg-[#F65529] w-[26px] h-[26px] absolute -bottom-20 right-[35%] rounded-full ' />
            </div>
        </div>
    )
} 