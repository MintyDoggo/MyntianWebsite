import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'

const Item = ({ id, name, image, price, path}) => {
  return (
    <Link href={path}>
        <div className="relative w-64 h-96 bg-white shadow ring-2 ring-gray-300 rounded-lg overflow-hidden my-6 mx-3 transform transition-transform duration-200 hover:scale-[1.02]">
        <div className="w-full h-5/6 relative">
            <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            responsive
            className="w-64 h-96 object-cover"
            />
        </div>

        <div className="absolute -bottom-8 left-0 w-full bg-black opacity-75 py-12" style={{ transform: 'skewY(6deg)' }}>
        </div>

        <div className="relative w-64 h-96 bottom-0 left-0 px-4 py-2">
            <h3 className="text-white font-semibold text-lg" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)' }}>{name}</h3>
            <p className="text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 1)' }}>${price}</p>
        </div>
        </div>
    </Link>

  );
};

export default Item;
