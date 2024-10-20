import { useParams, Outlet } from "react-router-dom";

import ProductDetails from "../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  const {productId} = useParams();

  return (
    <>
      <ProductDetails id={productId} />
      <Outlet />
    </>
  )
};

export default ProductDetailsPage;
