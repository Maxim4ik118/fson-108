import { useEffect, useState } from "react";
import Section from "../Section";
import Loader from "../Loader/Loader";

import css from "./Shop.module.css";
import axios from "axios";
import SearchProductForm from "../SearchProductForm/SearchProductForm";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState(null); // [{...}, {...}, {...}]
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=10"
        );
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchValue === null) return;

    const fetchProductsBySearchValue = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${searchValue}`
        );
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsBySearchValue();
  }, [searchValue]);

  console.log("products: ", products);
  return (
    <div className={css.shopPage}>
      <Section>
        <h1>Products catalog</h1>
        <div className={css.searchWrapper}>
          <SearchProductForm onSearch={onSearch} />
        </div>
      </Section>
      <Section title="Products list">
        {isLoading && (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        )}
        {error && (
          <p>
            Oops, some error occured &quot;{error}&quot;. Please, try again
            later 🤷‍♂️.
          </p>
        )}
        <div className={css.list}>
          {products !== null &&
            products.map((item) => {
              return (
                <Link
                  to={`/products/${item.id}`}
                  key={item.id}
                  className={css.listItem}
                >
                  <img
                    className={css.itemImg}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h3 className={css.itemTitle}>{item.title}</h3>
                  <p className={css.itemDescription}>{item.description}</p>
                  <p className={css.itemDescription}>Rating: {item.rating}</p>
                </Link>
              );
            })}
        </div>
      </Section>
    </div>
  );
};

export default Shop;
