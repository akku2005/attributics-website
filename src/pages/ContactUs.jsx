// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   EnvelopeIcon,
//   MapPinIcon,
//   PhoneIcon,
//   CalendarIcon,
//   ChatBubbleLeftRightIcon,
//   CheckCircleIcon,
//   ClockIcon,
//   LockClosedIcon,
//   PaperAirplaneIcon,
// } from "@heroicons/react/24/outline";

// function ContactUsPage() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     serviceInterest: "",
//     message: "",
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formError, setFormError] = useState(null);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTimeout(() => {
//       setFormSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         phone: "",
//         serviceInterest: "",
//         message: "",
//       });
//     }, 1000);
//   };

//   const serviceOptions = [
//     "Multi-Touch Attribution",
//     "Marketing Analytics",
//     "MarTech Strategy",
//     "Customer Experience Consulting",
//     "Data Strategy & Governance",
//     "Technology Implementation",
//     "Campaign Optimization",
//     "Audience Analytics",
//     "Marketing Automation",
//     "Other",
//   ];

//   const officeLocations = [
//     {
//       city: "New York",
//       address: "123 Madison Avenue, 5th Floor",
//       addressLine2: "New York, NY 10016",
//       phone: "+1 (212) 555-7890",
//       email: "nyc@attributics.com",
//       image: "/api/placeholder/800/500",
//       hours: "Monday – Friday: 9AM – 6PM",
//     },
//     {
//       city: "San Francisco",
//       address: "555 Market Street, Suite 400",
//       addressLine2: "San Francisco, CA 94105",
//       phone: "+1 (415) 555-3210",
//       email: "sf@attributics.com",
//       image: "/api/placeholder/800/500",
//       hours: "Monday – Friday: 8AM – 5PM",
//     },
//     {
//       city: "London",
//       address: "10 Canary Wharf, Level 3",
//       addressLine2: "London E14 4PU, UK",
//       phone: "+44 20 7946 0321",
//       email: "london@attributics.com",
//       image: "/api/placeholder/800/500",
//       hours: "Monday – Friday: 9AM – 5:30PM",
//     },
//   ];

//   const teamContacts = [
//     {
//       name: "Sarah Johnson",
//       title: "Chief Customer Officer",
//       email: "sarah.johnson@attributics.com",
//       phone: "+1 (212) 555-1234",
//       image: "/api/placeholder/300/300",
//     },
//     {
//       name: "Michael Chen",
//       title: "Head of Client Success",
//       email: "michael.chen@attributics.com",
//       phone: "+1 (212) 555-5678",
//       image: "/api/placeholder/300/300",
//     },
//     {
//       name: "Olivia Martinez",
//       title: "Partnership Director",
//       email: "olivia.martinez@attributics.com",
//       phone: "+1 (415) 555-9876",
//       image: "/api/placeholder/300/300",
//     },
//   ];

//   const faqItems = [
//     {
//       question: "What information should I provide in my inquiry?",
//       answer:
//         "To help us serve you better, please include details about your company, current marketing challenges, project timeline, and specific services you're interested in. The more context you provide, the more tailored our response will be.",
//     },
//     {
//       question: "How quickly can I expect a response?",
//       answer:
//         "We aim to respond to all inquiries within 1 business day. For urgent matters, please indicate this in your message subject and we'll prioritize accordingly.",
//     },
//     {
//       question: "Do you offer virtual consultations?",
//       answer:
//         "Yes, we offer both in-person and virtual consultations depending on your preference and location. Our team uses secure video conferencing tools to ensure productive remote meetings.",
//     },
//     {
//       question: "Can I schedule a product demo before committing?",
//       answer:
//         "Absolutely! We encourage potential clients to see our solutions in action. You can request a personalized demo through our contact form or by calling any of our offices directly.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   const fadeInUp = {
//     hidden: { y: 60, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative overflow-hidden text-white bg-gradient-to-r from-purple-900 to-blue-900"
//       >
//         <div className="absolute inset-0 z-0">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 0.1, scale: 1 }}
//             transition={{ duration: 1.5 }}
//             className="absolute top-40 left-20 w-72 h-72 rounded-full bg-purple-500 blur-3xl"
//           />
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 0.1, scale: 1 }}
//             transition={{ duration: 1.5, delay: 0.2 }}
//             className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
//           />
//         </div>

