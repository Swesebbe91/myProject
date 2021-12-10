import React from "react";
import Cards from "./Components/Cards";
import "./Information.css";
import BgText from "../pages/Components/BgText";
import Test from "./Components/Layout/Test";

const information = [
  {
    header: "Startider",
    paragraph:
      "Starttid Preliminär starttid 10 km löpning: 20.50 Preliminär starttid 5 km löpning & promenad: 21:00",
  },
  {
    header: "Nummerlappsutdelning",
    paragraph:
      "Sker på plats på arrangemangsområdet från 18.30 fram till start.",
    tag: "Klicka här för att se en karta!",
    url: "https://static.wixstatic.com/media/8465cd_32def170e8d9468db0faf4fc9a29bcf3~mv2.jpg",
  },
  {
    header: "Start PM & Tidsprogram",
    paragraph:
      "Denna sida kommer uppdateras när vi närmar oss loppet. Under denna flik hittar du viktig info om loppet samt tidsprogram.",
  },
];

const Information = () => {
  return (
    <>
      <div className="bg-img-headerInfo position-relative">
        <BgText />
      </div>
      <div>
        {information.map((item) => (
          <Cards
            header={item.header}
            paragraph={item.paragraph}
            link={item.url}
            aTag={item.tag}
          />
        ))}
        <div className="video">
          <Test />
        </div>
      </div>
    </>
  );
};

export default Information;
