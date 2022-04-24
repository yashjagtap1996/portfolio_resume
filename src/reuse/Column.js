import React,{useEffect} from 'react'
import AOS from "aos";


const Column = ({name,percentage,width}) => {

    useEffect(() => {
        AOS.init();
    });

  return (
    <>
          <div className="col-md-6">
              {name}
          </div>
          <div className="col-md-6 text-end">
              {percentage}
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="bar rounded-pill">
                      <div className="per-Bar rounded-pill" style={{ width: width}} data-aos="fade-right">

                      </div>
                  </div>
              </div>
          </div>

    </>
  )
}

export default Column
