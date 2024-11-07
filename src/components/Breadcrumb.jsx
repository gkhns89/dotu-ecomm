import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Breadcrumb() {
  return (
    <div className="text-mainSpace-grey flex gap-4 py-3 md:py-0 w-full md:justify-end justify-center items-center font-bold tracking-wider">
    <NavLink exact to="/">
      Home
    </NavLink>
    <FontAwesomeIcon icon={faAngleRight} />
    <NavLink exact to="/shop">
      Shop
    </NavLink>
  </div>
  )
}

export default Breadcrumb