import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
   
      <div>
        <header className="min-w-[414px] mx-8 my-6 flex">
          <div id="header-top">
            <div
              id="logo"
              className="min-w-[153px] font-bold leading-8 tracking-[0.1px] text-txt-b"
            >
              DotuTasarım
            </div>

            <div id="header-buttons">
              <FontAwesomeIcon icon={faUser} bounce />
              <FontAwesomeIcon icon={faCartShopping} bounce />
              <FontAwesomeIcon icon={faBars} bounce />
            </div>
          </div>

          <div id="header-content"></div>
        </header>
      </div>
   
  );
}

export default App;
