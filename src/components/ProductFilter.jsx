import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

function ProductFilter() {
  return (
    <section className="flex flex-col flex-wrap md:flex-row justify-around items-center gap-6 py-6 px-36">
      <div>
        <h6 className="text-mainSpace-grey">Showing all 12 results</h6>
      </div>

      <div className="flex gap-4 flex-row items-center">
        <h6 className="text-mainSpace-grey">Views:</h6>
        <button className="p-4 border-mainSpace-grey border-[1px] rounded-md text-mainSpace-blue">
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button className="p-4 border-mainSpace-grey border-[1px] rounded-md text-mainSpace-blue">
          <FontAwesomeIcon icon={faListUl} />{" "}
        </button>
      </div>

      <div className="flex gap-3 ">
        <select
          name="Sorting"
          id="sort"
          className="border-mainSpace-grey border-[1px] py-1 px-3 rounded-md text-mainSpace-blue bg-mainSpace-blue bg-opacity-5 tracking-wider"
        >
          <option value="popu">Popularity</option>
          <option value="top">Top sales</option>
          <option value="newest">Newest</option>
          <option value="prc-low-high">Price low to high</option>
          <option value="prc-high-low">Price high to low</option>
        </select>
        <button className="button-std tracking-wider">Filter</button>
      </div>
    </section> 
  )
}

export default ProductFilter