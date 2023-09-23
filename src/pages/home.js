import "../components/home/style.css";


import Head from "../components/home/head";
import BodyOne from "../components/home/bodyone";
import BodyTwo from "../components/home/bodytwo";
import BodyThree from "../components/home/bodythree";
import BodyFour from "../components/home/bodyfour";
import BodyFive from "../components/home/bodyfive";
import BodySix from "../components/home/bodysix";
import BodySeven from "../components/home/bodyseven";
import BodyEight from "../components/home/bodyeight";
import Footer from "../components/home/footer";

function Home() {

  return (
    <div className="homePage">
        <Head/>
        <BodyOne/>
        <BodyTwo/>
        <BodyThree/>
        <BodyFour/>
        <BodyFive/>
        <BodySix/>
        <BodySeven/>
        <BodyEight/>
        <Footer/> 
    </div>
  );
}

export default Home;
