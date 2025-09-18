import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Gaming Keyboard X1',
      description: 'Mechanical RGB keyboard with ultra-low latency',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&auto=format'
    },
    {
      id: 2,
      name: 'Pro Gaming Mouse',
      description: 'Precision sensor with customizable DPI settings',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&auto=format'
    },
    {
      id: 3,
      name: 'Elite Headset',
      description: '7.1 surround sound with noise cancellation',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format'
    },
    {
      id: 4,
      name: 'Gaming Monitor',
      description: '144Hz ultra-wide curved display',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&auto=format'
    },
    {
      id: 5,
      name: 'Gaming Chair Pro',
      description: 'Ergonomic design with RGB lighting',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop&auto=format'
    },
    {
      id: 6,
      name: 'Gaming PC Tower',
      description: 'High-performance RGB gaming rig',
      price: 1999.99,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&auto=format'
    }
  ];


    const navigate = useNavigate();
    const navigateToProducts = () => {
        navigate('/products');
    };

    const navigateToCatalog = () => {
        navigate('/products');
    };

  

  const addToCart = (productId) => {
    setCartCount(cartCount + 1);
  };

  const handleCartClick = () => {
    alert(`You have ${cartCount} items in your cart!`);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        body {
          font-family: 'Orbitron', monospace;
        }
        
        .glow-red {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
        }
        
        .glow-red-intense {
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.8);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 50%, #0f0f0f 100%);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
        }
        
        .text-glow {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        
        .border-gradient {
          background: linear-gradient(45deg, #ef4444, #dc2626, #ef4444);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .pulse-glow {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating-delay-2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .floating-delay-3 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .floating-delay-4 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>

      {/* Navigation */}
      <Navbar cartCount={cartCount} onCartClick={handleCartClick} />

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full floating opacity-50"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full floating-delay-2 opacity-60"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-600 rounded-full floating-delay-4 opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              LEVEL UP<br />
              <span className="text-red-500 text-glow">YOUR GAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover premium gaming peripherals designed for champions. 
              Experience the future of competitive gaming with Niguara's cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-bold glow-red-intense pulse-glow transition-all duration-300" onClick={navigateToProducts}>
                SHOP NOW
              </button>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300" onClick={navigateToCatalog}>
                EXPLORE CATALOG
              </button>
            </div>
          </div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-10 border-2 border-red-500 border-opacity-30 w-32 h-32 rotate-45 floating"></div>
        <div className="absolute bottom-1/4 left-10 border-2 border-red-400 border-opacity-20 w-24 h-24 rotate-12 floating-delay-3"></div>
      </section>

      {/* Popular Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              POPULAR <span className="text-red-500 text-glow">PRODUCTS</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto border-gradient"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-black border border-red-900 rounded-xl overflow-hidden card-hover">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-24 h-24 bg-red-600 rounded-lg opacity-80 hidden"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">${product.price}</span>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;