import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function WhatWeDoPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Core services data
  const coreServices = [
    {
      icon: "📊",
      category: "Marketing Attribution",
      title: "Multi-Touch Attribution",
      description: "Understand the true value of each marketing touchpoint with our advanced attribution modeling that reveals which channels and tactics drive conversions.",
      features: [
        "Cross-channel attribution models",
        "Customer journey visualization",
        "ROI analysis by channel",
        "Custom attribution algorithms"
      ]
    },
    {
      icon: "🔍",
      category: "Analytics",
      title: "Marketing Analytics",
      description: "Transform raw data into actionable insights with our comprehensive analytics solutions that help you make informed, data-driven marketing decisions.",
      features: [
        "Campaign performance metrics",
        "Audience segmentation",
        "Predictive analytics",
        "Custom dashboards & reporting"
      ]
    },
    {
      icon: "🎯",
      category: "Strategy",
      title: "MarTech Strategy",
      description: "Develop a robust marketing technology roadmap aligned with your business objectives to maximize efficiency and drive measurable results.",
      features: [
        "MarTech stack assessment",
        "Technology selection",
        "Implementation planning",
        "Cross-platform integration"
      ]
    }
  ];

  // Specialized services data
  const specializedServices = [
    {
      category: "CX Transformation",
      title: "Customer Experience Consulting",
      description: "Enhance customer experiences with data-driven strategies that map and optimize every touchpoint in the customer journey.",
      icon: "👥"
    },
    {
      category: "Data Transformation",
      title: "Data Strategy & Governance",
      description: "Establish robust data frameworks that ensure data quality, compliance, and actionable insights across your marketing ecosystem.",
      icon: "📈"
    },
    {
      category: "Digital Transformation",
      title: "Technology Implementation",
      description: "Seamlessly integrate and optimize marketing technologies to create a unified, efficient, and powerful marketing stack.",
      icon: "💻"
    },
    {
      category: "Performance Marketing",
      title: "Campaign Optimization",
      description: "Maximize ROI across paid channels with data-driven optimization strategies that target the right audiences with the right messages.",
      icon: "🚀"
    },
    {
      category: "Customer Insights",
      title: "Audience Analytics",
      description: "Gain deep understanding of your customers through advanced segmentation and behavioral analysis to drive personalized marketing.",
      icon: "🔬"
    },
    {
      category: "Marketing Automation",
      title: "Workflow Optimization",
      description: "Streamline marketing processes with intelligent automation that increases efficiency while delivering personalized customer experiences.",
      icon: "⚙️"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business objectives, challenges, and current marketing ecosystem through in-depth consultation.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Analysis",
      description: "Our team analyzes your data, technology stack, and processes to identify opportunities for optimization and improvement.",
      icon: "📊"
    },
    {
      number: "03",
      title: "Strategy",
      description: "We develop a tailored strategy that addresses your specific needs and aligns with your business goals and budget.",
      icon: "🧠"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our experts execute the strategy with precision, integrating technologies and optimizing processes for maximum impact.",
      icon: "🛠️"
    },
    {
      number: "05",
      title: "Optimization",
      description: "We continuously monitor performance, refine approaches, and implement improvements to ensure ongoing success.",
      icon: "📈"
    }
  ];

  // Industries served
  const industries = [
    {
      name: "E-Commerce",
      icon: "🛒",
      description: "Optimize the online shopping journey and maximize conversion rates with tailored attribution models."
    },
    {
      name: "Financial Services",
      icon: "💰",
      description: "Navigate complex customer journeys with compliant, secure marketing technology solutions."
    },
    {
      name: "Healthcare",
      icon: "⚕️",
      description: "Deliver personalized patient experiences while maintaining strict privacy and compliance standards."
    },
    {
      name: "Technology",
      icon: "💻",
      description: "Accelerate growth with advanced MarTech solutions that scale with your business."
    },
    {
      name: "Retail",
      icon: "🏪",
      description: "Bridge online and offline experiences with omnichannel attribution and analytics."
    },
    {
      name: "Telecom",
      icon: "📱",
      description: "Optimize customer acquisition and retention with sophisticated audience targeting."
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "50% Increase in ROAS",
      industry: "E-Commerce",
      description: "Helped a leading online retailer optimize their marketing mix, resulting in a 50% increase in return on ad spend.",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "30% Reduction in CAC",
      industry: "SaaS",
      description: "Implemented advanced attribution modeling for a B2B SaaS company, reducing customer acquisition costs by 30%.",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "3x Conversion Rate",
      industry: "Financial Services",
      description: "Revolutionized customer journey mapping for a fintech startup, tripling their conversion rate in 6 months.",
      color: "from-green-500 to-green-700"
    }
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden text-white bg-gradient-to-r from-blue-900 to-purple-900"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-40 right-20 w-72 h-72 rounded-full bg-blue-500 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500 blur-3xl"
          />
        </div>

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
                Our Expertise
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              What We Do
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              Empowering businesses with cutting-edge marketing technology solutions that drive growth, enhance customer experiences, and maximize ROI.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Attributics, we offer comprehensive solutions designed to transform how you understand, optimize, and leverage your marketing efforts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl">
                  {service.icon}
                </div>
                
                <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                  {service.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful delivery and measurable results for every project.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-700 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} mb-6 md:mb-0`}>
                    <div className="flex items-center justify-center md:justify-end mb-4">
                      <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 md:mr-0 md:ml-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="z-10 relative hidden md:block">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 text-white text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Specialized Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of specialized services designed to address specific marketing technology challenges.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mb-6 text-3xl group-hover:bg-blue-600 transition-colors">
                  {service.icon}
                </div>
                
                <div className="text-blue-400 font-medium text-sm mb-2">
                  {service.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                
                <p className="text-gray-300">{service.description}</p>
                
                <div className="mt-6">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We have deep expertise across a wide range of industries, each with their unique marketing challenges and opportunities.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex items-start"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                  {industry.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{industry.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our solutions have helped businesses across industries achieve exceptional results.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className={`rounded-xl overflow-hidden shadow-lg`}
              >
                <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                  <p className="text-blue-200">{study.industry}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                  
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                    Read case study
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
              View all case studies
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Partners Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Technology Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with leading technology providers to deliver comprehensive solutions tailored to your needs.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex items-center justify-center aspect-square"
              >
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services and approach.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              {
                question: "What makes Attributics different from other MarTech companies?",
                answer: "Our unique combination of deep technical expertise, industry experience, and commitment to measurable results sets us apart. We focus on custom solutions tailored to your specific business challenges rather than one-size-fits-all approaches."
              },
              {
                question: "How long does implementation typically take?",
                answer: "Implementation timelines vary based on project scope and complexity. Simple solutions can be deployed in weeks, while enterprise-wide transformations may take several months. We provide detailed timelines during our planning phase."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we serve organizations from fast-growing startups to global enterprises. Our solutions are scalable and can be tailored to meet the needs and budgets of businesses at any stage."
              },
              {
                question: "How do you measure success?",
                answer: "We establish clear, measurable KPIs at the beginning of each engagement, aligned with your business objectives. These might include increased conversion rates, improved marketing ROI, enhanced customer retention, or other metrics specific to your goals."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{item.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing Strategy?
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the leading brands that trust Attributics to optimize their marketing performance and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-lg hover:bg-gray-100"
              >
                Schedule a Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default WhatWeDoPage;