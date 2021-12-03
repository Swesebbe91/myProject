import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./Home.css";
import image1 from "../pages/Components/Images/IMG_8353.JPG";
import image2 from "../pages/Components/Images/bild2.jpg";
import image3 from "../pages/Components/Images/bild3.JPG";
import image4 from "../pages/Components/Images/bild4.JPG";
const Home = () => {
  const [test, setTest] = useState([]);

  let a
  let b;
  useEffect(() => {
      console.log(test.length)
      a = [...test ]
      .map((item) => (!item.value));
      }
  , [test])

  const data = [
    {
      id: 0,
      image: {
        src: image1,
        alt: "A picture of some runners",
      },
      header: "Sunset Run Malmö",
      paragraph:
        'Sunset Run Malmö är ett motionslopp som går längs Sveriges vackraste strand "Ribban" 25 juli. Varmt välkommen att delta på festen!',
      buttonName: "Läs mer!",
      value: false,
      info: "Detta är kort 1",
      
    },
    {
     
      image: {
        src: image2,
        alt: "A picture of some runners",
      },
      header: "Anmälan",
      paragraph:
        "Om du vill delta på loppet anmäler du dig på knappen nedan, klicka sedan på varukorgen för att fylla i din information. OBS Anmälan är öppen t.om 16 juli",
      buttonName: "Anmäl dig här!",
      value: false,      
    },
    {
      id: 1,
      image: {
        src: image3,
        alt: "Some runners",
      },
      header: "Vinn häftiga priser",
      paragraph:
        "Alla som deltar i Sunset Run har chansen att vinna fina priser oavsett prestation, i detta lopp är glädjen och gemenskapen viktigare än resultatet" +
        "Förra året kunde man bl.a vinna Summer lodge paket på The lodge resort",
      info: "Detta är kort 3",
      buttonName: "Läs mer!",
      value: false, 
    },
    {
      
      image: {
        src: image4,
        alt: "some happy people",
      },
      header: "Glädje & Gemenskap",
      paragraph:
        "I Sunset Run är alla en vinnare! Här är glädjen och festen viktigare än själva resultatet. Familjer, vänner och kolleger kan delta tillsammans mot ett gemensamt mål.",
        value: false, 
    },
  ];

  function handleTest(item) {
    setTest(() => [...test, item]);
  }

  return (
    <div>
      <div className="bg-image test position-relative">
        <h2 className="font-style ml-sm  ">Sunset Run Malmö</h2>
        <p className="text-position position-absoulute text-style">
          Malmös <span style={{ textDecoration: "Underline" }}>vackraste</span>{" "}
          motionslopp!
        </p>
      </div>
      <div className="card-container">
        {data.map((item) => (
          <Cards
            key={item.id}
            image={item.image.src}
            header={item.header}
            paragraph={item.paragraph}
            buttonName={item.buttonName}
            flip = { item.value}
            onClicked={() => handleTest(item.id)}
            headerBackside = {item.header}
            paragraphBackside = {item.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
