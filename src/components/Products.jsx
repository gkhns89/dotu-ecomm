import PropTypes from 'prop-types'


const Products = ({products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

    <section
    className="flex flex-col items-center px-10 py-20 md:py-12"
    aria-label="bestseller-products-section"
  >
    <div className="flex flex-wrap md:mb-12 justify-center gap-y-8 md:gap-y-12 max-w-6xl md:gap-x-8">
      {products.map((item, index) => (
        <div key={index} className="flex flex-col items-center ">
          <img
            src={item.picture}
            className="  h-[427px] md:w-60 md:h-[300px] "
            alt="shopCardPicture"
          ></img>

          <div className="flex flex-col items-center gap-3 px-6 pt-6 pb-9">
            <h5 className="font-bold">{item.title}</h5>
            <h6>{item.description}</h6>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-c5 line-through text-xs">{item.price1}</div>
              <div className="text-c1">{item.price2}</div>
            </div>
            <div className="flex flex-row gap-2 ">
              <button className="bg-[#FCA311] w-4 h-4 rounded-full"></button>
              <button className="bg-[#47AD97] w-4 h-4 rounded-full"></button>
              <button className="bg-[#00A1C1] w-4 h-4 rounded-full"></button>
              <button className="bg-[#B73225] w-4 h-4 rounded-full"></button>
            </div>
          </div>
        </div>
      ))}
    </div>


  </section>


  );
};

Products.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  productsRef: PropTypes.any
};

export default Products;