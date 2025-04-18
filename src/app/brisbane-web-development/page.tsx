import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brisbane Web Development Services | Expert Web Developers",
  description: "Professional web development services in Brisbane. Our expert developers build custom, high-performance websites for businesses of all sizes.",
  keywords: ["Brisbane web development", "web developers Brisbane", "custom website development Brisbane", "professional web development Brisbane", "business website Brisbane"],
};

export default function BrisbaneWebDevelopment() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Brisbane Web Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert web development services for Brisbane businesses. Custom websites built with cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Brisbane's Premier Web Development Agency</h2>
          <p className="text-lg mb-4">
            At BuiltByJack, we deliver exceptional web development services tailored to Brisbane businesses. Our talented team of developers creates custom websites that are fast, secure, and perfectly aligned with your brand and business goals.
          </p>
          <p className="text-lg mb-6">
            From simple business websites to complex e-commerce platforms, we have the expertise to bring your digital vision to life.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Discuss Your Project
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">100+</div>
            <p>Projects Completed</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">5+</div>
            <p>Years Experience</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">98%</div>
            <p>Client Satisfaction</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">24/7</div>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Brisbane Web Development Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Website Development</h3>
            <p className="text-gray-600 mb-4">
              Bespoke websites designed and built from scratch to match your specific business requirements and goals.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Fully responsive design</li>
              <li>• Custom functionality</li>
              <li>• Content management system</li>
              <li>• SEO optimization</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">E-commerce Development</h3>
            <p className="text-gray-600 mb-4">
              Powerful online stores that deliver exceptional shopping experiences and drive sales for your Brisbane business.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Product management</li>
              <li>• Secure payment gateways</li>
              <li>• Inventory management</li>
              <li>• Order processing</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications that complement your website and extend your digital reach.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• iOS and Android development</li>
              <li>• React Native expertise</li>
              <li>• App Store submission</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Website Performance Optimization</h3>
            <p className="text-gray-600 mb-4">
              Speed up your existing website with our optimization services, improving user experience and search rankings.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Loading time improvement</li>
              <li>• Code optimization</li>
              <li>• Server-side caching</li>
              <li>• Image and asset optimization</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">CMS Development</h3>
            <p className="text-gray-600 mb-4">
              Custom content management systems that make it easy for your team to update and manage your website.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• WordPress customization</li>
              <li>• Custom CMS development</li>
              <li>• User-friendly interfaces</li>
              <li>• Training and support</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive digital strategies that integrate your website with broader marketing efforts for maximum impact.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• SEO optimization</li>
              <li>• Content strategy</li>
              <li>• Conversion optimization</li>
              <li>• Analytics and reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-2">Discovery</h3>
            <p className="text-gray-600">We learn about your business, goals, and requirements.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-2">Planning</h3>
            <p className="text-gray-600">We create a detailed roadmap for your project's success.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">Our experts build your website with clean, efficient code.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-xl font-bold mb-2">Launch</h3>
            <p className="text-gray-600">We deploy your website and provide ongoing support.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brisbane Website?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to discuss your web development project. From small business websites to enterprise solutions, we're here to help.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
          Get a Free Consultation
        </Link>
      </div>
    </div>
  );
} 