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
      name: "Starter Site",
      price: "$299",
      description: "Perfect for side hustlers, solo service providers, or quick launches.",
      features: [
        "1-page scroll site (Home, About, Contact)",
        "Mobile-friendly & fast",
        "Contact form or booking link",
        "Basic SEO setup",
        "Delivered in 3 days"
      ],
      highlighted: false,
      badge: "Gets you in the game fast. Super lean, super clean."
    },
    {
      name: "Business Builder",
      price: "$499",
      description: "Best for small businesses that need a solid web presence.",
      features: [
        "Up to 3 pages (Home, Services, Contact)",
        "Mobile-first + performance optimized",
        "Contact form + Google Maps",
        "Basic SEO + social media links",
        "Free edits for 7 days after launch",
        "Delivered in 3–5 days"
      ],
      highlighted: true,
      badge: "Your best seller. Great value, solid results."
    },
    {
      name: "Growth Pro",
      price: "$899",
      description: "For businesses ready to look sharp and grow online.",
      features: [
        "Up to 6 pages (Home, About, Services, Blog, Contact, FAQ)",
        "Mobile + desktop optimization",
        "Speed & SEO performance tuned",
        "Basic analytics setup (Google Analytics)",
        "Newsletter/email capture integration",
        "14-day support after launch"
      ],
      highlighted: false,
      badge: "Looks premium, still affordable. This is your \"power user\" tier."
    }
  ];

  const addOns = [
    {
      name: "Additional Pages",
      price: "$99 per page",
      description: "Add more pages to any package (e.g., portfolio page, team page, testimonials, etc.).",
    },
    {
      name: "Logo Design",
      price: "$149",
      description: "Professional logo design with 3 concepts and unlimited revisions until you're satisfied.",
    },
    {
      name: "SEO Booster",
      price: "$199",
      description: "Advanced SEO setup with keyword research, meta tags, Schema markup, and Google Search Console configuration.",
    },
    {
      name: "Content Creation",
      price: "$99 - $249",
      description: "Professional copywriting for your website pages tailored to your brand voice and target audience.",
    },
    {
      name: "Priority Delivery",
      price: "$99",
      description: "Move to the front of the queue and get your website completed in 48 hours (availability permitting).",
    },
    {
      name: "Extended Support",
      price: "$49/month",
      description: "Ongoing support, regular backups, security updates, and up to 3 content edits per month.",
    },
    {
      name: "E-commerce Add-On",
      price: "$399",
      description: "Add a shop to your website with up to 25 products, secure checkout, and payment processing.",
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
                  
                  {plan.badge && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-sm text-center font-medium text-blue-600">{plan.badge}</p>
                    </div>
                  )}
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
                  <h3 className="text-lg font-semibold">How do I know which package is right for me?</h3>
                  <p className="mt-2 text-muted-foreground">Choose the Starter Site if you need something simple and quick. The Business Builder is our most popular option for established businesses. Select the Growth Pro if you're serious about growing your online presence with more content and features.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">What happens after I submit my order?</h3>
                  <p className="mt-2 text-muted-foreground">After you submit your order, we'll contact you within 24 hours to gather information about your business and requirements. Once we have everything we need, we'll begin work according to the timeline for your selected package.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">Do you offer custom packages?</h3>
                  <p className="mt-2 text-muted-foreground">Yes! These packages are our most popular configurations, but we can customize any package to meet your specific needs. Contact us to discuss your requirements and we'll create a custom solution just for you.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">What's your payment process?</h3>
                  <p className="mt-2 text-muted-foreground">We require a 50% deposit to begin work, with the remaining balance due upon completion before your website goes live. We accept credit/debit cards, bank transfers, and PayPal for your convenience.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">Can I update my website myself after it's built?</h3>
                  <p className="mt-2 text-muted-foreground">For simple content updates, we offer training to help you make changes yourself. For more complex changes, you can use our Extended Support plan or request changes on an as-needed basis at our standard hourly rate.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">What if I need more pages than my package includes?</h3>
                  <p className="mt-2 text-muted-foreground">No problem! You can add additional pages to any package for $99 per page. Just let us know what additional pages you need during the initial consultation.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold">Ready to Launch Your New Website?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Take the first step toward growing your business online. Get started today and have your new website in as little as 3 days!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Get Started Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 