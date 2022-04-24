import React, { useContext } from 'react'
import Column from '../reuse/Column'
import { ModeContext } from './Context'
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaFigma } from "react-icons/fa";


const Skills = () => {

  const Select = useContext(ModeContext)
 

  return (
    <>
      <div className={`container-fluid bg-${Select ? "dark" : "light"} border-bottom border-${Select ? "light" : "dark"}`}>
        <div className={`container d-flex flex-column justify-content-center align-items-center" ${Select ? "text-light" : "text-dark"}`} id="Skills_Page">
          <div className="row justify-content-around mt-5">
            <div className="col-md-5">
              <div className="row">
                <Column name="HTML" percentage="80%" width="80%" />
                <Column name="CSS" percentage="70%" width="70%" />
                <Column name="SASS" percentage="65%" width="65%" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <Column name="JavaScript" percentage="65%" width="65%" />
                <Column name="React" percentage="70%" width="70%" />
                <Column name="Bootstrap" percentage="75%" width="75%" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-around">
            <div className="col-md-5 figma text-center">
              <span><FaFigma /></span>
              <h1>Figma</h1>
              <p>Figma is a cloud-based design and prototyping tool for digital projects.</p>
            </div>
            <div className="col-md-5 text-center responsive">
              <span><FcSmartphoneTablet /></span>
              <h1>Layout</h1>
              <p>Responsive web design is about creating web pages that look good on all devices!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
