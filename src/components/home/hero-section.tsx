"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration - simplified */}
      <div className="absolute inset-0 z-0 opacity-60 md:opacity-100">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 -left-4 w-48 md:w-96 h-48 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="absolute top-0 -right-4 w-48 md:w-96 h-48 md:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="absolute -bottom-8 left-20 w-48 md:w-96 h-48 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:pr-8 lg:pr-12"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">Professional Web Development</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Brand With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                AI-Powered
              </span>{" "}
              Websites
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Modern, responsive websites that attract customers and grow your business. We deliver high-performance sites designed for conversion.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-4 md:mt-6 space-y-3 md:space-y-4"
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">Custom designs tailored to your brand</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">SEO optimization for higher rankings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">Lightning-fast performance</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-6"
            >
              <Button 
                size="lg" 
                variant="gradient"
                onClick={() => router.push("/contact")}
                className="rounded-full text-base md:text-lg px-6 md:px-10 py-2.5 md:py-3.5 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => router.push("/services")}
                className="rounded-full text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Modern abstract design element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mt-6 md:mt-0 md:ml-8 lg:ml-12"
          >
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-2 opacity-20 shadow-lg"></div>
                <div className="absolute z-20 inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src="/images/839710a6-9f28-433d-bda7-dce3d6317746.png"
                      alt="Affordable web design in Brisbane - BuiltByJack Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full">
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,74.7C840,64,960,32,1080,16C1200,0,1320,0,1380,0L1440,0L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 