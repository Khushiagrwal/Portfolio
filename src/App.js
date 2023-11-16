import {Header} from "./components/Header";
import {Navbar}  from "./components/Navbar";
import {About}  from "./components/About"
import {Experience}  from "./components/Experience";
import {Services} from "./components/Services";
import {Portfolio} from "./components/Portfolio";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Testimonials} from "./components/Testimonials";


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
