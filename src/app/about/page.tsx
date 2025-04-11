"use client";

import React from "react";
import SectionTitle from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Users, Award, Heart } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jack",
    role: "Founder & Developer",
    bio: "Jack is a skilled developer with a passion for creating beautiful, functional websites. He combines technical expertise with creative vision to deliver exceptional web experiences.",
    imageSrc: "/images/fb1f3d77-c70d-4caf-b595-7cb12c134073.png",
  },
];

const values = [
  {
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    icon: Briefcase,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, treating your goals as our own to achieve the best results.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do, from design to development.",
    icon: Award,
  },
  {
    title: "Passion",
    description: "We're genuinely passionate about creating amazing web experiences that help businesses succeed.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionTitle
          pretitle="About Us"
          title="We're Building the Future of Web Development"
          description="BuiltByJack combines artistic design with powerful technology to create websites that aren't just beautiful, but effective."
        />

        {/* Vision Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At BuiltByJack, we envision a future where every business, regardless of size, can have a powerful and effective web presence. We're making that future a reality today.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team combines expertise in design, development, and optimization to create websites that don't just look amazing—they drive results.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe that the best websites are those that understand and adapt to user needs. That's why we integrate cutting-edge technologies that create seamless user experiences.
            </p>
          </div>
          <div className="relative h-80 lg:h-96 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-black flex items-center justify-center">
              <div className="relative w-[350px] h-[200px]">
                <Image 
                  src="/images/839710a6-9f28-433d-bda7-dce3d6317746.png" 
                  alt="BuiltByJack Logo" 
                  fill
                  className="object-contain" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary/30 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">Meet The Team</h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Behind every great website is a dedicated developer committed to excellence.
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-background border rounded-xl overflow-hidden max-w-sm">
              <div className="aspect-square relative">
                <Image
                  src={teamMembers[0].imageSrc}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{teamMembers[0].name}</h3>
                <p className="text-blue-600 font-medium">{teamMembers[0].role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{teamMembers[0].bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your project.
          </p>
          <div className="mt-8 mb-10 flex justify-center">
            <div className="relative w-[220px] h-[120px]">
              <Image 
                src="/images/839710a6-9f28-433d-bda7-dce3d6317746.png" 
                alt="BuiltByJack Logo" 
                fill
                className="object-contain" 
                priority
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 