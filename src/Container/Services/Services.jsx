import React from 'react'
import "./Services.css"

function Services() {
  return (
    <div className='services__container section-padding' >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 m-auto text-center">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi sapiente maiores assumenda velit soluta?</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-sm-12 col-lg-4">
            <div className="card text-center bg-dark  pb-2">
              <div className="card-body-services">
                <h4 >I</h4>
                <h3 className="card-title">Best Quality</h3>
                <p className="card-data">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt provident in eveniet autem similique repudiandae tempora quod non suscipit quasi, sit perspiciatis? Soluta, quis ipsam!</p>
                <a href="#" className='btn btn-warning'>Read more</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-12 col-lg-4">
            <div className="card text-center bg-dark pb-2">
              <div className="card-body-services">
                <h4>I</h4>
                <h3 className="card-title">Sustainibillity</h3>
                <p className="card-data">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt provident in eveniet autem similique repudiandae tempora quod non suscipit quasi, sit perspiciatis? Soluta, quis ipsam!</p>
                <a href="#" className='btn btn-warning'>Read more</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-12 col-lg-4">
            <div className="card text-center bg-dark pb-2">
              <div className="card-body-services">
                <h4>I</h4>
                <h3 className="card-title">Integrity </h3>
                <p className="card-data">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt provident in eveniet autem similique repudiandae tempora quod non suscipit quasi, sit perspiciatis? Soluta, quis ipsam!</p>
                <a href="#" className='btn btn-warning'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Services
