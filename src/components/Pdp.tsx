import React from "react";
import { ProductInterface } from "../util/interface";

interface singleProductInterface {
  singleProduct: ProductInterface;
}

const Pdp: React.FC<singleProductInterface> = ({ singleProduct: items }) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-4">
      <div className="w-5/12  h-40 flex items-center justify-center overflow-hidden border">
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

export default Pdp;
