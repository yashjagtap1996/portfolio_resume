import React from 'react'
import Form from '../reuse/Form'
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor:"#f5df4e"}}>
        <div className="container d-flex" id="Contact_Page">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-5 contact">
              <h1 className='mt-2'>Let's get in touch</h1>
              <p>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
              <h5>Living In:</h5>
              <p>Yavatmal,Maharashtra</p>
              <h5>Call:</h5>
              <p>+91 9359341742</p>
              <span><a href="https://github.com/yashjagtap1996" target="_blank" rel="noreferrer"><VscGithub className='mb-5 mb-md-0' /></a></span>
            </div>
            <div className="col-md-6">
              <h1 className='ms-3'>How Can I Help You?</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
