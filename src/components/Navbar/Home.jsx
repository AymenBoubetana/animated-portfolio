import React from 'react';
import "./Home.scss";
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';
const Home = () => {
  return (
    
    <nav>
      <Sidebar/>
      <motion.h2 initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{ duration:0.5}} className='logo'>
        <span className='letter-1'>B</span>oubetan<span className='letter-2'>a</span>
      </motion.h2>
      <ul>
        <li><a href=""><img width="48" height="48" src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook-new"/></a></li>
        <li><a href=""><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a></li>
        <li><a href=""><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a></li>
      </ul>
    </nav>
  )
}

export default Home