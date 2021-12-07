import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
        
        <div className="footer ">
           <p>© Copyright 2021 Sunset Run Malmö </p>
           <p>Sunset Run AB, Himmelsblåavägen 21 B, 21445, Malmö, info@sunsetrun.se, 040-12 34 56  </p>
           
           <div className="flex-row-container">
           <div>
           <BsFacebook size="2rem" />
           </div>
           <div><BsInstagram size="2rem" /> </div>
           
            

            <div>
            <BsYoutube size="2rem"/>
            </div>
            </div>
     
     </div>
       
    )
}

export default Footer
