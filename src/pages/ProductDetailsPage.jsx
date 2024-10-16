import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  return <div>ProductDetailsPage. Id - {productId}</div>;
};

export default ProductDetailsPage;
