"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../ui/section-title";
import { 
  Layout, 
  Zap, 
  Smartphone, 
  LineChart 
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Modern Design",
    description:
      "Clean, professional designs that make your business stand out from the competition.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimized websites that load quickly and provide a smooth user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Websites that look great on all devices, from desktops to smartphones.",
  },
  {
    icon: LineChart,
    title: "SEO Ready",
    description:
      "Built with search engines in mind to help improve your visibility online.",
  },
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle
          pretitle="Our Services"
          title="Building Better Web Experiences"
          description="We specialize in creating fast, responsive websites with modern designs."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="pl-2 pt-2">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 