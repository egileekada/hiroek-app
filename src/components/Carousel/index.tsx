import { motion, AnimatePresence } from "framer-motion";
import React from "react"; 
// import slide1 from "/assets/imgs/slide/1.png";
// import slide2 from "/assets/imgs/slide/2.png";
// import slide3 from "/assets/imgs/slide/3.png";
// import slide4 from "/assets/imgs/slide/4.png";
// import slide5 from "/assets/imgs/slide/5.png";
// import slide6 from "/assets/imgs/slide/6.png";
// import slide4 from "../../assets/img/slider3.jpg";

const Carousel = () => {
  let reactSwipeEl;
  const directionOffset = 800;

  const boxAnimation = {
    key: "box",
    initial: { 
      opacity: 0,
    //   x: 400,
        scale: 0.5,
    },
    animate: {
        // x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: { 
        opacity: 0,  
        // x: -400
        scale: 0.5,
    },
    transition: {
        duration: 0.5,
        ease: "easeOut",
    },
  }

  const [isShown, setIsShown] = React.useState(0)
  const images: any = [ {img:"/assets/imgs/slide/1.png", imgsmall:"/assets/imgs/slide/one.jpg"}, {img:"/assets/imgs/slide/2.png", imgsmall:"/assets/imgs/slide/two.jpg"}, {img:"/assets/imgs/slide/3.png", imgsmall:"/assets/imgs/slide/three.jpg"}, {img:"/assets/imgs/slide/4.png", imgsmall:"/assets/imgs/slide/one.jpg"}, {img:"/assets/imgs/slide/5.png", imgsmall:"/assets/imgs/slide/five.jpg"}, {img:"/assets/imgs/slide/6.png", imgsmall:"/assets/imgs/slide/six.jpg"} ] 
  
  React.useEffect(() => { 
    const t1 = setTimeout(() => {  
      if(isShown === images.length-1){ 
        setIsShown(0) 
      } else { 
        setIsShown(prev=>prev+1) 
      }
    }, 5000); 
    return () => { 
      clearTimeout(t1); 
    }
  },[isShown])
  

  return(
    <div className=" w-full flex flex-col h-[240px] md:h-[430px] lg:my-0 my-6 lg:h-[450px] relative  " > 
      {images.map((item: any, index: any) => {
          return( 
            <AnimatePresence  key={index} >
              {index === isShown &&  
                <motion.div {...boxAnimation} className=" absolute md:h-[400px] flex justify-center lg:h-[450px] inset-x-0 top-0  "> 
                    <motion.img {...boxAnimation} className=" lg:block w-full hidden object-cover absolute h-[450px] inset-x-0 top-0  " src={item.img} alt="" /> 
                    <img className=" lg:hidden md:h-[400px]  lg:h-[450px] inset-x-0 top-0  " src={item.imgsmall} alt="" />
                
                </motion.div>  
              }
            </AnimatePresence> 
        )})}  
        <div className='  bg-[#FFB300] w-[30px] h-[30px] absolute top-8 left-[7%] rounded-full ' />
        <div className='  bg-[#8C43FE] w-[30px] h-[30px] absolute top-28 left-[5%] rounded-full ' />
        <div className=" flex items-center absolute w-full justify-center bottom-0 lg:-bottom-14 mt-4 gap-4 " >
            {images.map((item: any, index: any) => {
                return( 
                    <div className={index === isShown ? " w-[10px] lg:w-[20px] h-[10px] lg:h-[20px] rounded-full bg-[#8C43FE] ": " w-[10px] lg:w-[20px] h-[10px] lg:h-[20px] rounded-full bg-[#8C43FE] bg-opacity-30 "}  />
                )
            })}  
        </div>
    </div>
  )
};

export default Carousel;
