import React from 'react'
import h3 from "../../assets/h3.jpg"
import h2 from "../../assets/h2.jpg"
import h1 from "../../assets/h1.jpg"

import "./Portfolio.css"
// import {InstagramIcon} from '@mui/icons-material/Instagram';

function Portfolio() {
  return (
    <div className='portfolio__contianer section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2 className="text-title">Projects</h2>
                        <p className="text-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore commodi ab magnam natus consequuntur facilis?</p>
                    </div>
                </div>
            </div>

            <dvi className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body-port text-dark">
                            <div className="card-img mb-3">
                            <img src={h2} alt="" className='mt-3'/>
                            </div>
                            <div className="card-data-port">
                                <h3 className="card-title">Building Make</h3>
                                <p className="card-subtitle pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam ipsum incidunt voluptatibus officia eius reiciendis quos necessitatibus dolores nihil.</p>
                                <a href="#" className='btn btn-warning mb-3'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body-port text-dark">
                            <div className="card-img mb-3">
                            <img src={h1} alt="" className='mt-3' />
                            </div>
                            <div className="card-data-port">
                                <h3 className="card-title">Building Make</h3>
                                <p className="card-subtitle pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam ipsum incidunt voluptatibus officia eius reiciendis quos necessitatibus dolores nihil.</p>
                                <a href="#" className='btn btn-warning mb-3'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body-port text-dark">
                                <div className="card-img mb-3">
                                <img src={h2} alt="" className='mt-3'/>
                                </div>
                                <div className="card-data-port">
                                    <h3 className="card-title">Building Make</h3>
                                    <p className="card-subtitle pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam ipsum incidunt voluptatibus officia eius reiciendis quos necessitatibus dolores nihil.</p>
                                    <a href="#" className='btn btn-warning mb-3'>Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </dvi>
        </div>
      
    </div>
  )
}

export default Portfolio
