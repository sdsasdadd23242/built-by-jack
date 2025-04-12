import React from "react";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/section-title";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BuiltByJack",
  description: "Learn about how we collect, use, and protect your personal information at BuiltByJack.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
        
        <SectionTitle
          pretitle="Legal"
          title="Privacy Policy"
          description="Last updated: January 1, 2025"
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At BuiltByJack ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and explains your privacy rights and how the law protects you.
          </p>
          
          <h2>2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you, grouped as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>

          <h2>3. How We Collect Your Data</h2>
          <p>
            We collect data from and about you through:
          </p>
          <ul>
            <li><strong>Direct interactions</strong> – You may provide Identity and Contact Data by filling in forms or by communicating with us by post, phone, email, or otherwise.</li>
            <li><strong>Automated technologies or interactions</strong> – As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
            <li><strong>Third parties or publicly available sources</strong> – We may receive personal data about you from third parties and public sources.</li>
          </ul>

          <h2>4. How We Use Your Data</h2>
          <p>
            We will only use your personal data when permitted by law. Common uses include:
          </p>
          <ul>
            <li>To perform a contract we're about to enter into or have entered into with you.</li>
            <li>Where it's necessary for our legitimate interests (or those of a third party) and your rights do not override those interests.</li>
            <li>To comply with a legal obligation.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal data from unauthorized access, use, alteration, or disclosure. Access to your data is limited to employees, agents, contractors, and third parties who need to know for business purposes.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes we collected it for, including to satisfy legal, regulatory, tax, accounting, or reporting obligations.
          </p>

          <h2>7. Your Legal Rights</h2>
          <p>
            You have rights under data protection laws, including the right to:
          </p>
          <ul>
            <li>Request access to your data</li>
            <li>Request correction or deletion</li>
            <li>Object to or restrict processing</li>
            <li>Request transfer of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may include links to third-party websites, plug-ins, and applications. Clicking those links may allow third parties to collect or share data. We are not responsible for their privacy practices.
          </p>

          <h2>9. Cookies</h2>
          <p>
            You can configure your browser to refuse all or some cookies or to alert you when websites use them. Disabling cookies may impact website functionality.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> builtbyjack.com@gmail.com<br />
            <strong>Phone:</strong> 0406 878 720<br />
            <strong>Location:</strong> Brisbane, Australia
          </p>
        </div>
      </div>
    </div>
  );
} 