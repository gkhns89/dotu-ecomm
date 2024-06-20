import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
   
      <div>
        <header aria-label="header" className="min-w-[414px] mx-8 my-6">
          <div aria-label="header-top" className="flex justify-between">
            <div
              aria-label="logo"
              className="flex items-center min-w-[153px] font-bold leading-8 tracking-[0.1px] text-txt-b"
            >
              DotuTasarım
            </div>
            <div aria-label="header-content" className="sm:flex items-center hidden">
              <input type="text" placeholder="Search" className="border-2 border-gray-400 p-2" />
              <select className="border-2 border-gray-400">
                <option>Black Friday</option>
                <option>Outlet</option>
              </select>
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div aria-label="header-buttons" className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faCartShopping} />
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>

          
        </header>
      </div>
   
  );
}

export default App;
