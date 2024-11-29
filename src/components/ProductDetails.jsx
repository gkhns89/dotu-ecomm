import { useParams, useLocation, useHistory } from "react-router-dom";
import ProductsData from "../components/mocks/ProductsData";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductDetailExt from "./ProductDetailExt";
import BestsellerProducts from "./BestsellerProducts";
import Clients from "./Clients";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  let item = location.state?.item;

  if (!item) {
    item = ProductsData().find((item) => item.id === parseInt(id));
    console.log(item);
  }

  if (!item) {
    history.push("/shop");
    return null;
  }

  return (
    <section>
      <Breadcrumb />
      <ProductDetail item={item} />
      <ProductDetailExt item={item} />
      <BestsellerProducts />
      <Clients />
   
    </section>
  );
}

export default ProductDetails;
