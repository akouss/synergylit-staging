import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Services from "./components/ServiceDesc";
import Information from "./components/Information";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div id="home" className="App safe-area">
      <NavBar />
      <Carousel />
      <Services />
      <Information />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
