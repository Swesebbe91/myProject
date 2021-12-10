import React from "react";
import "./About.css";
import BgText from "./Components/BgText";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import imageLogo from "./Components/Images/sunset_run_transparent.png";
const About = () => {
  return (
    <div>
      <div className="bg-img-header position-relative">
        <BgText />
      </div>
      <div className="background">
        <div className="twocolumns">
          <div className="div-container-holder">
            <h4 className="header-about">Om oss</h4>
            <p className="font">
              Sunset Run Malmö är ett motionslopp som ägs och drivs av Sunset
              Run AB. Vi är ett företag som satsar stort på folkhälsa,
              underhållning och sprida glädje i Skåne regionen. Motionsloppet
              gick av stapeln för första gången 2019 i strålande solnedgång med
              dryga 350 deltagare på startlinjen. Vid första upplagan ingick 5
              km löpning och promenad. Vi har sedan dess fortsatt att utveckla
              loppet och numera finns även 10 km att välja på. Vår ambition är
              att Sunset Run ska vara ett årligt sommar arrangemang på Malmös
              hetaste badstrand även framöver.
            </p>
            <p>Om du vill kontakta oss kan du göra det på:</p>
            <div className="flex-c">
              <div className="flex-r">
                <GrMail />
                <a href="mailto:sunsetrunmalmo.com" className="margin-left-p">
                  sunsetrunmalmo.com
                </a>
              </div>
              <div className="flex-r">
                <BsFillTelephoneFill />
                <p className="margin-left-p1"> 040-12 34 56</p>
              </div>
            </div>
          </div>

          <img className="img-logo-size margin-right-img" src={imageLogo} />
        </div>
      </div>
    </div>
  );
};

export default About;
