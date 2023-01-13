import React from 'react'
import "./About.css"
import h3 from "../../assets/h3.jpg"


function About() {
  return (
    <div className='section-padding '>
      {/* hello about sections     */}
      <section id="about" className="about-container ">
      <h1 className='about__header text-title text-center'>About Us</h1>
      <p className="text-subtitle text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi delectus unde esse, ducimus incidunt impedit!</p>
        <div className="container">
          <div className="about-feature-row">
            <div className="col-lg-4 col-md-12 col-sm-12 m-auto">
              <div className="about-img">
                <img src={h3} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12  m-auto">
              <div className="about-text ">
                <h2 className='card-title mb-3 ' style={{"color" : "black" , "font-weight" : "500"}}>We Provide Best Quality <br /> Service Ever</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem sunt necessitatibus quod error unde tempora porro nihil nisi molestiae quas rem deleniti blanditiis eveniet sapiente fugiat ea, eligendi distinctio at obcaecati.</p>
                <a href="#"  className='btn btn-warning'>Explore More</a>
              </div>
            </div>
          </div>
        </div>


      </section>

    </div>
  )
}

export default About
