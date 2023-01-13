import React from 'react'
import h1 from "../../assets/h1.jpg"
import h2 from "../../assets/h2.jpg"
import h3 from "../../assets/h3.jpg"
import h4 from "../../assets/h4.jpg"
import About from '../About/About.jsx'
import "./Header.css"
function Header() {
    return (
        <div className='header__container'>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={h1} class="d-block w-100" alt="..." />
                        <div className="courasel__caption d-md-block">
                            <h5>True Construction</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis minima, illo voluptas libero debitis dicta veritatis blanditiis. Perspiciatis rem ipsa accusamus harum soluta dolore.</p>
                            <a href="" className='btn btn-warning'>Explore</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={h2} class="d-block w-100" alt="..." />
                        <div className="courasel__caption d-md-block">
                            <h5>Your Dream House</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis minima, illo voluptas libero debitis dicta veritatis blanditiis. Perspiciatis rem ipsa accusamus harum soluta dolore.</p>
                            <a href="" className='btn btn-warning'>Explore</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={h4} class="d-block w-100" alt="..." />
                        <div className="courasel__caption d-md-block">
                            <h5>Well Developed Area</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis minima, illo voluptas libero debitis dicta veritatis blanditiis. Perspiciatis rem ipsa accusamus harum soluta dolore.</p>
                            <a href="" className='btn btn-warning'>Explore</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <About />

        </div>
    )
}

export default Header
