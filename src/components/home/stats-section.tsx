"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Clock, Zap, Shield } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    value: 100,
    suffix: "%",
    title: "Client Focus",
    description: "Dedicated to your business success",
    icon: Check,
  },
  {
    value: 100,
    suffix: "%",
    title: "Delivery Promise",
    description: "We aim to complete every project on time",
    icon: Clock,
  },
  {
    value: 100,
    suffix: "%",
    title: "Modern Tech",
    description: "Using the latest web technologies",
    icon: Zap,
  },
  {
    value: 100,
    suffix: "%",
    title: "Satisfaction Goal",
    description: "Your satisfaction is our priority",
    icon: Shield,
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-10 border-t border-b border-secondary/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
                {inView ? (
                  <CountUp end={stat.value} duration={1.5} separator="," suffix={stat.suffix} />
                ) : (
                  "0" + stat.suffix
                )}
              </h3>
              <h4 className="text-lg font-semibold mt-2">{stat.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 