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
      {/* Why Choose a Brisbane Web Developer Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose a Brisbane Web Developer?</h2>
          <p className="text-lg mb-4">As a local Brisbane web development team, we understand the unique needs of Brisbane businesses. We deliver websites that not only look great but also perform in the local market, helping you connect with more customers across Brisbane and Southeast Queensland.</p>
          <p className="text-base text-muted-foreground">From Fortitude Valley to South Bank, New Farm to West End, we help businesses in every Brisbane suburb grow online.</p>
        </div>
      </section>
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      {/* Serving All Brisbane Suburbs Section */}
      <section className="bg-white py-10 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Serving All Brisbane Suburbs</h2>
          <p className="mb-4">We proudly serve businesses across Brisbane, including:</p>
          <p className="text-muted-foreground mb-4">Fortitude Valley, South Bank, New Farm, West End, Kangaroo Point, Spring Hill, Paddington, Milton, Woolloongabba, and more.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="/brisbane-web-development" className="text-blue-600 underline">Brisbane Web Development</a>
            <a href="/cheap-websites-brisbane" className="text-blue-600 underline">Cheap Websites Brisbane</a>
            <a href="/services/seo-brisbane" className="text-blue-600 underline">SEO Brisbane</a>
            <a href="/services/web-design-brisbane" className="text-blue-600 underline">Web Design Brisbane</a>
          </div>
        </div>
      </section>
    </>
  );
} 