import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center group h-16"
            >
              <div className="relative w-[240px] h-16">
                <Image 
                  src="/images/839710a6-9f28-433d-bda7-dce3d6317746.png" 
                  alt="BuiltByJack Logo" 
                  fill
                  className="object-contain hover:opacity-90 transition-opacity" 
                  priority
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Transforming ideas into exceptional web experiences. 
              We build websites that look amazing and drive results.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start hover-lift">
                <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <a href="tel:+61406878720" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  0406 878 720
                </a>
              </div>
              <div className="flex items-start hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:builtbyjack.com@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  builtbyjack.com@gmail.com
                </a>
              </div>
              <div className="flex items-start hover-lift">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Brisbane, Australia
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:ml-8 lg:ml-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:ml-4 lg:ml-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:ml-4 lg:ml-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-blue-100 dark:border-blue-900/20 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} BuiltByJack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 