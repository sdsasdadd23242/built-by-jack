import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/seo/StructuredData";
import { serviceSchema } from "@/lib/structured-data";

// Create a Gold Coast specific service schema based on the generic one
const goldCoastServiceSchema = {
  ...serviceSchema,
  "@type": "Service",
  "name": "Gold Coast Web Development Services",
  "serviceType": "Web Design and Development",
  "description": "Professional web development services for Gold Coast businesses. Custom websites, e-commerce solutions, and responsive designs to help local businesses grow online.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BuiltByJack",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gold Coast",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "telephone": "+61-7-1234-5678",
    "url": "https://builtbyjack.com/gold-coast-web-development"
  },
  "areaServed": {
    "@type": "City",
    "name": "Gold Coast",
    "@id": "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "299",
    "highPrice": "899",
    "priceCurrency": "AUD",
    "offerCount": "3"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gold Coast Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starter Site",
          "description": "1-page scroll site (Home, About, Contact), Mobile-friendly & fast, Contact form or booking link, Basic SEO setup"
        },
        "price": "299",
        "priceCurrency": "AUD",
        "priceValidUntil": "2024-12-31"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Builder",
          "description": "Up to 3 pages, Mobile-first + performance optimized, Contact form + Google Maps, Basic SEO + social media links"
        },
        "price": "499",
        "priceCurrency": "AUD",
        "priceValidUntil": "2024-12-31"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Pro",
          "description": "Up to 6 pages, Mobile + desktop optimization, Speed & SEO performance tuned, Basic analytics setup, Newsletter integration"
        },
        "price": "899",
        "priceCurrency": "AUD",
        "priceValidUntil": "2024-12-31"
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Gold Coast Web Development | Professional Website Services",
  description: "Professional Gold Coast web development services. Custom websites, e-commerce solutions, and responsive designs for local businesses.",
  keywords: ["Gold Coast web development", "website design Gold Coast", "web developer Gold Coast", "Gold Coast website services", "responsive web design Gold Coast"],
};

export default function GoldCoastWebDevelopment() {
  return (
    <div className="container mx-auto px-4 py-12">
      <StructuredData data={goldCoastServiceSchema} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold Coast Web Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Custom website design and development for Gold Coast businesses looking to grow online.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Elevate Your Gold Coast Business Online</h2>
          <p className="text-lg mb-4">
            Our Gold Coast web development team creates stunning, functional websites that help local businesses stand out in a competitive market.
            From Surfers Paradise to Coolangatta, we've helped businesses across the Gold Coast establish a powerful online presence.
          </p>
          <p className="text-lg mb-6">
            Whether you need a brand new website, an e-commerce platform, or an upgrade to your existing site, our experienced developers deliver results that drive business growth.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Get a Free Consultation
          </Link>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="/images/gold-coast-skyline.jpg" 
            alt="Gold Coast City Skyline" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20"></div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Gold Coast Web Development Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Website Design</h3>
            <p className="text-gray-600 mb-4">
              Beautifully designed websites that reflect your brand identity and engage your visitors.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Responsive design</li>
              <li>• Brand-aligned visuals</li>
              <li>• User experience optimization</li>
              <li>• Modern aesthetics</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">E-Commerce Development</h3>
            <p className="text-gray-600 mb-4">
              Powerful online stores that drive sales for Gold Coast businesses.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Shopify and WooCommerce</li>
              <li>• Secure payment gateways</li>
              <li>• Inventory management</li>
              <li>• Mobile shopping experiences</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Application Development</h3>
            <p className="text-gray-600 mb-4">
              Custom web applications and software solutions for specific business needs.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Custom functionality</li>
              <li>• Business process automation</li>
              <li>• CRM integration</li>
              <li>• API development</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">SEO-Optimized Websites</h3>
            <p className="text-gray-600 mb-4">
              Websites built with search engines in mind to drive organic traffic.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• On-page SEO</li>
              <li>• Local Gold Coast SEO</li>
              <li>• Performance optimization</li>
              <li>• Schema markup</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">CMS Development</h3>
            <p className="text-gray-600 mb-4">
              User-friendly content management systems that give you control of your website.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• WordPress development</li>
              <li>• Custom CMS solutions</li>
              <li>• Easy content updates</li>
              <li>• User training</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Website Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Ongoing support and maintenance to keep your website secure and up-to-date.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Security updates</li>
              <li>• Performance monitoring</li>
              <li>• Content updates</li>
              <li>• Technical support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Web Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-2">Discovery</h3>
            <p className="text-gray-600">Understanding your business goals and website requirements.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-gray-600">Creating wireframes and visual designs for your approval.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">Building your website with clean, efficient code.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-xl font-bold mb-2">Launch</h3>
            <p className="text-gray-600">Testing, deployment, and post-launch support.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Gold Coast Development Results</h2>
          <p className="text-lg mb-6">
            We're proud of the results we've achieved for Gold Coast businesses across various industries. Our websites don't just look good—they perform well, driving traffic, leads, and sales.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">8+</div>
            <p>Gold Coast Clients</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">100%</div>
            <p>Client Satisfaction</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">40%+</div>
            <p>Avg. Traffic Increase</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">24/7</div>
            <p>Support Available</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Gold Coast Business Online?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today for a free consultation. Let's discuss how we can help your Gold Coast business thrive online.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
          Get Started Today
        </Link>
      </div>
    </div>
  );
} 