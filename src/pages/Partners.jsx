import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PartnersPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Partners data
  const mainPartners = [
    {
      name: "Moengage",
      logo: "/api/placeholder/150/80",
      category: "Customer Engagement",
      description: "Leading the way in customer engagement and marketing automation solutions for growth-focused brands."
    },
    {
      name: "Amplitude",
      logo: "/api/placeholder/150/80",
      category: "Product Analytics",
      description: "Powerful product analytics that help businesses understand user behavior and optimize digital experiences."
    },
    {
      name: "CleverTap",
      logo: "/api/placeholder/150/80",
      category: "Mobile Marketing",
      description: "Customer lifecycle management platform that helps brands deliver omnichannel experiences."
    },
    {
      name: "Braze",
      logo: "/api/placeholder/150/80",
      category: "Customer Engagement",
      description: "Customer engagement platform that powers relevant and memorable experiences between consumers and brands."
    },
    {
      name: "Liferay",
      logo: "/api/placeholder/150/80",
      category: "Digital Experience",
      description: "Leading provider of digital experience solutions for businesses seeking to transform their operations."
    },
    {
      name: "Optimizely",
      logo: "/api/placeholder/150/80",
      category: "Experimentation",
      description: "Digital experience platform enabling teams to unlock their digital potential through experimentation."
    }
  ];

  // Technology partners
  const techPartners = [
    {
      name: "Google Cloud",
      logo: "/api/placeholder/150/80",
      category: "Cloud Infrastructure"
    },
    {
      name: "AWS",
      logo: "/api/placeholder/150/80",
      category: "Cloud Services"
    },
    {
      name: "Segment",
      logo: "/api/placeholder/150/80",
      category: "Customer Data Platform"
    },
    {
      name: "Snowflake",
      logo: "/api/placeholder/150/80",
      category: "Data Warehouse"
    }
  ];

  // Featured case studies  
  const caseStudies = [
    {
      partner: "CleverTap",
      client: "Global E-commerce Brand",
      title: "Increasing Conversion Rates by 37%",
      description: "How we integrated CleverTap's engagement solutions with our attribution platform to drive significant growth."
    },
    {
      partner: "Amplitude",
      client: "Fintech Leader",
      title: "Optimizing User Journey Analytics",
      description: "Combining Attributics and Amplitude data to create a unified view of the customer journey."
    },
    {
      partner: "Moengage",
      client: "Subscription Service",
      title: "Reducing Churn by 28%",
      description: "Strategic partnership implementation that transformed customer retention strategies."
    }
  ];

  // Partnership benefits
  const benefits = [
    {
      icon: "🌐",
      title: "Expanded Reach",
      description: "Access new markets and customer segments through our extensive network of clients and partners."
    },
    {
      icon: "💡",
      title: "Co-Innovation",
      description: "Collaborate on cutting-edge solutions that push the boundaries of marketing technology."
    },
    {
      icon: "📊",
      title: "Data Synergy",
      description: "Create powerful integrations that provide richer insights and better outcomes for mutual clients."
    },
    {
      icon: "🚀",
      title: "Growth Acceleration",
      description: "Drive mutual business growth through collaborative marketing and sales initiatives."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const backgroundCircleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.1, 
      scale: 1,
      transition: { duration: 1.5 }
    }
  };

  const staggerCardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white bg-gradient-to-r from-blue-900 to-purple-900">
        {/* Background Elements */}
        <motion.div className="absolute inset-0 z-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={backgroundCircleVariants}
            className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl" 
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={backgroundCircleVariants}
            transition={{ delay: 0.2 }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500 blur-3xl" 
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-800 text-blue-300 font-medium text-sm mb-4">
                Strategic Partnerships
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              Our Partners
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We collaborate with industry-leading technology providers to deliver comprehensive, 
              integrated solutions that drive exceptional marketing performance.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Partners Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Strategic Integration Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work closely with these leading platforms to provide seamless integrations and enhanced value for our clients.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerCardVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="max-h-14" />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{partner.name}</h3>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{partner.category}</div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-center flex-grow">{partner.description}</p>
                <div className="mt-6">
                  <button className="w-full py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                    View Integration
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our technology ecosystem is built on partnerships with these industry-leading platforms.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerCardVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="max-h-12" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{partner.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{partner.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our collaborative approach drives exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerCardVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                    {study.partner}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{study.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm">{study.client}</p>
                <p className="text-gray-600 dark:text-gray-300">{study.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <span>Read case study</span>
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why leading MarTech companies choose to partner with Attributics.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerCardVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow hover:translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-xl">
                <div className="text-4xl mb-6">💬</div>
                <p className="text-xl italic mb-6">
                  "The partnership with Attributics has been transformative for our clients. Their technical expertise 
                  and willingness to collaborate deeply has resulted in solutions that deliver exceptional value 
                  and measurable business impact."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="font-bold">Sarah Johnson</div>
                    <div className="text-blue-200">VP of Partnerships, CleverTap</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Partner Success Program
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Technical Integration Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dedicated engineering resources to ensure smooth API integrations and data flow.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Joint Marketing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Collaborative campaigns, webinars, and content to drive mutual brand awareness.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Co-selling Opportunities</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access to our client network and collaborative sales initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Becoming a Partner?
            </h2>
            
            <p className="text-xl mb-8 text-blue-100">
              Join our ecosystem of leading MarTech companies and let's drive innovation together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-lg hover:bg-gray-100"
              >
                Apply for Partnership
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10"
              >
                Contact Partnership Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;