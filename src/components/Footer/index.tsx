import React from "react";
import Term from "../../pdf/TAndC.pdf";
import Policy from "../../pdf/PAndP.pdf";
// import { FaTiktok, FaInstagram FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-12 py-10 ">
        <div className=" w-full flex flex-col lg:items-start items-center ">
          <button className=" bg-[#7B53FF] text-white rounded-full font-semibold px-3 py-1 ">
            GET IN TOUCH
          </button>
          <div className=" flex items-center ">
            <p className=" text-xl my-8 ">info@hiroek.io</p>
            <a
              href="mailto:info@hiroek.io"
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
            <a
              href={"https://www.tiktok.com/@hiroekapp?_t=8iCpM6t1niD&_r=1"}
              target="_blank"
              rel="noreferrer"
              className=" w-fit "
            >
              <div className=" w-[50px] h-[50px] rounded-full border fill-[#7B53FF] border-[#CBACFC] flex justify-center items-center ">
                <svg className=" w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                {/* <FaTiktok color="#CBACFC" /> */}
              </div>
            </a>
            <a
              href={"https://www.instagram.com/hiroekapp?igshid=NGVhN2U2NjQ0Yg=="}
              target="_blank"
              rel="noreferrer"
              className=" w-fit "
            >
              <div className=" w-[50px] h-[50px] rounded-full border fill-[#7B53FF] border-[#CBACFC] flex justify-center items-center ">
                {/* <FaInstagram /> */}
                <svg className=" w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              href={"https://www.linkedin.com/company/hiroek/"}
              target="_blank"
              rel="noreferrer"
              className=" w-fit "
            >
              <div className=" w-[50px] h-[50px] rounded-full border fill-[#7B53FF] border-[#CBACFC] flex justify-center items-center ">
                <svg className=" w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                {/* <FaLinkedinIn /> */}
              </div>
            </a>
            {/* <div className=" w-[50px] h-[50px] rounded-full border border-[#CBACFC] flex justify-center items-center "></div> */}
          </div>
          <a href="https://ciof.org.uk/" target="_blank" >
            <img src="/assets/imgs/iof_logo.svg" className=" mt-6 " />
          </a>
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
