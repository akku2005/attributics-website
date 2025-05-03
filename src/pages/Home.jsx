import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Features list for the company
  const features = [
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Powerful insights to drive marketing decisions",
    },
    {
      icon: "🎯",
      title: "Attribution Modeling",
      description: "Understand customer journeys across touchpoints",
    },
    {
      icon: "🤖",
      title: "AI-Powered Segmentation",
      description: "Target the right audience with precision",
    },
    {
      icon: "📱",
      title: "Cross-Channel Integration",
      description: "Seamless experience across all platforms",
    },
  ];

  // Client logos
  const clients = [
    { name: "Jockey", logo: "/api/placeholder/150/50" },
    { name: "UNICEF", logo: "/api/placeholder/150/50" },
    { name: "Americana Restaurants", logo: "/api/placeholder/150/50" },
    { name: "Gynoveda", logo: "/api/placeholder/150/50" },
    { name: "HBO Max", logo: "/api/placeholder/150/50" },
    { name: "Pizza Hut", logo: "/api/placeholder/150/50" },
    { name: "Levi's", logo: "/api/placeholder/150/50" },
    { name: "Phiture", logo: "/api/placeholder/150/50" },
    { name: "KFC", logo: "/api/placeholder/150/50" },
    { name: "Draft Group", logo: "/api/placeholder/150/50" },
    { name: "CASETiFY", logo: "/api/placeholder/150/50" },
    { name: "Akasa Air", logo: "/api/placeholder/150/50" },
  ];

  // Client reviews
  const reviews = [
    {
      text: "Attributics helped us increase our ROAS by 175% in just three months. The platform's insights were game-changing for our strategy.",
      author: "Sarah J., Marketing Director",
      company: "TechVision Inc."
    },
    {
      text: "The cross-channel attribution model provided by Attributics gave us visibility we never had before. We've optimized our ad spend and seen a 43% increase in conversions.",
      author: "Michael T., Digital Marketing Manager",
      company: "Retail Solutions"
    },
    {
      text: "Implementing Attributics' AI segmentation tools transformed our customer targeting approach. We're now reaching the right audiences with the right messages at the right time.",
      author: "Elena R., CMO",
      company: "Global Brands Group"
    },
    {
      text: "The team at Attributics has been incredible to work with. Their platform is intuitive, powerful, and has become an essential part of our marketing stack.",
      author: "David K., Head of Growth",
      company: "SaaS Enterprise"
    }
  ];

  // Stats for the Our Story section
  const stats = [
    { 
      value: "7", 
      unit: "%", 
      label: "INCREASE IN REVENUE", 
      subtext: "LOYALTY & OFFERS" 
    },
    { 
      value: "201", 
      unit: "%", 
      label: "INCREASE IN CUSTOMER REGISTRATION", 
      subtext: "EMAIL ACTIVATION" 
    },
    { 
      value: "15", 
      unit: "%", 
      label: "INCREASE IN CART CONVERSION", 
      subtext: "PERSONALISATION" 
    },
    { 
      value: "70", 
      unit: "%", 
      label: "REDUCTION IN COST PER ACQUISITION", 
      subtext: "MEDIA ACTIVATION" 
    },
  ];

  // Function to handle review navigation
  const goToReview = (index) => {
    setCurrentReviewIndex(index);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const reviewVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-500 dark:bg-blue-700 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500 dark:bg-purple-700 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 font-medium text-sm mb-4">
                  Marketing Technology Reimagined
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              >
                Attributics Tech
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Unlock the true potential of your marketing with our advanced attribution
                and analytics platform designed for modern businesses.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-800 text-white font-medium shadow-lg shadow-blue-500/30 dark:shadow-blue-700/30 hover:bg-blue-700 dark:hover:bg-blue-900"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
                >
                  <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="w-24 h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-2 h-4 bg-blue-100 dark:bg-blue-800 rounded"></div>
                          <div className="h-4 bg-purple-100 dark:bg-purple-800 rounded"></div>
                        </div>
                        <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Marketing Dashboard
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 3, 0, -3, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 5,
                        duration: 1,
                      }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      Live Demo
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">+127%</div>
                      <div className="text-white text-xs">Conversion Rate</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">3.2x</div>
                      <div className="text-white text-xs">ROI Increase</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Transform Your Marketing Strategy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform provides the tools you need to understand attribution,
              optimize campaigns, and drive higher ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-8"
              >
                Our Story
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg mb-4">
                  Welcome to <span className="text-blue-400">Attributics</span>. We're your strategic partner for
                  navigating the ever-evolving marketing technology
                  landscape, empowering businesses to excel with
                  modern tools and strategies. In today's digital age, we
                  merge marketing and technology seamlessly. Our
                  dedicated experts specialize in dynamic marketing
                  technology, delivering tailored solutions integrating
                  cutting-edge MarTech to boost ROI and brand
                  success.
                </p>
                <p className="text-lg">
                  What sets us apart is our commitment to staying
                  ahead of industry trends. As the MarTech landscape
                  evolves, we adapt swiftly to keep your business at the
                  forefront of technological advancements.
                </p>
              </motion.div>
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-baseline">
                      <span className="text-6xl font-bold text-white">{stat.value}</span>
                      <span className="text-5xl font-bold text-gray-400 ml-1">{stat.unit}</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-sm text-gray-400">INCREASE</div>
                      <div className="text-lg font-medium">{stat.label}</div>
                      <div className="w-full h-px bg-gray-700 my-2"></div>
                      <div className="text-sm text-gray-400">{stat.subtext}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-16 text-center"
          >
            Clients We Work With
          </motion.h2>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-12 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-xl mb-6 text-blue-100 dark:text-blue-200">
              Join thousands of businesses that have transformed their marketing performance with Attributics Tech.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-blue-600 dark:text-blue-800 font-medium shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md p-6 rounded-2xl w-full max-w-md">
              <div className="text-center mb-6">
                <span className="inline-block text-4xl mb-2">⭐️</span>
                <h3 className="text-xl font-bold text-white">What Our Clients Say</h3>
              </div>

              {/* Reviews Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.div
                    key={currentReviewIndex}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={reviewVariants}
                    className="bg-white/10 dark:bg-gray-700/30 p-4 rounded-xl mb-4"
                  >
                    <p className="italic mb-3 text-white">
                      "{reviews[currentReviewIndex].text}"
                    </p>
                    <div className="font-medium text-blue-100 dark:text-blue-200">
                      {reviews[currentReviewIndex].author}
                    </div>
                    <div className="text-sm text-blue-200/70 dark:text-blue-300/70">
                      {reviews[currentReviewIndex].company}
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between mt-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevReview}
                    className="w-8 h-8 rounded-full bg-white/20 dark:bg-gray-700/50 flex items-center justify-center text-white"
                  >
                    ←
                  </motion.button>
                  
                  {/* Dots Navigation */}
                  <div className="flex justify-center space-x-2 mt-2">
                    {reviews.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToReview(index)}
                        whileHover={{ scale: 1.2 }}
                        animate={currentReviewIndex === index ? 
                          { scale: [1, 1.2, 1], backgroundColor: "#60A5FA" } : 
                          { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.3)" }
                        }
                        transition={{ duration: 0.4 }}
                        className={`w-2 h-2 rounded-full ${
                          currentReviewIndex === index 
                            ? "bg-blue-400 dark:bg-blue-500" 
                            : "bg-white/30 dark:bg-gray-500/50"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextReview}
                    className="w-8 h-8 rounded-full bg-white/20 dark:bg-gray-700/50 flex items-center justify-center text-white"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;