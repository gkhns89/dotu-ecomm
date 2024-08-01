import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
function Clients() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-y-14 py-12 my-28">
      <FontAwesomeIcon icon={faHooli} fixed-width size="7x" />
      <FontAwesomeIcon icon={faLyft} size="7x" />
      <FontAwesomeIcon icon={faPiedPiperHat} size="7x" />
      <FontAwesomeIcon icon={faStripe} size="7x" />
      <FontAwesomeIcon icon={faAws} size="7x" />
      <FontAwesomeIcon icon={faRedditAlien} size="7x" />
    </div>
  );
}

export default Clients;