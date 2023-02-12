import React from "react";
import Carousel from "../Carousel";

export default function HeroSection(props: any) {
  return (
    <>
      <div className=" w-full mt-1 flex lg:flex-row flex-col-reverse lg:px-0 px-4 items-center ">
        <div className=" w-full text-[#0B0D39] lg:pl-12 ">
          <p className=" text-3xl lg:text-5xl  font-bold ">
            Stay <span className=" text-[#8C43FE] ">Connected</span>, Be{" "}
            <span className=" text-[#8C43FE] ">Inspired</span>, Be{" "}
            <span className=" text-[#8C43FE] ">Empowered</span>.
          </p>
          <p className=" mt-4 ">
            Hiroek is a community engagement and social empowerment app.
            Galvanising a new generation who are passionate about community
            philanthropy and most importantly action.
          </p>
          <button
            onClick={() => props.open(true)}
            className=" w-full lg:w-auto lg:px-12 mt-4 py-3 text-white bg-[#8C43FE] font-medium rounded-[43px] rounded-bl-[12px] "
          >
            Get Priority Access
          </button>
        </div>
        <div className=" w-full lg:block  ">
          <Carousel />
        </div>
      </div>
      <div className=" w-full flex pl-12 relative ">
        <div className="  bg-[#8C43FE] w-[30px] h-[30px] absolute top-8 left-[7%] rounded-full " />
        <div className="  bg-[#FFB300] w-[50px] h-[50px] absolute top-28 right-[5%] rounded-full " />
        <img src="/assets/imgs/first.png" alt="" />
      </div>
      <div className=" w-full flex flex-col items-center px-4 lg:px-12 border-b  border-[#e7d6fe] pb-12 ">
        <div className=" lg:max-w-3xl ">
          <p className=" text-[#8C43FE] text-3xl font-bold text-center ">
            Why Hiroek?
          </p>
          <p className=" text-[#00005D] font-medium lg:text-center text-lg mt-2 lg:pb-2 pb-6 lg:border-b-0 border-b border-[#c7a5fd] ">
            Hiroek brings you closer to your community and empowers you to
            support the causes you care about.
          </p>
          <p className="text-[#00005D] font-medium lg:text-center text-lg lg:pt-2 pt-6">
            A tool for Grassroot Root based Organisations to create and expand
            space to amplify the crucial role they play in advancing social
            wellbeing.
          </p>
        </div>
      </div>
    </>
  );
}
