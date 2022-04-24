import React, { useContext, useState } from 'react'
import { BsPersonSquare, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ModeContext, ModeDispatch } from './Context';
import { ImCross } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import SmoothScroll from './SmoothScroll';


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const Select = useContext(ModeContext)
    const setSelect = useContext(ModeDispatch)

    const changeBG=()=>{
        setSelect(!Select)
        setMenu(false)
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light p-3 shadow" id="Navbar">
                <div className="container-fluid">
                    <div className="icon">
                        <BsPersonSquare />
                    </div>
                    <button onClick={()=>setMenu(!menu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {menu ? <span><ImCross /></span> : <span><AiOutlineMenu /></span>}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto text-center mb-2 mb-lg-0">
                            <li className="nav-item mb-4 mb-md-2">
                                <SmoothScroll name="Home" id="Home_Page" setMenu={setMenu} />
                            </li>
                            <li className="nav-item mb-4 mb-md-2">
                                <SmoothScroll name="About" id="About_Page" setMenu={setMenu} />
                            </li>
                            <li className="nav-item mb-4 mb-md-2">
                                <SmoothScroll name="Skills" id="Skills_Page" setMenu={setMenu} />
                            </li>
                            <li className="nav-item mb-4 mb-md-2">
                                <SmoothScroll name="Contact" id="Contact_Page" setMenu={setMenu} />
                            </li>
                        </ul>
                        <div className="mode text-center text-md-start">
                            <span onClick={changeBG} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{Select ? <BsFillSunFill className='text-warning' /> : <BsFillMoonFill className='text-dark' />}</span>
                        </div>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
