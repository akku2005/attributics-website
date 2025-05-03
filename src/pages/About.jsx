import { useState, useEffect } from "react";
import TeamImage from "../assets/images/TeamImage.png"

function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Vakesh Singh",
      position: "Principal Consultant",
      image: "/api/placeholder/150/150",
      description: "Martech enthusiast with 9+ years' experience turning data into growth strategies across Telecom, FMCG, and E-commerce. Skilled in CDPs, analytics, and performance."
    },
    {
      name: "Shashank Kumar",
      position: "Strategy Head",
      image: "/api/placeholder/150/150",
      description: "Martech enthusiast passionate about transforming raw data into powerful brand narratives that connect with users, drive engagement, and deliver measurable business impact."
    },
    {
      name: "Shreya Mehta",
      position: "Implementation Head",
      image: "/api/placeholder/150/150",
      description: "I specialise in turning strategy into execution by implementing data-centric solutions that empower brands, elevate performance, and unlock sustainable, long-term growth."
    },
    {
      name: "Prakash Reddy",
      position: "Lead Data Scientist",
      image: "/api/placeholder/150/150",
      description: "Expert in attribution modeling and marketing analytics algorithms with a passion for solving complex data challenges."
    }
  ];

  // Company values
  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge MarTech solutions that deliver exceptional results."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, becoming an extension of their team."
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description: "Our approach is rooted in analytics, ensuring every decision is backed by solid data and insights."
    },
    {
      icon: "✨",
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our technology to our client service."
    }
  ];

  // Milestones
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Attributics was founded with a vision to transform marketing technology."
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Secured our first major client, demonstrating the power of our platform."
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Officially launched our comprehensive attribution and analytics platform."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across multiple countries."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Incorporated advanced AI capabilities into our platform."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leader in marketing technology solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white bg-gradient-to-r from-blue-900 to-purple-900">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-800 text-blue-300 font-medium text-sm mb-4">
              Our Mission & Vision
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Attributics
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your strategic partner for navigating the ever-evolving marketing technology landscape, 
              empowering businesses to excel with modern tools and strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  At Attributics, we are more than just a MarTech company. We are a team of passionate marketing technologists, 
                  data scientists, and strategists who understand the challenges of modern marketing.
                </p>
                <p>
                  Founded in 2018, we set out with a clear mission: to simplify the complex world of marketing attribution 
                  and provide businesses with the insights they need to make confident, data-driven decisions.
                </p>
                <p>
                  Today, we serve clients across multiple industries, from e-commerce giants to emerging startups, 
                  all with the same commitment to excellence and innovation that has defined us from day one.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={TeamImage} 
                      alt="Attributics Team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🌟</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">10+</div>
                      <div className="text-white text-xs">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🌎</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Global</div>
                      <div className="text-white text-xs">Presence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals driving Attributics forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group hover:translate-y-2"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-lg text-gray-400 mb-1">{member.position}</div>
                <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                <p className="text-gray-300">{member.description}</p>
                <div className="flex justify-center mt-6 space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                    <span className="text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                    <span className="text-sm">𝕏</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Attributics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow hover:translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-6 text-3xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The milestones that have shaped Attributics into what it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-xl mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                  
                  <div className="z-10 relative">
                    <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Why Choose Attributics?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Expertise That Matters</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team brings decades of combined experience in marketing technology and analytics.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Tailored Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We design custom MarTech strategies aligned with your specific business goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Proven Results</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our clients consistently achieve significant improvements in marketing ROI and performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Continuous Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We're constantly evolving our platform to stay ahead of industry trends and technological advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-xl">
                <div className="text-4xl mb-6">💬</div>
                <p className="text-xl italic mb-6">
                  "Attributics has completely transformed how we approach our marketing strategy. The insights 
                  we've gained have allowed us to optimize our campaigns and achieve results we never thought possible."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="font-bold">Michael Chen</div>
                    <div className="text-blue-200">CMO, Global Retail Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing Strategy?
          </h2>
          
          <p className="text-xl mb-8 text-blue-100">
            Join the leading brands that trust Attributics to optimize their marketing performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-lg hover:bg-gray-100">
              Schedule a Demo
            </button>
            
            <button className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;