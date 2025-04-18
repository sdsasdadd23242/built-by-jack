import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { serviceSchema } from "@/lib/structured-data";

// Create a Brisbane web design specific schema
const webDesignBrisbaneSchema = {
  ...serviceSchema,
  "@type": "Service",
  "name": "Web Design Brisbane Services",
  "serviceType": "Web Design",
  "description": "Professional web design services for Brisbane businesses. Beautiful, responsive, and functional websites tailored to Brisbane businesses.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BuiltByJack",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "telephone": "+61-7-1234-5678",
    "url": "https://builtbyjack.com/services/web-design-brisbane"
  },
  "areaServed": {
    "@type": "City",
    "name": "Brisbane",
    "@id": "https://en.wikipedia.org/wiki/Brisbane"
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
    "name": "Brisbane Web Design Services",
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
  title: "Professional Web Design Services in Brisbane | BuiltByJack",
  description: "Expert web design services in Brisbane. We create beautiful, responsive, and functional websites tailored to Brisbane businesses and their unique needs.",
  keywords: ["web design Brisbane", "Brisbane web designer", "professional website design", "responsive web design", "business websites Brisbane"],
};

export default function WebDesignBrisbane() {
  return (
    <div className="container mx-auto px-4 py-12">
      <StructuredData data={webDesignBrisbaneSchema} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design Brisbane</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional, beautiful, and effective websites designed specifically for Brisbane businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Local Brisbane Web Design Expertise</h2>
          <p className="text-lg mb-4">
            As a Brisbane-based web design agency, we understand the local market and what makes Brisbane businesses unique. Our designs are tailored to resonate with your local audience while maintaining global appeal.
          </p>
          <p className="text-lg mb-6">
            We create websites that not only look stunning but also drive results for your Brisbane business.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Get a Free Quote
          </Link>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="/images/brisbane-skyline.jpg" 
            alt="Brisbane City Skyline" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20"></div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Brisbane Web Design Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Custom Website Design</h3>
            <p>Unique designs tailored to your Brisbane business, brand, and target audience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">E-commerce Solutions</h3>
            <p>Sell products and services online with a beautiful, functional online store.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Mobile-Responsive Design</h3>
            <p>Websites that look and function perfectly on all devices, from phones to desktops.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
            <p>Boost your search rankings in Brisbane with SEO-friendly website design.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Website Maintenance</h3>
            <p>Keep your website secure, updated, and performing at its best with our maintenance services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Local SEO</h3>
            <p>Specialized Brisbane SEO to help local customers find your business online.</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us for Your Brisbane Website?</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">2+</div>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">10+</div>
            <p className="text-lg">Brisbane Clients</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">24/7</div>
            <p className="text-lg">Support Available</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">100%</div>
            <p className="text-lg">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brisbane Business Online?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get a professional website that stands out in the Brisbane market and drives real results for your business.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
} 