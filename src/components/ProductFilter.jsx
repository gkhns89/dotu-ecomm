import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

function ProductFilter() {
  return (
    <section className="flex flex-col flex-wrap md:flex-row justify-around items-center gap-6 py-6 px-36">
      <div>
        <h6 className="text-txt-g">Showing all 12 results</h6>
      </div>

      <div className="flex gap-4 flex-row items-center">
        <h6 className="text-txt-g">Views:</h6>
        <button className="px-6 py-4 border-c3 border-opacity-40  border-[1px] rounded-md text-txt-g">
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button className="px-6 py-4 border-c3 border-opacity-40 border-[1px] rounded-md text-txt-g">
          <FontAwesomeIcon icon={faListUl} />{" "}
        </button>
      </div>

      <div className="flex gap-3 ">
        <select
          name="Sorting"
          id="sort"
          className="form-select"
        >
          <option value="popu">Popularity</option>
          <option value="top">Top sales</option>
          <option value="newest">Newest</option>
          <option value="prc-low-high">Price low to high</option>
          <option value="prc-high-low">Price high to low</option>
        </select>
        <button className=" text-txt-w bg-c3 rounded-md py-4 px-6 min-h-full tracking-wider">
          Filter
        </button>
      </div>
    </section>
  );
}

export default ProductFilter;
