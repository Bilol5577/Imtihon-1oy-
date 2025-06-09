import React from "react";

const Card = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col max-w-[270px] h-[422px] justify-between">
      {/* Rasm qismi */}
      <div className="w-full h-[209px] bg-gray-100 flex justify-center items-center mb-4 rounded overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Tugma */}
      <button className="bg-black text-white border-0 py-2 rounded cursor-pointer font-medium hover:bg-red-700 transition mt-auto">
        Add To Cart
      </button>

      {/* Mahsulot nomi */}
      <h3 className="text-lg font-semibold mb-2 mt-3 text-[16px]">{product.name}</h3>

      {/* Narx va aksiya qismi */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-red-600 font-semibold text-lg">${product.price}</span>

        {product.aksiya && (
          <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
            {product.aksiya}
          </span>
        )}

        {product.originalPrice && (
          <span className="text-gray-500 line-through text-sm">
            ${product.originalPrice}
          </span>
        )}
      </div>
      
      {/* Reyting */}
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 mr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <span className="text-gray-500 text-sm">({product.reting})</span>
      </div>
    </div>
  );
};

export default Card;
