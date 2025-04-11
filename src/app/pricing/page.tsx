"use client";

import React from "react";
import PageHeader from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Starter",
      price: "$300 - $500",
      description: "Basic one-pager ideal for solo hustlers, freelancers, and local tradesmen.",
      features: [
        "One-page site (home, about, contact section)",
        "Mobile responsive",
        "AI-generated content & images",
        "Basic design template",
        "3-day to 5-day turnaround"
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$600 - $1,000",
      description: "Full business site great for small businesses, consultants, and creators.",
      features: [
        "3–5 pages (Home, About, Services, Contact, FAQ)",
        "Custom design elements",
        "Optimized for SEO (basic level)",
        "Contact form, image sliders, testimonials",
        "Turnaround: 5–7 days"
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$1,200 - $2,500+",
      description: "Next-level build targeting high-end clients, startups, and entrepreneurs who want standout stuff.",
      features: [
        "6–10 pages",
        "Full custom UI/UX design",
        "Premium SEO setup",
        "Advanced animations, blog integration, or booking systems",
        "Priority delivery + 1 month support"
      ],
      highlighted: false,
    }
  ];

  const addOns = [
    {
      name: "SEO Boost Package",
      price: "$150 - $500",
      description: "Keyword research, meta tags, Google indexing",
    },
    {
      name: "Blog Setup",
      price: "$100 - $250",
      description: "Complete blog integration with your website",
    },
    {
      name: "Speed Optimization",
      price: "$100",
      description: "Performance tuning for lightning-fast loading",
    },
    {
      name: "Monthly Maintenance Plan",
      price: "$50 - $150/month",
      description: "Regular updates, security patches, and content changes",
    },
    {
      name: "Copywriting",
      price: "$100 - $300",
      description: "Professional content writing (price depends on word count)",
    },
    {
      name: "Logo/Branding Pack",
      price: "$100 - $400",
      description: "Professional logo design and brand identity elements",
    },
    {
      name: "E-commerce Add-On",
      price: "$500 - $1,000",
      description: "Full online store functionality with payment processing",
    }
  ];

  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        description="Choose the plan that's right for your business needs."
      />
      
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden border ${
                  plan.highlighted
                    ? "border-blue-500 shadow-xl relative"
                    : "border-border shadow-sm"
                } hover:shadow-lg transition-shadow bg-card`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center text-sm font-medium py-1.5">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 ${plan.highlighted ? "pt-9" : ""}`}>
                  <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                  <div className="mt-4 text-center">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground text-center">{plan.description}</p>
                  
                  <div className="mt-6">
                    <Button
                      variant={plan.highlighted ? "gradient" : "outline"}
                      className="w-full rounded-full"
                      asChild
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-3 bg-gray-50 dark:bg-gray-900/40">
                  <p className="font-medium mb-4 text-center">What's included:</p>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Add-Ons Section */}
          <div className="mt-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2">
                <span className="inline-block">💎</span> Add-Ons & Extras
              </h2>
              <p className="text-center text-muted-foreground mb-10 text-lg">
                Enhance your website with these powerful upgrades
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg">{addon.name}</h3>
                  </div>
                  <p className="text-xl font-bold my-2 text-blue-600 dark:text-blue-400">{addon.price}</p>
                  <p className="text-sm text-muted-foreground flex-grow">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">Do you offer custom packages?</h3>
                  <p className="mt-2 text-muted-foreground">Yes! We understand every business is unique. Contact us to discuss your specific needs and we'll create a custom solution for you.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">How long does it take to build a website?</h3>
                  <p className="mt-2 text-muted-foreground">Turnaround times vary by package: Starter (3-5 days), Pro (5-7 days), and Premium (usually 1-2 weeks). We'll provide you with a specific timeline during our initial consultation.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">What's included in the support period?</h3>
                  <p className="mt-2 text-muted-foreground">Our support includes bug fixes, small updates, and answering any questions you may have about your website. Premium plans include 1 month of support, and we also offer extended monthly maintenance plans.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Contact us today to discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="mt-8">
              <Button
                variant="gradient"
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 