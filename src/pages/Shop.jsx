import React from 'react'


const ProductsData = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

}

function Shop() {
  return (
    <section className="bg-[#FAFAFA] py-6" aria-label="product-list-section">

<div
        aria-label="product-list-inner-card"
        className="flex flex-wrap justify-center gap-4 px-32"
      >
        {ProductsData().map((item, index) => (
          <div
            aria-label="product-list-card"
            key={index}
            className="relative gap-3"
          >
            <img
              className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover "
              src={item.picture}
              alt="Photo"
            />
            <div
              aria-label="product-list-title"
              className="absolute flex flex-col gap-3 bottom-20 left-20 md:left-12 md:bottom-16 text-center font-bold px-12 py-3 backdrop-filter backdrop-blur-xs bg-[rgba(0,0,0,0.2)] text-textPapayas-white rounded-xl"
            >
              <h5 className="font-bold">{item.description}</h5>
              <h6 className=" text-textPapayas-white font-normal">
                {item.emptyInfo}
              </h6>
            </div>
          </div>
        ))}
      </div>

</section>
  )
}

export default Shop