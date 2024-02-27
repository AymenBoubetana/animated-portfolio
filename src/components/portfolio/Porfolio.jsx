import "./Portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id:1,
    img:"https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Apple Landing Page",
    para:"The Apple Landing Page project aims to design and develop a web page that serves as a landing destination for users interested in learning more about Apple products, services, and initiatives. ",
  },
  {
    id:2,
    img:"https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"World capital Api Application",
    para:"Creating a World Capital API application involves developing a software tool or platform that interacts with an API (Application Programming Interface) to retrieve information about world capitals and possibly perform various operations on that data. ",
  },
  {
    id:3,
    img:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Restaurent App",
    para:"Creating a Restaurant App involves designing and developing a digital platform that allows users to discover, explore, and interact with restaurants. ",
  },
  {
    id:4,
    img:"https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"DAta Analysis of candien immegration",
    para:"Analyzing Canadian immigration data involves examining various aspects of immigration patterns, trends, demographics, and policies related to individuals moving to Canada for permanent residence, temporary residence, or refugee status. ",
  },
];
const Item=({item})=>{
  const ref = useRef();
  const {scrollYProgress}=useScroll({
    target:ref,
  });
  const y=useTransform(scrollYProgress, [0 ,1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="image" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="content"style={{y:y}}>
          <h2>{item.title}</h2>
          <p>{item.para}</p>
          <button className="btn">See more</button>
        </motion.div>
      </div>
    </section>
  )

}
const Porfolio = () => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({target:ref,offset:["end end ","start start"]});
  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects Overview</h1>
        <motion.div style={{scaleX:scaleX}} className="progressbar"></motion.div>
      </div>
     {items.map(item =>(
      <Item item={item} key={item.id} />
     ))}
    </div>
  )
}

export default Porfolio