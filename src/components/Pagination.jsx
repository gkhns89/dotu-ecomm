import PropTypes from 'prop-types'
const Pagination = ({ productsPerPage, totalProducts, paginate, scrollToProducts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="flex justify-center">
      <div className="flex flex-row gap-4 ">
        {pageNumbers.map((number) => (
          <div key={number}>
            <button
              onClick={() => paginate(number) && scrollToProducts() }
              
              // onClick={() => {
              //   if (number === 1) {
              //     scrollToProducts();
              //   }  else {
              //     paginate(number);    
              //   }
              // }}
              href={() => paginate(number)}
              className="w-10 h-10 flex justify-center items-center border border-c1 rounded-md"
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
  paginate: PropTypes.func,
  scrollToProducts: PropTypes.func
};

export default Pagination;
