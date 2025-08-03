import React, { useState, useEffect } from "react";
import { Star, Shield, TrendingUp, Search, Truck, Gift, Heart, Info, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const BrandCard = ({ brand, price, description, spotlight, tier }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
        darkMode 
          ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
          : 'bg-white/30 border-gray-200 hover:border-blue-300'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{brand}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          tier === 'Top Tier' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' :
          tier === 'Good Tier' ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' :
          tier === 'Emerging' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' :
          'bg-gray-500 text-white'
        }`}>
          {tier}
        </span>
      </div>
      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{price}</p>
      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{description}</p>
      <div className={`text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>
        🔍 Spotlight: {spotlight}
      </div>
    </motion.div>
  );

  const QualityFeature = ({ icon, title, description }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4"
    >
      <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CW</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Chinese Homage Watches
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              {['home', 'quality', 'brands', 'buying', 'shipping'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-500 font-medium ${
                    activeSection === section ? 'text-blue-500' : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Chinese
              </span>
              <br />
              <span className={`relative ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Homage Watches
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              🚀 Discover the ultimate guide to premium Chinese homage watches from AliExpress – 
              <span className="font-bold text-blue-500"> quality that rivals luxury brands</span> at a fraction of the price
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className={`px-6 py-3 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'} backdrop-blur-sm`}>
                💎 Seiko NH35 • Miyota 8215 • SW200
              </div>
              <div className={`px-6 py-3 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} backdrop-blur-sm`}>
                ⏱️ 90% OFF During Sales
              </div>
              <div className={`px-6 py-3 rounded-full ${darkMode ? 'bg-green-500/20' : 'bg-green-100'} backdrop-blur-sm`}>
                🌍 Worldwide Shipping
              </div>
            </div>
            <button
              onClick={() => scrollToSection('brands')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Top Brands <ArrowRight className="inline ml-2" />
            </button>
          </motion.div>

          {/* Floating Watch Showcase */}
          <div className="relative h-96 mb-20">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className={`w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} backdrop-blur-xl p-8 border border-gray-700/30 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full border-4 border-blue-500/50 flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full border border-blue-500/30"></div>
                    <div className="text-6xl">⌚</div>
                  </div>
                  <p className="mt-4 font-semibold">Premium Homage Watches</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Quality That
              </span>
              <br />
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Surpasses Expectations</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover why Chinese homage watches offer incredible value with premium components and craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <QualityFeature
              icon={<Shield className="w-8 h-8 text-green-500" />}
              title="Premium Movements"
              description="Most watches use proven, reliable movements like Seiko NH35, Miyota 8215, or SW200 - the same movements found in watches costing 10x more. These are reliable, serviceable, and accurate."
            />
            <QualityFeature
              icon={<Star className="w-8 h-8 text-yellow-500" />}
              title="Exceptional Finishing"
              description="Despite their affordable price, these watches feature excellent finishing with sapphire crystals, 316L stainless steel cases, and precise detailing that rivals luxury brands."
            />
            <QualityFeature
              icon={<TrendingUp className="w-8 h-8 text-blue-500" />}
              title="Value Proposition"
              description="Get 90% of the quality of a $1,000+ luxury watch for just 10-20% of the price. The value proposition is unmatched in the watch world."
            />
            <QualityFeature
              icon={<Info className="w-8 h-8 text-purple-500" />}
              title="Strap Flexibility"
              description="While straps can be hit-or-miss, this is actually a benefit! Easily swap straps to customize your watch - focus on the case, dial, and movement that you can't change later."
            />
          </div>

          <div className={`backdrop-blur-xl rounded-2xl p-8 border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/30 border-gray-200'}`}>
            <h3 className="text-2xl font-bold mb-6">Movement Guide</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Seiko NH35", type: "Mechanical", quality: "Excellent", price: "Budget", desc: "Workhorse movement, reliable and affordable" },
                { name: "Miyota 8215", type: "Mechanical", quality: "Excellent", price: "Budget", desc: "Japanese reliability, smooth operation" },
                { name: "SW200", type: "Mechanical", quality: "Premium", price: "Mid-Range", desc: "Higher end, better finishing and accuracy" }
              ].map((movement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                >
                  <h4 className="font-bold text-lg mb-2">{movement.name}</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{movement.type}</span>
                    <span className={darkMode ? 'text-green-400' : 'text-green-600'}>{movement.quality}</span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{movement.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Top Chinese
              </span>
              <br />
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Watch Brands</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the best brands on AliExpress, categorized by quality, price, and reputation
            </p>
          </motion.div>

          {/* Top Tier Brands */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
              Top Tier Brands 💎
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { brand: "San Martin", price: "£100-£300", description: "Premium homages with exceptional bracelets and quality. Recently pivoted to original designs.", spotlight: "SN0144", tier: "Top Tier" },
                { brand: "IXDAO", price: "£150-£200", description: "Limited releases with incredible attention to detail and perfect proportions. Known for excellent bracelets.", spotlight: "JDX-06S", tier: "Top Tier" },
                { brand: "Cronos", price: "£110-£160", description: "Above average quality at below average prices. Uses high-beat movements like PT5000 and SW200.", spotlight: "L6037/L6040", tier: "Top Tier" },
                { brand: "Watchdives", price: "£70-£120", description: "Meteoric rise in quality. Actively seeks community input and executes flawlessly. Great value.", spotlight: "WD1863", tier: "Top Tier" },
                { brand: "Baltany", price: "£100-£250", description: "Marries vintage designs with modern materials. Offers hardened steel and excellent AR coatings.", spotlight: "S4055", tier: "Top Tier" },
                { brand: "Farasute", price: "£130-£400", description: "High-level homages of interesting designs with a dressy vintage leaning. Premium packaging.", spotlight: "F4130", tier: "Top Tier" }
              ].map((brand, index) => (
                <BrandCard key={index} {...brand} />
              ))}
            </div>
          </div>

          {/* Good Tier Brands */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
              Good Tier Brands ✅
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { brand: "Steeldive", price: "£40-£300", description: "Incredible lume and serious dive watch looks. Homages interesting designs with NH35 movements.", spotlight: "SD1970", tier: "Good Tier" },
                { brand: "Pagani Design", price: "£20-£80", description: "One of the gateway brands. Prolific in producing new models, though lume and bracelets can be lacking.", spotlight: "PD1701", tier: "Good Tier" },
                { brand: "Addiesdive", price: "£20-£80", description: "The other gateway brand. Vast catalogue of styles, mainly quartz movements, great entry point.", spotlight: "AD2066", tier: "Good Tier" },
                { brand: "Thorn", price: "£40-£150", description: "Unique designs that no other brands touch. Offers both 34mm and 47mm cases, though 'exploration road' text holds back some models.", spotlight: "T004", tier: "Good Tier" },
                { brand: "Militado", price: "£40-£60", description: "Amazingly well-done for the price point. Cohesive feeling despite low cost. Mostly quartz movements.", spotlight: "ML08", tier: "Good Tier" },
                { brand: "Heimdallr", price: "£80-£130", description: "Focuses exclusively on dive watches. Reliable quality and good value in the dive watch segment.", spotlight: "HMSK01", tier: "Good Tier" }
              ].map((brand, index) => (
                <BrandCard key={index} {...brand} />
              ))}
            </div>
          </div>

          {/* Emerging Brands */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
              Emerging Brands 🚀
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { brand: "Wishdoit", price: "£35-£80", description: "Started with Richard Mille homages, now acclaimed for Zodiac Super Sea Wolf and GMT models.", spotlight: "WSD-9987", tier: "Emerging" },
                { brand: "Phorcydes", price: "£90", description: "Came back with one of the most impressive watches - best lume, blackest dial, incredible AR.", spotlight: "PH-1", tier: "Emerging" },
                { brand: "Sea Knight", price: "£65-£120", description: "Does Serica 5303 and Seiko Monster homages well and cheaper than alternatives.", spotlight: "SK01", tier: "Emerging" }
              ].map((brand, index) => (
                <BrandCard key={index} {...brand} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section id="buying" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Smart Buying
              </span>
              <br />
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Strategies</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master the art of buying Chinese homage watches with these essential tips and strategies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">🔍 Search Like a Pro</h3>
              <div className="space-y-4">
                {[
                  "Use image search to find homages of specific watches (Speedmaster, Submariner, etc.)",
                  "Don't buy the first watch that appears - compare multiple brands' versions",
                  "Check different outlet stores of the same brand for price and shipping differences",
                  "Look for official brand outlet stores for guaranteed authenticity",
                  "Wait for major sales (11.11, Anniversary) for up to 90% off"
                ].map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{tip}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className={`backdrop-blur-xl rounded-2xl p-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/30'}`}>
              <img 
                src="https://placehold.co/400x300/1e293b/ffffff?text=AliExpress+Search" 
                alt="AliExpress Search" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="text-center opacity-80">Use image search to find the perfect homage</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 backdrop-blur-xl rounded-2xl p-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/30'}`}>
              <img 
                src="https://placehold.co/400x300/1e293b/ffffff?text=Shipping+Options" 
                alt="Shipping Options" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="text-center opacity-80">Choose the right shipping method for your needs</p>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">🚚 Shipping & Taxes</h3>
              <div className="space-y-4">
                {[
                  "AliExpress Standard Shipping: Free/cheap but takes 2-3 weeks (postal service)",
                  "DHL/FedEx: Faster (1 week) but more expensive - worth it for expensive pieces",
                  "You are responsible for import duties and taxes (varies by country)",
                  "Download a package tracking app for real-time updates",
                  "Items ship from official brand outlets or reputable multi-brand stores"
                ].map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Truck className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{tip}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`backdrop-blur-xl rounded-2xl p-12 border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/30 border-gray-200'}`}>
              <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
              <h2 className="text-4xl font-bold mb-6">Final Thoughts 💡</h2>
              <div className="space-y-4 text-lg">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  🚫 <strong>Don't listen to the haters</strong> - mainstream media often dismisses Chinese homages due to brand partnerships
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  🔍 <strong>Do your research</strong> - watch YouTube reviews of similar models from the same brand
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  💰 <strong>Use common sense</strong> - if a price seems too good to be true, it probably is (QC rejects or scams)
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  ❤️ <strong>Buy what you love</strong> - if you like how a watch looks and feels, that's what matters most
                </p>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                <p className="text-xl font-semibold">
                  "99% of people can't name luxury watch models... they'll just say 'Hey, that's a nice watch!'"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">CW</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Chinese Homage Watches
            </h3>
          </div>
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your ultimate guide to premium Chinese watches from AliExpress
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>© 2024 Chinese Homage Watches Guide</span>
            <span>•</span>
            <span>Built with ❤️ for watch enthusiasts</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;