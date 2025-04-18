import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/seo/StructuredData";
import { serviceSchema } from "@/lib/structured-data";

// Create a Brisbane SEO specific schema
const seoBrisbaneSchema = {
  ...serviceSchema,
  "@type": "Service",
  "name": "SEO Brisbane Services",
  "serviceType": "Search Engine Optimization",
  "description": "Professional SEO services for Brisbane businesses. Boost your local search rankings with our comprehensive SEO solutions.",
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
    "url": "https://builtbyjack.com/services/seo-brisbane"
  },
  "areaServed": {
    "@type": "City",
    "name": "Brisbane",
    "@id": "https://en.wikipedia.org/wiki/Brisbane"
  },
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "AUD",
    "priceValidUntil": "2024-12-31",
    "name": "SEO Booster",
    "description": "Advanced SEO setup with keyword research, meta tags, Schema markup, and Google Search Console configuration."
  }
};

export const metadata: Metadata = {
  title: "SEO Brisbane | Local SEO Services & Optimization",
  description: "Boost your Brisbane business visibility with our expert SEO services. Local optimization, keyword research, and content strategies to increase your rankings.",
  keywords: ["SEO Brisbane", "Brisbane SEO services", "local SEO Brisbane", "SEO optimization Brisbane", "Brisbane search engine optimization"],
};

export default function SEOBrisbane() {
  return (
    <div className="container mx-auto px-4 py-12">
      <StructuredData data={seoBrisbaneSchema} />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Brisbane</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Local SEO services to boost your Brisbane business visibility in search engines.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Boost Your Local Search Rankings</h2>
          <p className="text-lg mb-4">
            Our Brisbane SEO experts help your business climb to the top of search engine results for local searches. 
            We implement proven techniques tailored to the Brisbane market to increase your visibility to potential customers.
          </p>
          <p className="text-lg mb-6">
            Whether you're a small local business or an established company, our SEO strategies will help you reach more customers in Brisbane and Southeast Queensland.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Get a Free SEO Audit
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

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Brisbane SEO Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Local SEO</h3>
            <p className="text-gray-600 mb-4">
              Specialized strategies to improve your visibility in local Brisbane searches and Google Maps.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Google Business Profile optimization</li>
              <li>• Local citation building</li>
              <li>• Brisbane-focused content</li>
              <li>• Local link building</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Keyword Research</h3>
            <p className="text-gray-600 mb-4">
              Identifying valuable keywords that Brisbane customers are using to find businesses like yours.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Competitor keyword analysis</li>
              <li>• Local keyword identification</li>
              <li>• Search volume assessment</li>
              <li>• Opportunity assessment</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
            <p className="text-gray-600 mb-4">
              Creating engaging, SEO-friendly content that resonates with your Brisbane audience.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Blog content creation</li>
              <li>• Keyword-rich page optimization</li>
              <li>• Content gap analysis</li>
              <li>• Local content marketing</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Link Building</h3>
            <p className="text-gray-600 mb-4">
              Ethical link building strategies to improve your site's authority and rankings.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Local Brisbane backlinks</li>
              <li>• Industry directory submissions</li>
              <li>• Content outreach</li>
              <li>• Relationship building</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Technical SEO</h3>
            <p className="text-gray-600 mb-4">
              Optimizing your website's technical aspects to improve search engine crawling and indexing.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Site speed optimization</li>
              <li>• Mobile responsiveness</li>
              <li>• Schema markup implementation</li>
              <li>• Site structure improvements</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
            <p className="text-gray-600 mb-4">
              Regular reporting and analytics to track your SEO performance and ROI.
            </p>
            <ul className="space-y-1 text-sm mb-4">
              <li>• Keyword ranking reports</li>
              <li>• Traffic analysis</li>
              <li>• Conversion tracking</li>
              <li>• Competitor monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our SEO Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-2">Audit</h3>
            <p className="text-gray-600">Comprehensive analysis of your current SEO performance.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-2">Strategy</h3>
            <p className="text-gray-600">Develop a tailored SEO plan for your Brisbane business.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-2">Implementation</h3>
            <p className="text-gray-600">Execute on-page, off-page, and technical SEO improvements.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-xl font-bold mb-2">Monitoring</h3>
            <p className="text-gray-600">Ongoing analysis and refinement of SEO strategies.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Brisbane SEO Results</h2>
          <p className="text-lg mb-6">
            We've helped numerous Brisbane businesses improve their search visibility and attract more customers. Our proven SEO strategies have delivered measurable results for businesses across various industries.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">10+</div>
            <p>Brisbane Clients</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">50%+</div>
            <p>Avg. Traffic Increase</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">5★</div>
            <p>Google Rating</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="font-bold text-4xl text-blue-600 mb-2">30%+</div>
            <p>Conversion Improvement</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Brisbane SEO?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today for a free SEO audit and consultation. Let's get your Brisbane business ranking higher in search results.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block">
          Get Started Today
        </Link>
      </div>
    </div>
  );
} 