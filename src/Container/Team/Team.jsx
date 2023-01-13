import React from 'react'
import "./Team.css"
import h1 from "../../assets/h1.jpg"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
function Team() {
    return (
        <div className='team__container section-padding'>
            <div className="container">
                <div className="row">
                    <div className="Team__heading text-center">
                        <h3 className="text-title">Our Team</h3>
                        <p className="text-subtitle p-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sed sit possimus exercitationem, numquam modi ex dolore officia enim, reprehenderit neque ullam eos aliquam tempore, obcaecati quisquam maxime corrupti. Nemo, nesciunt neque?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body-team text-center">
                                <div className="card__img d-flex justify-content-center ">
                                    <img src={p1} alt="" className=' mt-2 img-fluid rounded-circle mb-3' />
                                </div>
                                <div className="card__data">
                                    <h3 className="team-name ">Zaid Khan</h3>
                                    <p className="team-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab.</p>
                                    <p>Links</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body-team text-center">
                                <div className="card__img d-flex justify-content-center ">
                                    <img src={p2} alt="" className='mt-2 img-fluid rounded-circle mb-3' />
                                </div>
                                <div className="card__data">
                                    <h3 className="team-name ">Ayan Khan</h3>
                                    <p className="team-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab.</p>
                                    <p>Links</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body-team text-center">
                                <div className="card__img d-flex justify-content-center ">
                                    <img src={p4} alt="" className='mt-2 img-fluid rounded-circle mb-3' />
                                </div>
                                <div className="card__data">
                                    <h3 className="team-name ">Anish D</h3>
                                    <p className="team-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab.</p>
                                    <p>Links</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body-team text-center">
                                <div className="card__img d-flex justify-content-center ">
                                    <img src={p3} alt="" className='mt-2 img-fluid rounded-circle mb-3' />
                                </div>
                                <div className="card__data">
                                    <h3 className="team-name ">Jani</h3>
                                    <p className="team-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab.</p>
                                    <p>Links</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team
