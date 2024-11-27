import { useParams, useLocation, useHistory } from "react-router-dom";
import ProductsData from "../components/mocks/ProductsData";

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
    <div>
      <h1>{item.title}</h1>
      <img src={item.picture} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
}

export default ProductDetails;
