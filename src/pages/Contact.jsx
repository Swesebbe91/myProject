import React from "react";
import "./Contact.css";
import img1 from "./Components/Images/person2.jpg";
import img2 from "./Components/Images/person1.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
      <div className="bg-layout">
        <div className="flex-contact">
          <div>
            <h3 className="font-style-contact ">Sebastian Coe</h3>
            <br></br>
            <p className="text-align-right">Kundtjänst</p>
            <div className="flex-contact-column">
              <div className="flex-row-contact">
                <GrMail />
                <a
                  href="mailto:sebastiancoe@sunsetrunmalmo.com"
                  className="margin-left-contact"
                >
                  sebastiancoe@sunsetrunmalmo.com
                </a>
              </div>
              <div className="flex-row-contact">
                <BsFillTelephoneFill />
                <p className="margin-left-contact1"> 040-12 34 58</p>
              </div>
            </div>
          </div>
          <div>
            <img src={img1} className="img-size-contact"></img>
          </div>
        </div>

        <div className="flex-contact">
          <div>
            <img src={img2} className="img-size-contact margin-bottom"></img>
          </div>
          <div>
            <h3 className="font-style-contact ">Ivana Španović</h3>
            <br></br>
            <p className="text-align-right">Kundtjänst</p>
            <div className="flex-contact-column">
              <div className="flex-row-contact">
                <GrMail />
                <a
                  href="mailto:sebastianCoe@sunsetrunmalmo.com"
                  className="margin-left-contact"
                >
                  Ivanaspanovic@sunsetrunmalmo.com
                </a>
              </div>
              <div className="flex-row-contact">
                <BsFillTelephoneFill />
                <p className="margin-left-contact1"> 040-12 34 57</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
