import React from "react";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | BuiltByJack",
  description: "Get in touch with our team to discuss your website development needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle
          pretitle="Contact Us"
          title="Let's Build Your Dream Website Together"
          description="Get in touch with our team for a free consultation. We'll discuss your project requirements and provide a tailored solution."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Phone</p>
                    <a 
                      href="tel:+61406878720" 
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      0406 878 720
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Brisbane, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-background rounded-xl border p-8 shadow-sm" action="mailto:builtbyjack.com@gmail.com" method="post" encType="text/plain">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="youremail@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="website" className="block text-sm font-medium mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full sm:w-auto rounded-full flex items-center gap-2 hover:shadow-md transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 