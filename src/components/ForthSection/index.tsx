import React from "react";

export default function ForthSection(props: any) {
  return (
    <div className=" w-full flex items-center px-4 lg:flex-row relative flex-col lg:px-12 py-14 ">
      <div className="  bg-[#356DFF] w-[24px] h-[24px] absolute top-[15%] left-[5%] rounded-full " />
      <div className=" w-full flex justify-center relative ">
        <img src="/assets/imgs/access.png" alt="" />

        <div className="  bg-[#F65529] w-[20px] h-[20px] absolute lg:bottom-[0%] left-[3%] rounded-full " />
        <div className="  bg-[#8C43FE] w-[20px] h-[20px] absolute lg:bottom-[0%] left-[60%] rounded-full " />
      </div>
      <div className=" w-full relative flex justify-center lg:mt-0 mt-8 ">
        <div className="  bg-[#FFB300] w-[30px] h-[30px] absolute -top-[60%] right-[60%] rounded-full " />
        <div className="  bg-[#F65529] w-[20px] h-[20px] absolute -top-[60%] right-[10%] rounded-full " />
        <div className=" lg:max-w-lg ">
          <p className=" text-3xl lg:text-5xl leading  font-bold ">
            Get <span className=" text-[#8C43FE] ">Priority </span> Access!
          </p>
          <p className=" my-4 "> Be the first to know when Hiroek goes live!</p>
          <button
            onClick={() => props.open(true)}
            className=" w-full mt-4 py-3 text-white bg-[#0B0D39] font-medium rounded-[43px] rounded-bl-[12px] "
          >
            Get Access
          </button>
        </div>
        <div className="  bg-[#8C43FE] w-[20px] h-[20px] absolute -bottom-[40%] lg:-bottom-[80%] right-[40%] rounded-full " />
        <div className="  bg-[#7EC68F] w-[30px] h-[30px] absolute -bottom-[60%] right-[3%] rounded-full " />
      </div>
    </div>
  );
}
