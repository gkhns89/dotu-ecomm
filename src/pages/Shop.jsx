import Products from "../components/Products";
import Pagination from "../components/Pagination";
import ProductsData from "../components/mocks/ProductsData";
import { useState, useEffect, useRef } from "react";
import ProductFilter from "../components/ProductFilter";
import HeaderCategory from "../components/HeaderCategory";
//import axios from "axios";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setLoading(true);
    setProducts(ProductsData);
    setLoading(false);
  }, []);

  // Get products via Axios
  /*   useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setProducts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []); */

  // Get current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <HeaderCategory />
    <ProductFilter />
      <Products products={currentProducts} loading={loading} productsRef={productsRef} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        scrollToProducts={scrollToProducts}
      />
    </>
  );
}
