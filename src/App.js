import './App.css';
import Prenavbar from './Component/prenavbar.js';
import {BrowserRouter as Router} from "react-router-dom" ;
import {Route,Routes} from "react-router-dom" ;
import Navbar from './Component/Navbar.js';
import Slider from "./Component/slider.js";
import data from "./data/data.json" ;
import Offers from "./Component/Offers.js" ;
import Heading from "./Component/Heading.js";
import StarProduct from "./Component/StarProduct.js";
import HotAccessoriesMenu from "./Component/HotAccessoriesMenu.js";
import HotAccessories from './Component/HotAccessories.js';
import ProductReviews from './Component/ProductReviews.js';
import Videos from "./Component/Videos.js";
import Banner from "./Component/Banner.js";
import Footer from "./Component/Footer.js";
import NavOptions from "./Component/NavOptions.js"
function App() {
  return (
    <Router>
 
      <Prenavbar />
      <Navbar />
      <NavOptions miPhones = {data.miPhones} redmiPhones = {data.redmiPhones} tv = {data.tv} laptop = {data.laptop} fitness = {data.fitnessAndLifeStyle} home = {data.home} audio = {data.audio} accessories = {data.accessories}/>
      <Slider start = {data.banner.start}/>
      <Offers offer = {data.offer} />
      <Heading text = "STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text = "HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
      <Route path ="/music" element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>} />
      <Route path ="/smartDevice" element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>} />
      <Route path ="/home" element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>} />
      <Route path ="/lifeStyle" element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle}/>} />
      <Route path ="/mobileAccessories" element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>
      
      <Heading text = "PRODUCT REVIEWS" />

      <ProductReviews productReviews = {data.productReviews}/>
      <Heading text = "VIDEOS"/>
      <Videos videos = {data.videos}/>
      <Heading text = "IN THE PRESS"/>

      <Banner banner = {data.banner}/>

      <Footer footer = {data.footer}/>

    </Router>

  
  );
}

export default App;
