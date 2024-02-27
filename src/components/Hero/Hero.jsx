import "./Hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scroll:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};
const slider={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      duration:20,
      repeatType:"mirror",

    },
  },
}
const Download=()=>{
  var a = document.createElement("a");
    a.style = "display: none";
    a.href = "portfolio.pdf";
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
   

}
const Hero = () => {
  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div
          className="content"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Aymen Boubetana</motion.h2>
          <motion.h4 variants={textVariants}>
            Big data & information Systems Enginner student
          </motion.h4>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button id="b1" className="b1" onClick={Download} variants={textVariants}>
              Download my resume
            </motion.button>
            <motion.button className="b2" variants={textVariants}>
              <a href="#Get On Touch">Contact me</a>
              
            </motion.button>
          </motion.div>
          <motion.img src="scroll.png" alt="" variants={textVariants} animate="scroll" />
        </motion.div>
      </div>
      <motion.div className="slider" variants={slider} initial="initial" animate="animate" >Web developement lover</motion.div>
      <div className="image">
        <img src="oop.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
