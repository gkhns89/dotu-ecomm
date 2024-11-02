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
    <section aria-label="clients-section">
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center py-40 md:py-12 md:px-28 gap-12 bg-[#FAFAFA]">
        <FontAwesomeIcon
          icon={faHooli}
          fixed-width
          className="text-[#737373] size-20 px-9"
        />
        <FontAwesomeIcon icon={faLyft} className="text-[#737373] size-20 px-9" />
        <FontAwesomeIcon
          icon={faPiedPiperHat}
          className="text-[#737373] size-20 px-9"
        />
        <FontAwesomeIcon icon={faStripe} className="text-[#737373] size-20 px-9" />
        <FontAwesomeIcon icon={faAws} className="text-[#737373] size-20 px-9" />
        <FontAwesomeIcon
          icon={faRedditAlien}
          className="text-[#737373] size-20 px-9"
        />
      </div>
    </section>
  );
}

export default Clients;