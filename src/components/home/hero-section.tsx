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
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30 animate-blob animation-delay-1000"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30 animate-blob animation-delay-3000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-30 animate-blob animation-delay-5000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">Professional Web Development</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
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
              className="mt-6 text-xl text-muted-foreground max-w-2xl"
            >
              Modern, responsive websites that attract customers and grow your business. We deliver high-performance sites designed for conversion.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-muted-foreground">Custom designs tailored to your brand</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-muted-foreground">SEO optimization for higher rankings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-muted-foreground">Lightning-fast performance</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                variant="gradient"
                onClick={() => router.push("/contact")}
                className="rounded-full text-lg px-8 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => router.push("/services")}
                className="rounded-full text-lg px-8 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-1 opacity-20 shadow-lg"></div>
              <div className="absolute z-20 inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Main laptop mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[90%] h-[75%] bg-gray-800 rounded-lg border-8 border-gray-700 shadow-xl overflow-hidden">
                    {/* Top bar of laptop screen */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-700 flex items-center px-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    
                    {/* Website mockup on laptop screen */}
                    <div className="absolute top-6 left-0 right-0 bottom-0 bg-white overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 flex items-center px-4">
                        <div className="w-full max-w-md mx-auto flex items-center">
                          <div className="h-6 w-24 bg-blue-500 rounded-md"></div>
                          <div className="ml-auto flex space-x-4">
                            <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
                            <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
                            <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-10 left-0 right-0 bottom-0 p-4">
                        <div className="h-16 w-3/4 bg-blue-600 rounded-lg mb-4"></div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="h-24 bg-gray-100 rounded-lg"></div>
                          <div className="h-24 bg-gray-100 rounded-lg"></div>
                          <div className="h-24 bg-gray-100 rounded-lg"></div>
                        </div>
                        <div className="h-20 bg-gray-50 rounded-lg mb-4 border border-gray-200"></div>
                        <div className="h-8 w-32 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop base */}
                  <div className="absolute bottom-[12%] w-[80%] h-[4%] bg-gray-700 rounded-b-xl shadow-xl"></div>
                </div>
                
                {/* Floating mobile mockup */}
                <div className="absolute right-6 top-[15%] w-[25%] h-[45%] bg-gray-800 rounded-2xl border-4 border-gray-700 shadow-2xl overflow-hidden rotate-6 animate-float z-30 hidden sm:block">
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gray-700"></div>
                  <div className="absolute top-4 left-0 right-0 bottom-0 bg-white">
                    <div className="p-2">
                      <div className="h-8 w-full bg-blue-500 rounded-md mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-20 w-full bg-gray-100 rounded-md mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Code floating element */}
                <div className="absolute -right-6 bottom-[25%] w-[35%] h-[25%] bg-black/80 backdrop-blur-sm text-green-400 p-3 rounded-lg font-mono text-xs z-20 shadow-xl border border-gray-700 rotate-3 animate-float-slow">
                  <div className="text-blue-400">function <span className="text-yellow-400">createAwesome</span>() {`{`}</div>
                  <div className="pl-3"><span className="text-green-300">return</span> <span className="text-purple-400">new</span> <span className="text-yellow-400">Website</span>();</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
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