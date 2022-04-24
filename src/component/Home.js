import React, { useContext } from 'react'
import { ModeContext } from './Context'


const Home = () => {

    const Select = useContext(ModeContext)
    
    return (
        <>
            <div className={`container-fluid bg-${Select ? "dark" : "light"} border border-${Select?"light":"dark"}`}>
                <div className="container d-flex align-items-center" id='Home_Page'>
                    <div className="row mt-5 mt-md-0 align-items-center" >
                        <div className={`col-md-6 ${Select ? "text-light" : "text-dark"}  home_intro`}>
                            <h6>Welcome to my portfolio website!</h6>
                            <h1>Hey folks,I'm Yash Jagtap</h1>
                            <h3>
                                Building a successfull product is a challenge.I am highly  energetic in user experiance design,interface and web development.
                            </h3>
                        </div>
                        <div className="col-md-6 home_photo">
                            <img src="images/hero (1).png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
