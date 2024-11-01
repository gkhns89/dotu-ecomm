import PropTypes from 'prop-types'


const Products = ({products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

    <section id='product-list' className="bg-[#FAFAFA] py-6" aria-label="product-list-section">

    <div
            aria-label="product-list-inner-card"
            className="flex flex-wrap justify-center gap-4 px-32"
          >
            {products.map(product => (
              <div
                aria-label="product-list-card"
                key={product.id}
                className="relative gap-3"
              >
                <img
                  className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover "
                  src={product.picture}
                  alt="Photo"
                />
                <div
                  aria-label="product-list-title"
                  className="absolute flex flex-col gap-3 bottom-20 left-20 md:left-12 md:bottom-16 text-center font-bold px-12 py-3 backdrop-filter backdrop-blur-xs bg-[rgba(0,0,0,0.2)] text-textPapayas-white rounded-xl"
                >
                  <h5 className="font-bold">{product.description}</h5>
                  <h6 className=" text-textPapayas-white font-normal">
                    {product.emptyInfo}
                  </h6>
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