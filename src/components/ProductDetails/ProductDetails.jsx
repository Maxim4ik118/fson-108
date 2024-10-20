import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { getProductById } from "../../api/products";

const ProductDetails = ({id})=> {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("product details", location);

    useEffect(()=> {
        const fetchProduct = async ()=> {
            try {
                const data = await getProductById(id);
                // const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(data);
            }
            catch(error) {
                console.log(error.message);
            }
        }

        fetchProduct();
    }, []);

    if(!product) {
        return null;
    }

    const backUrl = location.state?.from || "/products";
    const goBack = ()=> navigate(backUrl);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
           <h1>{product.title}</h1>
           <Link state={{from: backUrl}} to={`/products/${id}/reviews`}>Reviews</Link>
        </div>
    )
}

export default ProductDetails;