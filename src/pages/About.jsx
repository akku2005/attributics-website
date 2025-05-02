import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Company values
  const values = [
    {
      icon: "🌟",
      title: "Innovation",
      description: "Pushing the boundaries of marketing technology with creative solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working closely with our clients to achieve shared success.",
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "Providing clear, actionable insights to empower decisions.",
    },
    {
      icon: "🚀",
      title: "Excellence",
      description: "Delivering unparalleled quality in everything we do.",
    },
  ];

  // Timeline milestones
  const timeline = [
    {
      year: "2018",
      title: "Founded Attributics Tech",
      description: "Started with a mission to revolutionize marketing analytics.",
    },
    {
      year: "2020",
      title: "Launched First Platform",
      description: "Introduced our AI-powered attribution modeling tool.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to serve a growing client base.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named a leader in marketing technology by top industry analysts.",
    },
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
                About Attributics
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Who We Are
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Attributics Tech is a leader in marketing technology, dedicated to empowering businesses with advanced analytics and attribution solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To revolutionize marketing through data-driven insights, helping businesses optimize strategies and achieve exceptional ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
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
                      <div className="h-4 bg-blue-100 dark:bg-blue-800 rounded w-3/4"></div>
                      <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Analytics Dashboard
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Transforming Marketing Globally
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Attributics Tech, we harness the power of AI and analytics to provide actionable insights, enabling businesses of all sizes to thrive in a competitive landscape.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our global team is committed to delivering solutions that drive measurable results, ensuring your marketing efforts are both efficient and impactful.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and define our culture at Attributics Tech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped Attributics Tech into a leader in marketing technology.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full"></div>
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    <div className="mt-2 text-blue-600 dark:text-blue-400 font-medium">{milestone.year}</div>
                  </div>
                </div>
                <div className="w-1/2 px-6"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
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
              Join Our Mission
            </h2>
            <p className="text-xl mb-6 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              Ready to transform marketing with Attributics Tech? Let’s work together to achieve your business goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-blue-600 dark:text-blue-800 font-medium shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;