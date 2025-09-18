import React, { useState, useMemo } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = ({ onAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    // Comprehensive gaming products with Unsplash images
    const allProducts = [
        // Keyboards
        {
            id: 1,
            name: 'Mechanical Gaming Keyboard X1',
            description: 'RGB mechanical keyboard with Cherry MX switches',
            price: 149.99,
            category: 'keyboards',
            brand: 'Niguara Pro',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&auto=format',
            features: ['RGB Lighting', 'Cherry MX Switches', 'Anti-Ghosting']
        },
        {
            id: 2,
            name: 'Wireless Gaming Keyboard',
            description: 'Ultra-low latency wireless mechanical keyboard',
            price: 199.99,
            category: 'keyboards',
            brand: 'Niguara Elite',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop&auto=format',
            features: ['Wireless', 'RGB Lighting', 'Long Battery Life']
        },
        {
            id: 3,
            name: 'Compact Gaming Keyboard',
            description: '60% compact mechanical keyboard for gaming',
            price: 89.99,
            category: 'keyboards',
            brand: 'Niguara Mini',
            image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&h=500&fit=crop&auto=format',
            features: ['Compact Design', 'Hot Swappable', 'RGB Lighting']
        },

        // Mice
        {
            id: 4,
            name: 'Pro Gaming Mouse X2',
            description: 'High-precision sensor with customizable DPI',
            price: 89.99,
            category: 'mice',
            brand: 'Niguara Pro',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop&auto=format',
            features: ['16000 DPI', 'RGB Lighting', 'Programmable Buttons']
        },
        {
            id: 5,
            name: 'Wireless Gaming Mouse',
            description: 'Ultra-light wireless mouse for competitive gaming',
            price: 129.99,
            category: 'mice',
            brand: 'Niguara Elite',
            image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop&auto=format',
            features: ['Ultra Light', 'Wireless', '25000 DPI']
        },
        {
            id: 6,
            name: 'Ergonomic Gaming Mouse',
            description: 'Comfortable ergonomic design for long gaming sessions',
            price: 69.99,
            category: 'mice',
            brand: 'Niguara Comfort',
            image: 'https://images.unsplash.com/photo-1563297007-0686b1bf6325?w=500&h=500&fit=crop&auto=format',
            features: ['Ergonomic', 'RGB Lighting', '12000 DPI']
        },

        // Headsets
        {
            id: 7,
            name: 'Elite Gaming Headset',
            description: '7.1 surround sound with noise cancellation',
            price: 199.99,
            category: 'headsets',
            brand: 'Niguara Elite',
            image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop&auto=format',
            features: ['7.1 Surround', 'Noise Cancelling', 'RGB Lighting']
        },
        {
            id: 8,
            name: 'Wireless Gaming Headset',
            description: 'Premium wireless headset with crystal clear audio',
            price: 249.99,
            category: 'headsets',
            brand: 'Niguara Pro',
            image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop&auto=format',
            features: ['Wireless', 'Premium Audio', 'Long Battery']
        },
        {
            id: 9,
            name: 'Budget Gaming Headset',
            description: 'Affordable gaming headset with great sound quality',
            price: 79.99,
            category: 'headsets',
            brand: 'Niguara Basic',
            image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&auto=format',
            features: ['Clear Audio', 'Comfortable', 'Affordable']
        },

        // Monitors
        {
            id: 10,
            name: 'Gaming Monitor 144Hz',
            description: '27" 144Hz curved gaming monitor',
            price: 399.99,
            category: 'monitors',
            brand: 'Niguara Display',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop&auto=format',
            features: ['144Hz', '27 Inch', 'Curved Display']
        },
        {
            id: 11,
            name: 'Ultra-wide Gaming Monitor',
            description: '34" ultra-wide curved monitor for immersive gaming',
            price: 699.99,
            category: 'monitors',
            brand: 'Niguara Ultra',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop&auto=format',
            features: ['Ultra-wide', '34 Inch', '144Hz']
        },
        {
            id: 12,
            name: '4K Gaming Monitor',
            description: '28" 4K monitor with HDR support',
            price: 549.99,
            category: 'monitors',
            brand: 'Niguara Pro',
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop&auto=format',
            features: ['4K Resolution', 'HDR Support', '28 Inch']
        },

        // Chairs
        {
            id: 13,
            name: 'Gaming Chair Pro',
            description: 'Ergonomic gaming chair with RGB lighting',
            price: 299.99,
            category: 'chairs',
            brand: 'Niguara Comfort',
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop&auto=format',
            features: ['Ergonomic', 'RGB Lighting', 'Premium Materials']
        },
        {
            id: 14,
            name: 'Executive Gaming Chair',
            description: 'Premium leather gaming chair with massage function',
            price: 499.99,
            category: 'chairs',
            brand: 'Niguara Elite',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&auto=format',
            features: ['Leather', 'Massage Function', 'Executive Style']
        },

        // PCs
        {
            id: 15,
            name: 'Gaming PC Tower Elite',
            description: 'High-performance RGB gaming desktop',
            price: 1999.99,
            category: 'pcs',
            brand: 'Niguara Elite',
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop&auto=format',
            features: ['RTX 4070', '32GB RAM', 'RGB Lighting']
        },
        {
            id: 16,
            name: 'Budget Gaming PC',
            description: 'Affordable gaming PC for entry-level gamers',
            price: 899.99,
            category: 'pcs',
            brand: 'Niguara Basic',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=500&fit=crop&auto=format',
            features: ['GTX 1660', '16GB RAM', 'SSD Storage']
        }
    ];

    const categories = [
        { id: 'all', name: 'All Products', count: allProducts.length },
        { id: 'keyboards', name: 'Keyboards', count: allProducts.filter(p => p.category === 'keyboards').length },
        { id: 'mice', name: 'Mice', count: allProducts.filter(p => p.category === 'mice').length },
        { id: 'headsets', name: 'Headsets', count: allProducts.filter(p => p.category === 'headsets').length },
        { id: 'monitors', name: 'Monitors', count: allProducts.filter(p => p.category === 'monitors').length },
        { id: 'chairs', name: 'Chairs', count: allProducts.filter(p => p.category === 'chairs').length },
        { id: 'pcs', name: 'Gaming PCs', count: allProducts.filter(p => p.category === 'pcs').length }
    ];

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = allProducts;

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return filtered;
    }, [selectedCategory, searchTerm, sortBy]);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-900 pt-20">
                {/* Page Header */}
                <div className="bg-black border-b border-red-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                            GAMING <span className="text-red-500 text-glow">PRODUCTS</span>
                        </h1>

                        <p className="text-gray-400 text-lg text-center">Discover our complete collection of premium gaming gear</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Sidebar - Filters */}
                        <div className="lg:w-1/4">
                            <div className="bg-black border border-red-900 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-white mb-4">Search</h3>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                />
                            </div>

                            <div className="bg-black border border-red-900 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === category.id
                                                    ? 'bg-red-600 text-white'
                                                    : 'text-gray-400 hover:text-red-500 hover:bg-gray-800'
                                                }`}
                                        >
                                            {category.name} ({category.count})
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black border border-red-900 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">Sort By</h3>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                >
                                    <option value="name">Name A-Z</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Main Content - Products Grid */}
                        <div className="lg:w-3/4">
                            {/* Results Header */}
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-gray-400">
                                    Showing {filteredProducts.length} of {allProducts.length} products
                                </p>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="bg-black border border-red-900 rounded-xl overflow-hidden card-hover">
                                        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-full h-full bg-red-600 opacity-80 hidden items-center justify-center">
                                                <span className="text-white font-bold">Image Loading...</span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-2">
                                                <span className="text-xs text-red-500 font-bold uppercase tracking-wider">
                                                    {product.brand}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                                            {/* Features */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {product.features.slice(0, 3).map((feature, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded-full"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span className="text-2xl font-bold text-red-500">
                                                    ${product.price}
                                                </span>
                                                <button
                                                    onClick={() => onAddToCart(product.id)}
                                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* No Results */}
                            {filteredProducts.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-6xl text-gray-600 mb-4">🔍</div>
                                    <h3 className="text-xl text-white font-bold mb-2">No products found</h3>
                                    <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.3);
        }
        
        .text-glow {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
      `}</style>
            </div>
            <Footer />
        </>
    );
};

export default Products;