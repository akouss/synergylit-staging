import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Services from "./components/ServiceDesc";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App safe-area">
      <NavBar />
      <Carousel />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
