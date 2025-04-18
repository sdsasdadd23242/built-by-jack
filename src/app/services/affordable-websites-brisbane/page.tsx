import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Affordable Websites Brisbane | Budget-Friendly Web Design",
  description: "Get a professional website at an affordable price in Brisbane. Quality web design without breaking the bank - starting from just $599.",
  keywords: ["cheap websites Brisbane", "affordable web design Brisbane", "budget website Brisbane", "low cost websites", "affordable web development Brisbane"],
};

export default function AffordableWebsitesBrisbane() {
  return (
    <div className="container mx-auto px-4 py-12">
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
            Get Started From Just $599
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
              <h3 className="text-2xl font-bold">Starter</h3>
              <div className="text-4xl font-bold my-4">$599</div>
              <p className="text-gray-600">Perfect for small businesses</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>3-5 Page Website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Mobile Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Contact Form</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Google Maps Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Basic SEO Setup</span>
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
              <h3 className="text-2xl font-bold">Business</h3>
              <div className="text-4xl font-bold my-4">$899</div>
              <p>Ideal for growing businesses</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>5-8 Page Website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Premium Design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Blog Setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Advanced SEO Package</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Social Media Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Basic Analytics Setup</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Get Started
              </Link>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 text-center border-b">
              <h3 className="text-2xl font-bold">E-commerce</h3>
              <div className="text-4xl font-bold my-4">$1299</div>
              <p className="text-gray-600">For online stores</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Full E-commerce Store</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Up to 50 Products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Payment Gateway Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Product Management System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Shopping Cart & Checkout</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Full SEO & Analytics Package</span>
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
        <h2 className="text-3xl font-bold mb-6">Serving Brisbane Businesses Since 2018</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          We've helped hundreds of Brisbane businesses establish a professional online presence without breaking the bank. Our affordable websites deliver real business results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">500+</div>
            <p className="text-lg">Websites Delivered</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">98%</div>
            <p className="text-lg">Customer Satisfaction</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">5⭐</div>
            <p className="text-lg">Google Rating</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-5xl text-blue-600 mb-2">30+</div>
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