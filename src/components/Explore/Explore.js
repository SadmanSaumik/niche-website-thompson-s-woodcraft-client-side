import useProduct from "../../hooks/useProducts";
import "./Explore.css";
import Product from "./Product/Product";

const Explore = () => {
  const { products } = useProduct();
  return (
    <div>
      <div className="container my-5">
        <div>
          <h2 className="text-center my-5">Explore Our Master Pieces</h2>
        </div>
        <div className="row gy-5">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              col="col-md-3"
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
