import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://floating-shore-39651.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useProduct;
