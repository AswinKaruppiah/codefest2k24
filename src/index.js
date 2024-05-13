import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Ui/About/About";
import Intro from "./Ui/Intro/Intro";
import Timer from "./Ui/Timer/Timer";
// import Clientside from "./Ui/Slider/Clientside";
import Fullvideo from "./Ui/ShowFullVideo/Fullvideo";
import Footer from "./Ui/Footer/Footer";
import Timeline from "./Ui/timeline/Timeline";
import Workshop from "./Ui/workshop/Workshop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Intro />
    <Timer />
    <About />
    <Workshop />
    {/* <Clientside /> */}
    <Timeline />
    {/* <Fullvideo /> */}
    <Footer />
  </>
);
