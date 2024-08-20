import { useEffect, useState } from "react";
import { ProductInterface } from "../util/interface";
import Products from "./Product";
import Pdp from "./Pdp";
const Home = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [singleProduct, setSingleProduct] = useState<ProductInterface>();
  const [showPdp, setShowPdp] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const getCategoryName = (items: string) => {
    const categoryName = items;

    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  const getProductId = (id: number) => {
    const productId = id;
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
    setShowPdp(false);
  };

  return (
    <div>
      <div className="container mx-auto p-16 border">
        <div className="flex justify-center mb-16 ">
          <h1 className="text-5xl text-orange-600 mr-8"> Hot Deals</h1>
          {category &&
            category.map((items, i) => (
              <button
                key={i}
                className="bg-gray-100 px-4 py-1 rounded mr-4"
                onClick={() => getCategoryName(items)}
              >
                {items}
              </button>
            ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 border">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {showPdp &&
            product &&
            product.map((items, i) => (
              <Products key={i} items={items} getProductId={getProductId} />
            ))}
        </div>
      </div>
      {showPdp === false
        ? singleProduct && <Pdp singleProduct={singleProduct} />
        : ""}
    </div>
  );
};

export default Home;
