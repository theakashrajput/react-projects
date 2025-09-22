import { useState } from "react";
import Product from "./ProductElement";

const Products = () => {
  const [productsData, setProductsData] = useState([
    { name: "Product 1", detail: "This is product" },
    { name: "Product 2", detail: "This is product 2" },
    { name: "Product 3", detail: "This is product 3" },
    { name: "Product 4", detail: "This is product 4" },
    { name: "Product 5", detail: "This is product 5" },
    { name: "Product 6", detail: "This is product 6" },
    { name: "Product 7", detail: "This is product 7" },
  ]);

  return (
    <div className="pt-20 pb-5 px-5 w-full h-screen">
      <h1 className="text-3xl">Product Page</h1>
      <div className="bg-zinc-300 h-[90%] p-5 mt-5 flex gap-5 flex-wrap">
        {productsData.map((ele, idx) => (
          <Product data={ele} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
