import React from "react";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import StatsSection from "@/components/home/stats-section";
import CTASection from "@/components/home/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuiltByJack - Custom Website Development",
  description: "We build stunning, high-performing websites. From design to development, we create web experiences that drive results.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </>
  );
} 