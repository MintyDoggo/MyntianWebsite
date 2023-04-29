import { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductDemos from './ProductDemos';

const ProductNavbar = ({ position }) => 
{
    const [activeDiv, setActiveDiv] = useState('div1');

    const handleClick = (divName) => {
      setActiveDiv(divName);
    };
    

    const navbarStyle = 
    {
        position: position || 'static',
        top: 700,
        left: 0,
        right: 0,
      };

    return (
    <div>
        <nav className="bg-gray-800" style={navbarStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a onClick={() => handleClick('div1')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '24px' }}>
                            Info
                        </a>

                        <a onClick={() => handleClick('div2')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '24px' }}>
                            Demos
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        {activeDiv === 'div1' ? <ProductInfo /> : <ProductDemos />}
    </div>
  );
};

export default ProductNavbar;


