import {Cta} from "./Cta";
// import Me from "../Assets/Me.png";
import {HeaderSocial} from "./HeaderSocial";
import "./Header.css";


export const Header = (props) => {
    return (
        <header>
            <div className="container header_container">
              <h5>Hello I'm</h5>
              <h1>Khushi Agarwal</h1>
              <h5 className="text-light">
                Fullstack Developer
              </h5>
              <Cta/>
              <HeaderSocial/>

              {/* <div>
                  <img src={Me} className="me" />
              </div> */}
              <a href="./Contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
};

