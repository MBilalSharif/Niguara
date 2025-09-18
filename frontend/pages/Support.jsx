import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
    });
    const [expandedFaq, setExpandedFaq] = useState(null);

    const supportCategories = [
        { id: 'all', name: 'All Topics', icon: '📋' },
        { id: 'orders', name: 'Orders & Shipping', icon: '📦' },
        { id: 'products', name: 'Product Support', icon: '🛠️' },
        { id: 'warranty', name: 'Warranty & Returns', icon: '🔄' },
        { id: 'technical', name: 'Technical Issues', icon: '⚙️' },
        { id: 'account', name: 'Account & Billing', icon: '👤' }
    ];

    const faqs = [
        {
            id: 1,
            category: 'orders',
            question: 'How long does shipping take?',
            answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping are also available at checkout.'
        },
        {
            id: 2,
            category: 'orders',
            question: 'Can I track my order?',
            answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "My Orders" section.'
        },
        {
            id: 3,
            category: 'warranty',
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories. Gaming chairs and PCs have a 7-day return window due to their nature.'
        },
        {
            id: 4,
            category: 'warranty',
            question: 'How do I claim warranty?',
            answer: 'To claim warranty, contact our support team with your order number and description of the issue. We provide 1-3 year warranties depending on the product category.'
        },
        {
            id: 5,
            category: 'products',
            question: 'Are your keyboards compatible with Mac?',
            answer: 'Yes, all our keyboards are compatible with both Windows and Mac. Some advanced features like RGB software may have limited functionality on Mac.'
        },
        {
            id: 6,
            category: 'products',
            question: 'Do you provide drivers for your products?',
            answer: 'Yes, drivers and software can be downloaded from our website\'s support section. Most products also work plug-and-play without additional drivers.'
        },
        {
            id: 7,
            category: 'technical',
            question: 'My RGB lighting is not working, what should I do?',
            answer: 'First, ensure the product is properly connected and drivers are installed. Try unplugging and reconnecting the device. If issues persist, contact our technical support team.'
        },
        {
            id: 8,
            category: 'technical',
            question: 'How do I update my product firmware?',
            answer: 'Download the latest software from our support page. The software will automatically detect your device and prompt you to update firmware if a newer version is available.'
        },
        {
            id: 9,
            category: 'account',
            question: 'How do I reset my password?',
            answer: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes.'
        },
        {
            id: 10,
            category: 'account',
            question: 'Can I change my billing address?',
            answer: 'Yes, you can update your billing address in your account settings. Note that orders already placed cannot have their billing address changed.'
        }
    ];

    const contactOptions = [
        {
            title: 'Live Chat',
            description: 'Get instant help from our support team',
            hours: 'Available 24/7',
            icon: '💬',
            action: 'Start Chat',
            available: true
        },
        {
            title: 'Phone Support',
            description: 'Speak directly with our experts',
            hours: 'Mon-Fri 9AM-6PM EST',
            icon: '📞',
            action: 'Call Now',
            phone: '1-800-NIGUARA',
            available: true
        },
        {
            title: 'Email Support',
            description: 'Send us a detailed message',
            hours: 'Response within 24 hours',
            icon: '✉️',
            action: 'Send Email',
            available: true
        },
        {
            title: 'Community Forum',
            description: 'Connect with other gamers',
            hours: 'Always active',
            icon: '🌐',
            action: 'Visit Forum',
            available: true
        }
    ];

    const filteredFaqs = activeCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
        setContactForm({
            name: '',
            email: '',
            subject: '',
            message: '',
            category: 'general'
        });
    };

    const handleInputChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    return (

        <>
            <Navbar />

            <div className="min-h-screen bg-gray-900 pt-20">
                {/* Hero Section */}
                <section className="gradient-bg py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            SUPPORT <span className="text-red-500 text-glow">CENTER</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We're here to help you get the most out of your gaming experience.
                            Find answers, get support, and connect with our community.
                        </p>
                    </div>
                </section>

                {/* Contact Options */}
                <section className="py-16 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Get Help Your Way
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactOptions.map((option, index) => (
                                <div key={index} className="bg-gray-800 border border-red-900 rounded-xl p-6 text-center card-hover">
                                    <div className="text-4xl mb-4">{option.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                                    <p className="text-gray-400 text-sm mb-3">{option.description}</p>
                                    <p className="text-red-500 text-xs mb-4">{option.hours}</p>
                                    {option.phone && (
                                        <p className="text-white font-bold mb-3">{option.phone}</p>
                                    )}
                                    <button
                                        className={`w-full py-2 px-4 rounded-lg transition-colors ${option.available
                                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                            }`}
                                        disabled={!option.available}
                                    >
                                        {option.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {supportCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeCategory === category.id
                                            ? 'bg-red-600 text-white'
                                            : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* FAQ List */}
                        <div className="max-w-4xl mx-auto space-y-4">
                            {filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-gray-900 border border-red-900 rounded-xl overflow-hidden"
                                >
                                    {/* Always-visible question row */}
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                                    >
                                        <span className="text-black font-medium">{faq.question}</span>
                                        <span
                                            className={`text-red-500 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''
                                                }`}
                                        >
                                            ▼
                                        </span>
                                    </button>

                                    {/* Answer (only visible on expand) */}
                                    {expandedFaq === faq.id && (
                                        <div className="px-6 pb-6 text-gray-400 border-t border-red-900 bg-gray-800">
                                            <p className="pt-4">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-16 bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Still Need Help?
                            </h2>
                            <p className="text-gray-400">
                                Send us a message and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="bg-black border border-red-900 rounded-xl p-8">
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={contactForm.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={contactForm.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-black font-medium mb-2">Category</label>
                                        <select
                                            name="category"
                                            value={contactForm.category}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                        >
                                            <option value="general">General Question</option>
                                            <option value="orders">Orders & Shipping</option>
                                            <option value="products">Product Support</option>
                                            <option value="warranty">Warranty & Returns</option>
                                            <option value="technical">Technical Issues</option>
                                            <option value="account">Account & Billing</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={contactForm.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                            placeholder="Brief description of your issue"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={contactForm.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        className="w-full bg-gray-800 border border-red-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                        placeholder="Please provide as much detail as possible about your issue..."
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-medium transition-colors glow-red"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Additional Resources */}
                <section className="py-16 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Additional Resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-800 border border-red-900 rounded-xl p-6 text-center card-hover">
                                <div className="text-4xl mb-4">📖</div>
                                <h3 className="text-xl font-bold text-white mb-3">User Manuals</h3>
                                <p className="text-gray-400 mb-4">Download product manuals and setup guides</p>
                                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors">
                                    Browse Manuals
                                </button>
                            </div>
                            <div className="bg-gray-800 border border-red-900 rounded-xl p-6 text-center card-hover">
                                <div className="text-4xl mb-4">💾</div>
                                <h3 className="text-xl font-bold text-white mb-3">Downloads</h3>
                                <p className="text-gray-400 mb-4">Get the latest drivers and software updates</p>
                                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors">
                                    Download Center
                                </button>
                            </div>
                            <div className="bg-gray-800 border border-red-900 rounded-xl p-6 text-center card-hover">
                                <div className="text-4xl mb-4">🎥</div>
                                <h3 className="text-xl font-bold text-white mb-3">Video Tutorials</h3>
                                <p className="text-gray-400 mb-4">Watch step-by-step setup and troubleshooting videos</p>
                                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors">
                                    Watch Videos
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

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
        
        .glow-red {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
        }
      `}</style>
            </div>
            <Footer />
        </>

    );
};

export default Support;