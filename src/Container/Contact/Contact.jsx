import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div className='contact__container section-padding'>
            <div className="container text-center ">
                <div className="row mb-3 mt-5">
                    <div className="col-md-12">
                        <h2 className='text-title'>Contact Us</h2>
                        <p className='text-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam dolor dolores consectetur mollitia voluptatem!</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-data">
                        <div className="row ">
                            <div className="col-md-12  d-flex flex-column  contact__input p-5">
                                {/* <div className=" mb-3"> */}
                                    <input type="text" placeholder='Enter Your Name' />
                                {/* </div> */}
                                {/* <div className="mb-3"> */}
                                    <input type="text" placeholder='Enter Your Email' />
                                {/* </div> */}
                                {/* <div className="mb-3"> */}
                                    <textarea type="text" placeholder='Enter Your Query' />
                                {/* </div> */}
                                {/* <div className="mb-3"> */}
                                    <a href="" className="btn btn-warning">Send</a>
                                {/* </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact 
