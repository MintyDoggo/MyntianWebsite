import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'

const Item = ({ id, name, image, price, path}) => {
  return (
    <Link href={path}>
        <div className="relative w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden my-6 mx-3">
        <div className="w-full h-5/6 relative">
            <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            responsive
            className="w-full"
            />
        </div>
        <div className="px-4 py-2">
            <h3 className="text-gray-700 font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">${price}</p>
        </div>
        </div>
    </Link>

  );
};

export default Item;
