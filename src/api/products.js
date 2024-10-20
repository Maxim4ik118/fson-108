import axios from "axios";

const productsInstance = axios.create({
    baseURL: "https://dummyjson.com/products",
    // headers: {
    //     Authorization: `Bearer ${token}`
    // }
    // params: {
    //     include_adult: false,
    //     language: "en-US",
    // }
});

export const getProducts = async (params)=> {
    const {data} = await productsInstance.get("/", {
        params
    });
    return data;
}

export const searchProducts = async (q)=> {
    const {data} = await productsInstance.get("/search", {
        params: {
            q
        }
    });
    return data; 
}

export const getProductById = async id => {
    const {data} = await productsInstance.get(`/${id}`);
    return data;
}