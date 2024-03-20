import "./App.css";
import LeftSection from "./Components/Left-Section/LeftSection";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer"
import { trending, action, comedy, documentaries } from "./urls";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Ads from "./Components/Ads/Ads";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <div className="left-section">
          <LeftSection />
          < HiMiniBars3CenterLeft className="toggle-bar"/>
        </div>
        <div className="right-section">
          <Navbar className='navbar-component'/>
          <Banner />
          <RowPost url={trending} title="Netflix Originals" />
          <RowPost url={action} title="Action" isSmall />
          <Ads/>
          <RowPost url={comedy} title="Comedy" />
          <RowPost url={documentaries} title="Documentaries" isSmall/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
