import Food from "./../components/HomePage/Food";
import Testimonials from "../components/HomePage/Testimoinals";
import OurCollection from "../components/HomePage/OurCollection";
import Mission from "./Mission";
import HomeSection from "../components/HomePage/HomeSection";
import Slider from "../components/HomePage/Slider";
// import VideoComponent from "./../components/HomePage/VideoComponent";
import Rooms from './Rooms';

const Home = () => {
  return (
    <div>
      {/* <VideoComponent /> */}
      <Slider/>
      <HomeSection />
      <Mission />
      <Rooms />

      <Testimonials />
      <Food />
      <OurCollection />
    </div>
  );
};

export default Home;
