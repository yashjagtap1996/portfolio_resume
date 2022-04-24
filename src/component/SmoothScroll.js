import React from 'react'
import { Link } from "react-scroll";


const SmoothScroll = ({name,id,setMenu}) => {
  return (
    <>
          <Link 
              onClick={()=>setMenu(false)}
              data-bs-toggle="collapse" 
              data-bs-target=".navbar-collapse.show"
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
          >{name}</Link>
    </>
  )
}

export default SmoothScroll
