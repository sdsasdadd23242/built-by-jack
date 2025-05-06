import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { faqSchemaAffordableWebsites, serviceSchema, reviewSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cheap Websites Brisbane | Affordable Web Design from $399",
  description: "Looking for cheap websites in Brisbane? Get a professional website at the most competitive price without compromising quality. Starting from just $399.",
  keywords: ["cheap websites Brisbane", "budget website design Brisbane", "low cost web design", "affordable website Brisbane", "best value websites Brisbane"],
};

export default function CheapWebsitesBrisbane() {
  return (
    <div className="container mx-auto px-4 py-12">
      <StructuredData data={faqSchemaAffordableWebsites} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={reviewSchema} />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cheap Websites Brisbane</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get a professional website at the lowest price in Brisbane without compromising on quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Affordable Websites That Don't Look Cheap</h2>
          <p className="text-lg mb-4">
            At BuiltByJack, we believe a tight budget shouldn't mean a poor-quality website. Our cheap website packages are designed to give Brisbane businesses and entrepreneurs a professional online presence at the most competitive prices.
          </p>
          <p className="text-lg mb-6">
            All our budget websites include mobile responsiveness, basic SEO setup, and a modern design that will impress your visitors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Start From Just $399
            </Link>
            <Link href="/services/affordable-websites-brisbane" className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition duration-300">
              See All Packages
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-blue-600">$399</div>
            <p className="text-lg font-semibold">Basic Website Package</p>
            <p className="text-sm text-gray-500">Perfect for small businesses & startups</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>3-Page Responsive Website</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Modern & Professional Design</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Contact Form</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Mobile-Friendly Design</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Basic SEO Setup</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Social Media Links</span>
            </div>
            <div className="mt-6 text-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Cheap Website Service?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Lowest Price Guarantee</h3>
            <p>
              We offer the most competitive prices in Brisbane without compromising on quality or essential features.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
            <p>
              Get your website up and running in as little as 3-5 business days with our efficient development process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Results</h3>
            <p>
              Despite the low cost, our websites look professional and are built with modern web standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">No Hidden Costs</h3>
            <p>
              Our pricing is transparent with no surprise fees. What you see is what you pay.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Local Support</h3>
            <p>
              As a Brisbane-based company, we provide local support and understand the local market.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Upgradable</h3>
            <p>
              Start with a basic package and easily upgrade as your business grows without rebuilding.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Cheap Website Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Basic</h3>
              <div className="text-4xl font-bold my-4">$399</div>
              <p className="text-gray-600">For individuals & startups</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3-Page Website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Contact Form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Social Media Links</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Choose Basic
              </Link>
            </div>
          </div>
          
          <div className="border-2 border-blue-600 rounded-xl overflow-hidden shadow-xl relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-4 rounded-bl-lg font-medium">
              Best Value
            </div>
            <div className="bg-blue-600 text-white p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Value</h3>
              <div className="text-4xl font-bold my-4">$599</div>
              <p>For small businesses</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>5-Page Website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Contact Form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Enhanced SEO Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Google Maps Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Social Media Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic Analytics Setup</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Choose Value
              </Link>
            </div>
          </div>
          
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Business</h3>
              <div className="text-4xl font-bold my-4">$899</div>
              <p className="text-gray-600">For established businesses</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>8-Page Website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Premium Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced Contact Forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete SEO Package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Blog Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Full Analytics Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Newsletter Signup</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Choose Business
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">How can you offer websites so cheaply?</h3>
            <p>
              We've streamlined our development process and utilize pre-built components and templates that we customize to your needs. This allows us to create professional websites quickly and at a lower cost without sacrificing quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Will my cheap website look professional?</h3>
            <p>
              Absolutely! We use modern design principles and ensure all our websites are fully responsive and professional looking, regardless of price point. Your website will be designed to impress your visitors and represent your brand effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">How long will it take to build my website?</h3>
            <p>
              Our basic websites typically take 3-5 business days to complete once we have all your content and requirements. More complex projects may take longer, but we always provide clear timelines upfront.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Are there any hidden costs?</h3>
            <p>
              No, our pricing is transparent. The only additional costs would be for domain registration and hosting if you don't already have these. We'll clearly explain these costs before you commit to any package.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Can I upgrade my website later?</h3>
            <p>
              Yes, all our websites are built to be scalable. You can start with a basic package and upgrade with additional pages, features, or functionality as your business grows.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Do you build websites for all Brisbane suburbs?</h3>
            <p>Yes! We work with businesses across all Brisbane suburbs, including Fortitude Valley, South Bank, New Farm, West End, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Why choose a Brisbane-based web developer?</h3>
            <p>As a Brisbane-based team, we understand the local market and can tailor your website to attract more customers in Brisbane and Southeast Queensland.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-20">
        <h3 className="text-lg font-semibold mb-2">Explore More Brisbane Services:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/brisbane-web-development" className="text-blue-600 underline">Brisbane Web Development</Link>
          <Link href="/services/seo-brisbane" className="text-blue-600 underline">SEO Brisbane</Link>
          <Link href="/services/web-design-brisbane" className="text-blue-600 underline">Web Design Brisbane</Link>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for an Affordable Website?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get in touch today to discuss your requirements and get a free quote. Quality websites don't have to be expensive!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
            Get Your Free Quote
          </Link>
          <Link href="/portfolio" className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
            View Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
} 