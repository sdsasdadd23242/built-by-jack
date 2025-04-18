import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import { serviceSchema } from "@/lib/structured-data";

// Create a Brisbane affordable websites specific schema
const affordableWebsitesBrisbaneSchema = {
  ...serviceSchema,
  "@type": "Service",
  "name": "Affordable Websites Brisbane",
  "serviceType": "Web Design and Development",
  "description": "Professional, affordable website design services in Brisbane. Quality web design starting from just $299.",
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
    "url": "https://builtbyjack.com/services/affordable-websites-brisbane"
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
    "name": "Affordable Brisbane Website Services",
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
  title: "Affordable Websites Brisbane | Budget-Friendly Web Design",
  description: "Get a professional website at an affordable price in Brisbane. Quality web design without breaking the bank - starting from just $299.",
  keywords: ["cheap websites Brisbane", "affordable web design Brisbane", "budget website Brisbane", "low cost websites", "affordable web development Brisbane"],
};

export default function AffordableWebsitesBrisbane() {
  return (
    <div className="container mx-auto px-4 py-12">
      <StructuredData data={affordableWebsitesBrisbaneSchema} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Affordable Websites Brisbane</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional websites at budget-friendly prices, without compromising on quality or features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Quality Websites That Don't Break the Bank</h2>
          <p className="text-lg mb-4">
            We believe every Brisbane business deserves a professional online presence, regardless of budget constraints. Our affordable website packages deliver exceptional value without cutting corners on quality.
          </p>
          <p className="text-lg mb-6">
            All our budget-friendly websites come with modern designs, mobile responsiveness, and essential SEO features to help your Brisbane business succeed online.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Get Started From Just $299
          </Link>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Our Affordable Websites Stand Out</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Professional design that looks premium</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Fully responsive on all devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Local Brisbane SEO optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Fast loading times for better user experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Content management system</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Contact forms and Google Maps integration</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Affordable Website Packages for Brisbane Businesses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Starter Site</h3>
              <div className="text-4xl font-bold my-4">$299</div>
              <p className="text-gray-600">Perfect for side hustlers or quick launches</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>1-page scroll site (Home, About, Contact)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Mobile-friendly & fast</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Contact form or booking link</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Delivered in 3 days</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Get Started
              </Link>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-xl relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-4 rounded-bl-lg font-medium">
              Popular
            </div>
            <div className="bg-blue-600 text-white p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Business Builder</h3>
              <div className="text-4xl font-bold my-4">$499</div>
              <p>Best for small businesses</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Up to 3 pages (Home, Services, Contact)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Mobile-first + performance optimized</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Contact form + Google Maps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Basic SEO + social media links</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Free edits for 7 days after launch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Delivered in 3–5 days</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Get Started
              </Link>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Growth Pro</h3>
              <div className="text-4xl font-bold my-4">$899</div>
              <p className="text-gray-600">For businesses ready to grow online</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Up to 6 pages (Home, About, Services, Blog, Contact, FAQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Mobile + desktop optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Speed & SEO performance tuned</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Basic analytics setup (Google Analytics)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Newsletter/email capture integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>14-day support after launch</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Serving Brisbane Businesses</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          We're helping Brisbane businesses establish a professional online presence without breaking the bank. Our affordable websites deliver real business results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">10+</div>
            <p className="text-lg">Websites Delivered</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">100%</div>
            <p className="text-lg">Customer Satisfaction</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">5⭐</div>
            <p className="text-lg">Google Rating</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">10+</div>
            <p className="text-lg">Brisbane Suburbs Served</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for an Affordable, Professional Website?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to discuss your Brisbane business needs and get a free quote. Quality websites don't have to be expensive!
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
          Get Your Free Quote
        </Link>
      </div>
    </div>
  );
} 