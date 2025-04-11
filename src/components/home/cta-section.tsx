"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTASection = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-24 bg-grid-white/[0.2] bg-[length:30px_30px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-grid-white/[0.2] bg-[length:30px_30px]"></div>
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 top-1/3 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <div className="bg-background/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's build a website that represents your brand and drives results. Get in touch today for a free consultation.
            </p>
          </div>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              variant="gradient"
              onClick={() => router.push("/contact")}
              className="rounded-full text-lg px-8 w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/pricing")}
              className="rounded-full text-lg px-8 w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              No commitment required. Free consultation to discuss your needs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection; 