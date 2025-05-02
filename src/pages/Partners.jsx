import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Partners() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Partners list
  const partners = [
    { name: "Moengage", logo: "moengage" },
    { name: "Amplitude", logo: "amplitude" },
    { name: "CleverTap", logo: "clevertap" },
    { name: "Braze", logo: "braze" },
    { name: "Liferay", logo: "liferay" },
    { name: "Optimizely", logo: "optimizely" },
  ];

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
            className="absolute top-20 left-40 w-72 h-72 rounded-full bg-blue-500 dark:bg-blue-700 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-500 dark:bg-purple-700 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 font-medium text-sm mb-4">
                Our Collaborations
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Our Partners
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We collaborate with industry leaders to drive innovation and deliver exceptional marketing solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our partnerships enable us to provide cutting-edge solutions and unparalleled support to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              >
                <span className="text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Want to Partner with Us?
            </h2>
            <p className="text-xl mb-6 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              Join our network of industry leaders and let’s create impactful solutions together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-blue-600 dark:text-blue-800 font-medium shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Partners;