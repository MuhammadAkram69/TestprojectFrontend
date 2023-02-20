import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({}); // filters object to hold the filter values
  const [products, setProducts] = useState([]); // products array to hold the fetched products

  const fetchProducts = async () => {
    // construct the url based on the selected filters
    const url = `http://localhost:4000/products/?${Object.entries(filters)
      .filter(([key, value]) => value !== "") // only include filters with a value
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`; 

    try {
      const response = await axios.get(url);
      const data = await response.json();
      console.log("data after context api call",data)
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const updateFilter = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <ProductContext.Provider value={{ filters, products, updateFilter }}>
      {children}   // will pass to child components 
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
