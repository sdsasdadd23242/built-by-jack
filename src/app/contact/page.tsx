import React from "react";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";

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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 