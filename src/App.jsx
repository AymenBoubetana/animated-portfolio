import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Home from "./components/Navbar/Home";
import Contact from "./components/contact/Contact";
import "./components/global.scss";
import Parallex from "./components/parallex/Parallex";
import Porfolio from "./components/portfolio/Porfolio";
const App = () => {
  return(
    <>
    <section id="Home">
     <Home/>
     <Hero/>
    </section>
    <section id="About">
      <Parallex type="about"/>
    </section>
    <section>
      <About/>
    </section>
    <section id="Portfolio">
      <Parallex type="porfolio"/>
    </section>
    <Porfolio/>
    <section id="Get On Touch">
      <Contact/>
    </section>
    
    </>
  );
};

export default App;
