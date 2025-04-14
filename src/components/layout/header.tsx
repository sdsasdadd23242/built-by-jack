"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Button - Now on Left Side */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-secondary/70 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
          
          {/* Clean, centered site name instead of logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BuiltByJack
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                } after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all hover:after:w-full ${
                  pathname === link.href ? "after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="gradient"
              onClick={() => router.push("/contact")}
              className="rounded-full px-6 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Empty div for mobile to maintain layout */}
          <div className="md:hidden w-9"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-background/98 backdrop-blur-md py-8 px-6 overflow-y-auto z-50 border-t"
        >
          <div className="flex justify-center mb-8">
            <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BuiltByJack
            </span>
          </div>
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-primary text-center ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="gradient"
              onClick={() => {
                router.push("/contact");
                setMobileMenuOpen(false);
              }}
              className="w-full rounded-full py-4 text-base font-medium mt-4"
            >
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 