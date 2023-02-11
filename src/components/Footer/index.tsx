import React from "react";
import Term from "../../pdf/TAndC.pdf";
import Policy from "../../pdf/PAndP.pdf";

export default function Footer() {
  return (
    <>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-12 py-10 ">
        <div className=" w-full flex flex-col lg:items-start items-center ">
          <button className=" bg-[#7B53FF] text-white rounded-full font-semibold px-3 py-1 ">
            GET IN TOUCH
          </button>
          <div className=" flex items-center ">
            <p className=" text-xl my-8 ">info@myhero.io</p>
            <a
              href="mailto:info@myhero.io"
              target="_blank"
              style={{ boxShadow: "0px 3px 6px #0000001A" }}
              className=" w-[40px] -rotate-45 ml-3 h-[40px] relative  flex justify-center items-center bg-[#7B53FF] rounded-full "
            >
              <svg
                className=" fill-current text-[#fff] rotate-180 w-[18px] "
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.96667 15.9333L0 7.96667L7.96667 0L9.4 1.43333L3.86667 6.96667H24V8.96667H3.86667L9.4 14.5L7.96667 15.9333Z" />
              </svg>
            </a>
          </div>
          <div className=" flex gap-2 ">
            <div className=" w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center "></div>
            <div className=" w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center "></div>
            <div className=" w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center "></div>
            <div className=" w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center "></div>
          </div>
        </div>
        <div className=" w-full flex flex-col lg:items-start items-center text-lg ">
          <div className=" flex mb-4 items-center ">
            <div className=" w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 " />
            <a
              href={Term}
              target="_blank"
              rel="noreferrer"
              className=" text-[#0B0D39CC] "
            >
              Terms and Conditions
            </a>
          </div>
          <div className=" flex mb-4 items-center ">
            <div className=" w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 " />
            <a
              href={Policy}
              target="_blank"
              rel="noreferrer"
              className=" text-[#0B0D39CC] "
            >
              Privacy Policy
            </a>
          </div>
          <div className=" flex mb-4 items-center ">
            <div className=" w-[7px] h-[7px] rounded-full bg-[#8C43FE] mr-3 " />
            <p className=" text-[#0B0D39CC] ">Join Us</p>
          </div>
        </div>
        <div className=" w-full flex justify-center ">
          <img src="/assets/imgs/comingsoon.png" alt="" />
        </div>
      </div>
      <div className=" w-full flex relative justify-center">
        <div className="  bg-[#FFB300] w-[20px] h-[20px] absolute lg:-top-[0%] right-[50%] rounded-full " />
        <div className=" lg:w-[70%] py-5 flex lg:text-base text-xs font-medium justify-center text-center border-t border-[#e7d6fe] ">
          Copyright MyHero Ltd © 2023. All right reserved
        </div>
      </div>
    </>
  );
}
