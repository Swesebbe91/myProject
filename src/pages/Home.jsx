import Cards from "./Cards";
import "./Home.css";
import image1 from "../pages/Components/Images/IMG_8353.JPG";
import image2 from "../pages/Components/Images/bild2.jpg";
import image3 from "../pages/Components/Images/bild3.JPG";
import image4 from "../pages/Components/Images/bild4.JPG";
import BgText from "./Components/BgText";

const Home = () => {
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
      buttonNameBackside: "Vänd tillbaka kortet",
      paragraphBackside: "Sunset Run Malmö är ett motionslopp som går längs \"Ribban\" i Malmö varje sommar i slutet av juni. I loppet kan alla delta oavsett kön, ålder och nivå. Välj mellan distanserna 10 km, 5 km löpning alternativt 5 km promenad.",
      secondParagraphBack: "Inbjudan (Uppdateras om loppet kan arrangeras)",
      thirdParagraphBack: "Plats Ribersborgsstranden, Malmö (Start och mål mellan T-bryggan och Limhamnsfältet).",
      fourthParagrahBack: "Löpning: 250 kr (Tidtagning) Promenad: 150 kr (Ej tidtagning) Efteranmälan löpning: 350 kr Efteranmälan promenad: 250 kr",
    
    },
    {
      id: 1,
      image: {
        src: image2,
        alt: "A picture of some runners",
      },
      header: "Anmälan",
      paragraph:
        "Om du vill delta på loppet anmäler du dig på knappen nedan, klicka sedan på varukorgen för att fylla i din information. OBS Anmälan är öppen t.om 16 juli",
      buttonName: "Anmäl dig här!",
      buttonNameBackside: "Vänd tillbaka kortet",
      secondButton: "Anmäl dig här",
      paragraphBackside: "Om du vill delta på loppet anmäler du dig på knappen nedan, klicka sedan på varukorgen för att fylla i din information. OBS Anmälan är öppen t.om 16 juli!",
    },
    {
      id: 2,
      image: {
        src: image3,
        alt: "Some runners",
      },
      header: "Vinn häftiga priser",
      paragraph:
        "Alla som deltar i Sunset Run har chansen att vinna fina priser oavsett prestation, i detta lopp är glädjen och gemenskapen viktigare än resultatet. " +
        "Förra året kunde man bl.a vinna Summer lodge paket på The lodge resort",
      buttonName: "Läs mer!",
      buttonNameBackside: "Vänd tillbaka kortet",
      paragraphBackside: "Alla som deltar i Sunset Run har chansen att vinna fina priser oavsett prestation, i detta lopp är glädjen och gemenskapen viktigare än resultatet." +
      " Vi kommer efterhand att släppa fina priser här nedan som du har chans att vinna. Förra året kunde man bl.a vinna övernattning på Örenäs slott, Summer lodge paket på The lodge resort samt flera presentkort till deras spa m.m. ",
    },
    {
      id: 3,
      image: {
        src: image4,
        alt: "some happy people",
      },
      header: "Glädje, Gemenskap & underhållning",
      paragraph:
        "I Sunset Run är alla en vinnare! Här är glädjen och festen viktigare än själva resultatet. Familjer, vänner och kolleger kan delta tillsammans mot ett gemensamt mål.",
      paragraphBackside: "test"
    },
  ];

  return (
    <div>
      <div className="bg-image position-relative">
        <BgText
         />
        
      </div>
      <div className="card-container">
        {data.map((item) => (
          <Cards
            key={item.id}
            image={item.image.src}
            alt={item.image.alt}
            header={item.header}
            paragraph={item.paragraph}
            buttonName={item.buttonName}
            buttonBackside={item.buttonNameBackside}
            secondButton={item.secondButton}
            headerBackside={item.header}
            paragraphBackside={item.paragraphBackside}
            secondParagraphBack= {item.secondParagraphBack}
            thirdParagraphBack= {item.thirdParagraphBack}
            fourthParagraphBack= {item.fourthParagrahBack}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