//         <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <motion.div variants={itemVariants}>
//               <div className="inline-block px-4 py-1 rounded-full bg-purple-800 text-purple-300 font-medium text-sm mb-4">
//                 Get in Touch
//               </div>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl md:text-6xl font-bold mb-6"
//             >
//               Contact Us
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed"
//             >
//               Have a question or ready to elevate your marketing strategy? Our team
//               of experts is here to help you achieve exceptional results.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap gap-4 justify-center"
//             >
//               <a
//                 href="#contact-form"
//                 className="px-6 py-3 bg-white text-purple-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center"
//               >
//                 <EnvelopeIcon className="w-5 h-5 mr-2" />
//                 Send a Message
//               </a>
//               <a
//                 href="#offices"
//                 className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center"
//               >
//                 <MapPinIcon className="w-5 h-5 mr-2" />
//                 Visit Our Offices
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 100"
//             className="fill-white dark:fill-gray-900"
//           >
//             <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//           </svg>
//         </div>
//       </motion.div>

//       {/* Contact Options Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="py-20 px-6"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//               How Can We Help?
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Choose the most convenient way to connect with our team of marketing
//               technology experts.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <EnvelopeIcon className="w-8 h-8" />,
//                 title: "Email Us",
//                 description: "Send us a message and we'll respond within 24 hours",
//                 action: "info@attributics.com",
//                 link: "mailto:info@attributics.com",
//               },
//               {
//                 icon: <PhoneIcon className="w-8 h-8" />,
//                 title: "Call Us",
//                 description: "Speak directly with a member of our team",
//                 action: "+1 (800) 555-1234",
//                 link: "tel:+18005551234",
//               },
//               {
//                 icon: <CalendarIcon className="w-8 h-8" />,
//                 title: "Schedule a Demo",
//                 description: "Book a personalized demo of our solutions",
//                 action: "Book Now",
//                 link: "#contact-form",
//               },
//               {
//                 icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
//                 title: "Live Chat",
//                 description: "Chat with our support team in real-time",
//                 action: "Start Chat",
//                 link: "#",
//               },
//             ].map((option, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group"
//               >
//                 <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors">
//                   {option.icon}
//                 </div>

//                 <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
//                   {option.title}
//                 </h3>

//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {option.description}
//                 </p>

//                 <a
//                   href={option.link}
//                   className="mt-auto text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
//                 >
//                   {option.action}
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Contact Form Section */}
//       <motion.section
//         id="contact-form"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//                 Let's Start a Conversation
//               </h2>

//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                 Fill out the form below and one of our experts will get back to you
//                 within 24 hours.
//               </p>

//               <div className="space-y-6 mb-8">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
//                       <CheckCircleIcon className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                       Expert Consultation
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       Our team will analyze your specific needs and challenges.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
//                       <ClockIcon className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                       Quick Response
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       We respond to all inquiries within one business day.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
//                       <LockClosedIcon className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                       Privacy Guaranteed
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       Your information is secure and never shared with third parties.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
//                 <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
//                   Follow Us
//                 </h3>
//                 <div className="flex space-x-4">
//                   {[
//                     {
//                       name: "Twitter",
//                       icon: (
//                         <svg
//                           className="w-5 h-5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                         </svg>
//                       ),
//                       link: "https://twitter.com/attributics",
//                     },
//                     {
//                       name: "LinkedIn",
//                       icon: (
//                         <svg
//                           className="w-5 h-5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                         </svg>
//                       ),
//                       link: "https://linkedin.com/company/attributics",
//                     },
//                     {
//                       name: "Facebook",
//                       icon: (
//                         <svg
//                           className="w-5 h-5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                         </svg>
//                       ),
//                       link: "https://facebook.com/attributics",
//                     },
//                     {
//                       name: "Instagram",
//                       icon: (
//                         <svg
//                           className="w-5 h-5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
//                         </svg>
//                       ),
//                       link: "https://instagram.com/attributics",
//                     },
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.link}
//                       className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
//                 {formSubmitted ? (
//                   <div className="text-center py-8">
//                     <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                     <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                       Thank You!
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       Your message has been sent successfully. We'll get back to you
//                       within 24 hours.
//                     </p>
//                     <button
//                       onClick={() => setFormSubmitted(false)}
//                       className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//                     >
//                       Send Another Message
//                     </button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Service Interest
//                       </label>
//                       <select
//                         name="serviceInterest"
//                         value={formData.serviceInterest}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       >
//                         <option value="">Select a service</option>
//                         {serviceOptions.map((option, index) => (
//                           <option key={index} value={option}>
//                             {option}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Message *
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         rows="5"
//                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
//                       ></textarea>
//                     </div>

