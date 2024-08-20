import { ProductInterface } from "../util/interface";

interface ProductProps {
  items: ProductInterface;
  getProductId: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ items, getProductId }) => {
  // const getProductId = (id: number) => {
  //   console.log(id);
  // };
  return (
    <div
      className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-4"
      onClick={() => getProductId(items.id)}
    >
      <div className="w-full h-40 flex items-center justify-center overflow-hidden">
        <img
          src={items.image}
          alt={items.title}
          className="max-h-full max-w-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">{items.title}</h2>
      </div>
    </div>
  );
};

export default Product;
