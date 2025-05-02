import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSubmit = (data) => {
    console.log('Contact form submitted:', data);
    // Integrate with EmailJS or backend API
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
                Get in Touch
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions or ready to start your marketing transformation? Reach out to us today!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full p-3 border rounded-lg h-40 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-blue-600 dark:bg-blue-800 text-white font-medium shadow-lg shadow-blue-500/30 dark:shadow-blue-700/30 hover:bg-blue-700 dark:hover:bg-blue-900"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We’re here to help! Connect with us through email, phone, or visit our office.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl mx-auto">
                📧
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">support@attributicstech.com</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl mx-auto">
                📞
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+1 (800) 123-4567</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl mx-auto">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Office</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Marketing Ave, Suite 100, Tech City, USA</p>
            </motion.div>
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
              Let’s Start the Conversation
            </h2>
            <p className="text-xl mb-6 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              We’re excited to hear from you and explore how we can help your business grow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-blue-600 dark:text-blue-800 font-medium shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default ContactUs;