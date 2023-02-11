import React from "react";

export default function ThirdSection() {
  const ref: any = React.useRef(null);
  const scroll = (scrolloffset: any) => {
    ref.current.scrollLeft += scrolloffset;
  };

  return (
    <div
      style={{ boxShadow: "0px 20px 40px #0000001A" }}
      className=" text-[#0B0D39] relative w-full rounded-[50px] pt-16 pb-10 px-4 lg:px-[70px] "
    >
      <p className=" text-3xl text-[#761799] text-center font-bold ">
        Features
      </p>
      <div className="  bg-[#7EC68F] w-[40px] h-[40px] absolute top-[15%] left-[5%] rounded-full " />
      <div
        ref={ref}
        className=" scroll_event w-full flex lg:flex-row overflow-x-auto pb-4  "
      >
        <div className=" w-auto flex gap-5 px-4 ">
          <div
            style={{
              boxShadow: "0px 33px 61px #0B0D3914",
              borderRadius: "50px 50px 50px 20px",
            }}
            className=" w-[80vw] lg:w-[400px] py-14 px-8 flex items-center text-center flex-col"
          >
            <p className=" font-bold text-2xl lg:max-w-sm ">
              Connect & Share With Friends
            </p>
            <p className=" mt-4 font-medium text-center ">
              Create / Discover a wide range of community groups, access to
              events and unlock creative ways to support causes you care about.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0px 33px 61px #0B0D3914",
              borderRadius: "50px 50px 50px 20px",
            }}
            className=" w-[80vw] lg:w-[400px]  py-14 px-8  flex items-center text-center flex-col"
          >
            <p className=" font-bold text-2xl lg:max-w-sm ">
              Better Donor Interaction
            </p>
            <p className=" mt-4 font-medium  ">
              Charities and social impact organisations are now able to closely
              interact with their donors and share the impact they are making
              all in one platform.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0px 33px 61px #0B0D3914",
              borderRadius: "50px 50px 50px 20px",
            }}
            className=" w-[80vw] lg:w-[400px] py-14 px-8 flex items-center text-center flex-col"
          >
            <p className=" font-bold text-2xl lg:max-w-sm ">Smart Profile</p>
            <p className=" mt-4 font-medium text-center ">
              With Hiroek, easily create and manage donations to a wide
              selection of causes and remain connected to the impact of your
              donation.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0px 33px 61px #0B0D3914",
              borderRadius: "50px 50px 50px 20px",
            }}
            className=" w-[80vw] lg:w-[400px]  py-14 px-8  flex items-center text-center flex-col"
          >
            <p className=" font-bold text-2xl lg:max-w-sm ">Feed</p>
            <p className=" mt-4 font-medium  ">
              Cut through less encouraging headlines and lift your spirit. We
              provide you with positive life giving news and connect you with
              others making positive life giving moves in the society.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex py-8 gap-4 justify-center  ">
        <div
          onClick={() => scroll(-400)}
          role="button"
          style={{ boxShadow: "0px 3px 6px #0000001A" }}
          className=" w-[50px] h-[50px] flex justify-center items-center bg-white hover:bg-[#7B53FF] rounded-full hover:text-[#fff] text-[#303030]"
        >
          <svg
            className=" fill-current w-[20px] "
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.96667 15.9333L0 7.96667L7.96667 0L9.4 1.43333L3.86667 6.96667H24V8.96667H3.86667L9.4 14.5L7.96667 15.9333Z" />
          </svg>
        </div>
        <div
          onClick={() => scroll(400)}
          role="button"
          style={{ boxShadow: "0px 3px 6px #0000001A" }}
          className=" w-[50px] h-[50px] flex justify-center items-center bg-white hover:bg-[#7B53FF] rounded-full hover:text-[#fff] text-[#303030] "
        >
          <svg
            className=" fill-current w-[20px]  rotate-180 "
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.96667 15.9333L0 7.96667L7.96667 0L9.4 1.43333L3.86667 6.96667H24V8.96667H3.86667L9.4 14.5L7.96667 15.9333Z" />
          </svg>
        </div>
      </div>
      <div className=" w-full text-center ">
        <p className=" text-2xl font-bold ">
          No longer do you have to jump from app to app.
        </p>
        <p className=" mt-1 font-medium  ">
          Hiroek is your one stop destination which makes it easier to give,
          connect, create and discover events. Providing you the tools to
          support causes close to your heart. It encourages giving via creative
          expression.
        </p>
      </div>
    </div>
  );
}
