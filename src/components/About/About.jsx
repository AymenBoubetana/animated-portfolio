import "./About.scss"

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="content-about">
        <img src="aymen.png" alt="" />
        <ul>
          <li>
            <img src="dev.png" alt="" />
            <div className="content">
            <h2>
              Front-End Developer 
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque optio iusto sed?
            </p>
            </div>
          </li>
          <li>
            <img src="bar.png" alt="" />
            <div className="content">
            <h2>
              Big data Engineer 
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam culpa sit?</p>
            </div>
          </li>
          <li>
            <img src="py.png" alt="" />
            <div className="content">
            <h2>
              Python developer
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas provident recusandae hic.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About