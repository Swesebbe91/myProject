import React from 'react'
import './About.css'
import BgText from './pages/Components/BgText'
const About = () => {
    return (
        <div>
            <div className="bg-img-header position-relative">
                <BgText />
            </div>
            <div className="background">
                <div className="div-container-holder">
                <h4 className="header-about">Om oss</h4>
                <p className="">Sunset Run Malmö är ett motionslopp som ägs av Sunset Run AB. Vi är ett företag som satsar stort på folkhälsa, underhållning och
                sprida glädje i Skåne regionen.  
                 </p>
                </div>
            </div>
        </div>
    )
}

export default About
