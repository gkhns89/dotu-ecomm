import HeaderCategoryData from "../components/mocks/HeaderCategoryData";
import Bredcrumb from "../components/Breadcrumb";
function HeaderCategory() {
  return (
    <section className="bg-[#FAFAFA] py-6" aria-label="product-category-section">
      <div
        className="flex flex-col md:flex-row items-center md:justify-between gap-8 py-6 px-36"
        aria-label="product-category-title"
      >
        <h3 className="tracking-wider py-6 md:py-0 max-w-[50%] text-center text-wrap md:text-left">
          Shop
        </h3>
        {/* DYNAMICALLY CREATE NAVBAR => Breadcrumbs */}
        <Bredcrumb />
      </div>

      <div
        aria-label="product-category-inner-card"
        className="flex flex-wrap justify-center gap-4 px-32"
      >
        {HeaderCategoryData().map((item, index) => (
          <div
            aria-label="product-category-card"
            key={index}
            className="relative gap-3"
          >
            <img
              className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover "
              src={item.picture}
              alt="Photo"
            />
            <div
              aria-label="product-category-title"
              className="absolute flex flex-col gap-3 bottom-20 left-20 md:left-12 md:bottom-16 text-center font-bold px-12 py-3 backdrop-filter backdrop-blur-xs bg-[rgba(0,0,0,0.7)] text-textPapayas-white rounded-xl"
            >
              <h5 className="text-c4 font-bold">{item.description}</h5>
              <h6 className=" text-c2 font-normal">{item.emptyInfo}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeaderCategory;
