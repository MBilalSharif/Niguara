import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gaming = () => {
  const [activeTab, setActiveTab] = useState('news');

  const gamingNews = [
    {
      id: 1,
      title: 'The Future of Competitive Gaming: What to Expect in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the competitive gaming landscape.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format',
      date: 'Mar 15, 2025',
      category: 'Esports',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 10 Gaming Peripherals Every Pro Gamer Needs',
      excerpt: 'Discover the essential gaming gear that separates professionals from amateurs.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&auto=format',
      date: 'Mar 12, 2025',
      category: 'Hardware',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'RGB vs Performance: Finding the Perfect Balance',
      excerpt: 'Learn how to optimize your gaming setup for both aesthetics and performance.',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop&auto=format',
      date: 'Mar 10, 2025',
      category: 'Tips',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building Your First Gaming PC: Complete Guide',
      excerpt: 'Step-by-step guide to building a powerful gaming PC that fits your budget.',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop&auto=format',
      date: 'Mar 8, 2025',
      category: 'Builds',
      readTime: '12 min read'
    }
  ];

  const communityStats = [
    { label: 'Active Gamers', value: '150K+', icon: '🎮' },
    { label: 'Tournament Wins', value: '2.5K+', icon: '🏆' },
    { label: 'Products Reviewed', value: '500+', icon: '⭐' },
    { label: 'Community Posts', value: '50K+', icon: '💬' }
  ];

  const featuredBuilds = [
    {
      id: 1,
      name: 'The Champion Build',
      price: '$3,499',
      specs: ['RTX 4080', 'Intel i7-13700K', '32GB DDR5', '2TB NVMe SSD'],
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop&auto=format',
      performance: 'Ultra 4K Gaming'
    },
    {
      id: 2,
      name: 'The Competitor Build',
      price: '$2,199',
      specs: ['RTX 4070', 'AMD Ryzen 7 7700X', '16GB DDR5', '1TB NVMe SSD'],
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop&auto=format',
      performance: 'High 1440p Gaming'
    },
    {
      id: 3,
      name: 'The Starter Build',
      price: '$1,299',
      specs: ['RTX 4060', 'AMD Ryzen 5 7600', '16GB DDR4', '500GB NVMe SSD'],
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=500&fit=crop&auto=format',
      performance: 'Solid 1080p Gaming'
    }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: 'Niguara Championship 2025',
      game: 'Counter-Strike 2',
      prize: '$50,000',
      date: 'April 15-17, 2025',
      status: 'Registration Open'
    },
    {
      id: 2,
      name: 'Spring Gaming League',
      game: 'League of Legends',
      prize: '$25,000',
      date: 'May 1-3, 2025',
      status: 'Coming Soon'
    },
    {
      id: 3,
      name: 'FPS Masters Cup',
      game: 'Valorant',
      prize: '$30,000',
      date: 'May 20-22, 2025',
      status: 'Coming Soon'
    }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="gradient-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full floating opacity-50"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full floating-delay-2 opacity-60"></div>
            <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-red-600 rounded-full floating-delay-4 opacity-40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              GAMING <span className="text-red-500 text-glow">UNIVERSE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join the ultimate gaming community. Stay updated with the latest news, 
              participate in tournaments, and connect with fellow gamers worldwide.
            </p>
          </div>
        </section>

      {/* Community Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-gray-800 border-b border-red-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex space-x-8 content-center justify-center" role="tablist" aria-label="Gaming Tabs">
            {[
              { id: 'news', label: 'Gaming News' },
              { id: 'builds', label: 'Featured Builds' },
              { id: 'tournaments', label: 'Tournaments' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-500'
                    : 'border-transparent text-gray-400 hover:text-black hover:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Gaming News Tab */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gamingNews.map((article) => (
              <div key={article.id} className="bg-black border border-red-900 rounded-xl overflow-hidden card-hover">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-red-500 font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Builds Tab */}
        {activeTab === 'builds' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBuilds.map((build) => (
              <div key={build.id} className="bg-black border border-red-900 rounded-xl overflow-hidden card-hover">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{build.name}</h3>
                    <span className="text-xl font-bold text-red-500">{build.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{build.performance}</p>
                  <div className="space-y-2 mb-6">
                    {build.specs.map((spec, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition-colors font-medium">
                    View Build Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tournaments Tab */}
        {activeTab === 'tournaments' && (
          <div className="space-y-6">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-black border border-red-900 rounded-xl p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{tournament.name}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>🎮 {tournament.game}</span>
                      <span>💰 {tournament.prize}</span>
                      <span>📅 {tournament.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold mb-3 ${
                      tournament.status === 'Registration Open' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {tournament.status}
                    </span>
                    <button 
                      className={`px-6 py-2 rounded-lg transition-colors ${
                        tournament.status === 'Registration Open'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={tournament.status !== 'Registration Open'}
                    >
                      {tournament.status === 'Registration Open' ? 'Register Now' : 'Coming Soon'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 50%, #0f0f0f 100%);
        }
        
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
        
        .floating-delay-4 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};
export default Gaming;