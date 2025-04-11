import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming ideas into exceptional web experiences. 
              We build websites that look amazing and drive results.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@builtbyjack.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@builtbyjack.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <a href="tel:+61400000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +61 400 000 000
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Brisbane, Australia
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com/builtbyjack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/builtbyjack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com/builtbyjack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/builtbyjack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/builtbyjack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Services</h3>
            <ul className="mt-4 space-y-3">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Company</h3>
            <ul className="mt-4 space-y-3">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Resources</h3>
            <ul className="mt-4 space-y-3">
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

        <div className="mt-12 border-t border-blue-100 dark:border-blue-900/20 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} BuiltByJack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 