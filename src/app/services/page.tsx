"use client";

import React from "react";
import PageHeader from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Layout, 
  Smartphone, 
  LineChart, 
  Search, 
  ShoppingCart,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Layout,
      title: "Website Design",
      description: "Professional, modern designs that create a strong first impression and reflect your brand identity.",
      features: [
        "Custom design solutions",
        "Responsive layouts for all devices",
        "User experience optimization",
        "Brand-focused visuals"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Clean, efficient code that ensures your website performs flawlessly across all browsers and devices.",
      features: [
        "Frontend development",
        "Backend development",
        "CMS integration",
        "Performance optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Fully responsive websites that provide an excellent user experience on smartphones and tablets.",
      features: [
        "Touch-friendly interfaces",
        "Fast mobile loading times",
        "Responsive images and media",
        "Mobile-specific features"
      ]
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      description: "Speed enhancements to ensure your website loads quickly and runs smoothly for all users.",
      features: [
        "Core Web Vitals improvement",
        "Image optimization",
        "Code minification",
        "Resource caching"
      ]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Search engine optimization to improve your visibility online and attract more organic traffic.",
      features: [
        "Keyword research and strategy",
        "On-page SEO implementation",
        "Technical SEO optimization",
        "Regular performance tracking"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Online shopping experiences that convert visitors into customers and grow your business.",
      features: [
        "Product catalog setup",
        "Shopping cart integration",
        "Payment gateway setup",
        "Order management systems"
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Professional web design and development services to help your business thrive online."
      />
      
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 