//                     {formError && (
//                       <p className="text-red-500 text-sm">{formError}</p>
//                     )}

//                     <button
//                       type="submit"
//                       className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
//                     >
//                       <PaperAirplaneIcon className="w-5 h-5 mr-2" />
//                       Send Message
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Team Contacts Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Connect with our leadership team for personalized assistance.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {teamContacts.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">{member.title}</p>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-center">
//                     <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
//                     <a
//                       href={`mailto:${member.email}`}
//                       className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
//                     >
//                       {member.email}
//                     </a>
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <PhoneIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
//                     <a
//                       href={`tel:${member.phone}`}
//                       className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
//                     >
//                       {member.phone}
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="py-20 px-6"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Find answers to common questions about working with us.
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {faqItems.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

// export default ContactUsPage;

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// AnimatedWave Component
function AnimatedWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = canvas.width;
    let height = canvas.height;

    // Resize canvas to match parent container
    const resize = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = 100; // Fixed height for the wave
    };

    resize();
    window.addEventListener('resize', resize);

    // Wave parameters
    const waveColors = ['rgba(139, 92, 246, 0.4)', 'rgba(96, 165, 250, 0.3)', 'rgba(139, 92, 246, 0.2)'];
    const waves = waveColors.map((color, i) => ({
      color,
      amplitude: 15 + i * 5, // Different heights
      frequency: 0.02 - i * 0.003, // Different wavelengths
      speed: 0.05 + i * 0.01, // Different speeds
      offset: 0
    }));

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach(wave => {
        // Update wave offset for animation
        wave.offset += wave.speed;

        // Begin drawing the wave
        ctx.beginPath();
        ctx.moveTo(0, height);

        // Draw wave path
        for (let x = 0; x <= width; x++) {
          const y = Math.sin(x * wave.frequency + wave.offset) * wave.amplitude + height / 2;
          ctx.lineTo(x, y);
        }

        // Complete the wave path
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Fill the wave
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      <canvas ref={canvasRef} className="w-full"></canvas>
    </div>
  );
}

function ContactUsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
    }, 1000);
  };

  const serviceOptions = [
    "Multi-Touch Attribution",
    "Marketing Analytics",
    "MarTech Strategy",
    "Customer Experience Consulting",
    "Data Strategy & Governance",
    "Technology Implementation",
    "Campaign Optimization",
    "Audience Analytics",
    "Marketing Automation",
    "Other",
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Madison Avenue, 5th Floor",
      addressLine2: "New York, NY 10016",
      phone: "+1 (212) 555-7890",
      email: "nyc@attributics.com",
      image: "/api/placeholder/800/500",
      hours: "Monday – Friday: 9AM – 6PM",
    },
    {
      city: "San Francisco",
      address: "555 Market Street, Suite 400",
      addressLine2: "San Francisco, CA 94105",
      phone: "+1 (415) 555-3210",
      email: "sf@attributics.com",
      image: "/api/placeholder/800/500",
      hours: "Monday – Friday: 8AM – 5PM",
    },
    {
      city: "London",
      address: "10 Canary Wharf, Level 3",
      addressLine2: "London E14 4PU, UK",
      phone: "+44 20 7946 0321",
      email: "london@attributics.com",
      image: "/api/placeholder/800/500",
      hours: "Monday – Friday: 9AM – 5:30PM",
    },
  ];

  const teamContacts = [
    {
      name: "Sarah Johnson",
      title: "Chief Customer Officer",
      email: "sarah.johnson@attributics.com",
      phone: "+1 (212) 555-1234",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Michael Chen",
      title: "Head of Client Success",
      email: "michael.chen@attributics.com",
      phone: "+1 (212) 555-5678",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Olivia Martinez",
      title: "Partnership Director",
      email: "olivia.martinez@attributics.com",
      phone: "+1 (415) 555-9876",
      image: "/api/placeholder/300/300",
    },
  ];

  const faqItems = [
    {
      question: "What information should I provide in my inquiry?",
      answer:
        "To help us serve you better, please include details about your company, current marketing challenges, project timeline, and specific services you're interested in. The more context you provide, the more tailored our response will be.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We aim to respond to all inquiries within 1 business day. For urgent matters, please indicate this in your message subject and we'll prioritize accordingly.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer both in-person and virtual consultations depending on your preference and location. Our team uses secure video conferencing tools to ensure productive remote meetings.",
    },
    {
      question: "Can I schedule a product demo before committing?",
      answer:
        "Absolutely! We encourage potential clients to see our solutions in action. You can request a personalized demo through our contact form or by calling any of our offices directly.",
    },
  ];

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
        className="relative overflow-hidden text-white bg-gradient-to-r from-purple-900 to-blue-900"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-40 left-20 w-72 h-72 rounded-full bg-purple-500 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1 rounded-full bg-purple-800 text-purple-300 font-medium text-sm mb-4">
                Get in Touch
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed"
            >
              Have a question or ready to elevate your marketing strategy? Our team
              of experts is here to help you achieve exceptional results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact-form"
                className="px-6 py-3 bg-white text-purple-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Send a Message
              </a>
              <a
                href="#offices"
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Visit Our Offices
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Wave Component */}
        <AnimatedWave />
      </motion.div>

      {/* Contact Options Section */}
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
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our team of marketing
              technology experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <EnvelopeIcon className="w-8 h-8" />,
                title: "Email Us",
                description: "Send us a message and we'll respond within 24 hours",
                action: "info@attributics.com",
                link: "mailto:info@attributics.com",
              },
              {
                icon: <PhoneIcon className="w-8 h-8" />,
                title: "Call Us",
                description: "Speak directly with a member of our team",
                action: "+1 (800) 555-1234",
                link: "tel:+18005551234",
              },
              {
                icon: <CalendarIcon className="w-8 h-8" />,
                title: "Schedule a Demo",
                description: "Book a personalized demo of our solutions",
                action: "Book Now",
                link: "#contact-form",
              },
              {
                icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
                link: "#",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors">
                  {option.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {option.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {option.description}
                </p>

                <a
                  href={option.link}
                  className="mt-auto text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  {option.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="contact-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Let's Start a Conversation
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and one of our experts will get back to you
                within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Expert Consultation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team will analyze your specific needs and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Quick Response
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We respond to all inquiries within one business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <LockClosedIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Privacy Guaranteed
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your information is secure and never shared with third parties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "Twitter",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      ),
                      link: "https://twitter.com/attributics",
                    },
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      link: "https://linkedin.com/company/attributics",
                    },
                    {
                      name: "Facebook",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      ),
                      link: "https://facebook.com/attributics",
                    },
                    {
                      name: "Instagram",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                      ),
                      link: "https://instagram.com/attributics",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your message has been sent successfully. We'll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Service Interest
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
                      ></textarea>
                    </div>

                    {formError && (
                      <p className="text-red-500 text-sm">{formError}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Office Locations Section */}
      <motion.section
        id="offices"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at one of our locations or contact our regional teams directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {office.address}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {office.addressLine2}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <PhoneIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Contacts Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with our leadership team for personalized assistance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamContacts.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.title}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                    <a
                      href={`tel:${member.phone}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about working with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default ContactUsPage;