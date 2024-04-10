import React from "react";
import { Link } from "react-router-dom";

function ProductCards({ i }) {
  const { id, image, title, price} = i;

  return (
    <div className="group shadow-2xl p-2 bg-green-50 rounded-lg mb-3">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-[250px] h-[275px] p-5" />
        <Link
          to={`/product/${id}`}
          className="absolute w-full h-full bg-[#2c7a64]/20 flex items-center justify-center -bottom-40 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        >
          <h4 className="text-white">View Details</h4>
        </Link>
      </div>
      <h4>{title.slice(0, 20)}...</h4>
      <p>${price}</p>
    </div>
  );
}

export default ProductCards;
