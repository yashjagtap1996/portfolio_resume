import React,{useContext,useEffect} from 'react'
import { ModeContext } from './Context';
import AOS from "aos";



const About = () => {

    const Select = useContext(ModeContext);
    useEffect(() => {
        AOS.init();
    });

  return (
    <>
          <div className={`container-fluid bg-${Select ? "dark" : "light"} border-bottom border-${Select ? "light" : "dark"}`}>
              <div className={`container d-flex flex-column justify-content-center ${Select ? "text-light" : "text-dark"}`} id="About_Page" data-aos="fade-right">
                  <div className="row mt-5 mt-md-0">
                    <div className="col-md-12 About-Header mb-5">
                        <h5>About Me</h5>
                        <h1>Know Me More</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center text-md-start col-lg-9 Intro mb-2 mb-md-5">
                        <h1>
                            Hi,I'm <span>Yash Jagtap</span>                        
                        </h1>
                        <p>
                            I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-around Info">
                      <div className="col-md-4 Email">
                        <h5>Email</h5>
                        <p>yashjagtap918@gmail.com</p>
                    </div>
                      <div className="col-md-4 DOB">
                        <h5>Date of birth</h5>
                        <p>25 December 1996</p>
                    </div>
                      <div className="col-md-4 From">
                        <h5>From</h5>
                        <p>Yavatmal,Maharashtra</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
