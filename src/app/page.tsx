import React from "react";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import StatsSection from "@/components/home/stats-section";
import CTASection from "@/components/home/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Development in Brisbane | BuiltByJack",
  description: "Brisbane's trusted provider of affordable, high-quality websites. Get a professional website at competitive prices without compromising on quality or performance.",
  keywords: ["cheap websites Brisbane", "affordable web design Brisbane", "budget website development Brisbane", "cost-effective web solutions", "Brisbane web developer"],
  alternates: {
    canonical: "https://builtbyjack.com"
  }
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