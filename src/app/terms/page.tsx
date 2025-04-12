import React from "react";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/section-title";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | BuiltByJack",
  description: "Learn about the terms and conditions governing your use of BuiltByJack services.",
};

export default function TermsOfServicePage() {
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
          title="Terms of Service"
          description="Last updated: January 1, 2025"
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of BuiltByJack's website, products, and services. Please read these Terms carefully, and contact us if you have any questions. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          
          <h2>2. Using Our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
          </p>

          <h2>3. Your BuiltByJack Account</h2>
          <p>
            You may need a BuiltByJack Account in order to use some of our Services. You are responsible for maintaining the security of your account and password. BuiltByJack cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
          </p>

          <h2>4. Privacy and Copyright Protection</h2>
          <p>
            BuiltByJack's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that BuiltByJack can use such data in accordance with our privacy policies.
          </p>
          <p>
            We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.
          </p>

          <h2>5. Your Content in our Services</h2>
          <p>
            Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
          </p>
          <p>
            When you upload, submit, store, send or receive content to or through our Services, you give BuiltByJack (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones.
          </p>

          <h2>6. Software in our Services</h2>
          <p>
            When a Service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available. Some Services may let you adjust your automatic update settings.
          </p>
          <p>
            BuiltByJack gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you by BuiltByJack as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by BuiltByJack, in the manner permitted by these terms.
          </p>

          <h2>7. Modifying and Terminating our Services</h2>
          <p>
            We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.
          </p>
          <p>
            You can stop using our Services at any time, although we'll be sorry to see you go. BuiltByJack may also stop providing Services to you, or add or create new limits to our Services at any time.
          </p>

          <h2>8. Our Warranties and Disclaimers</h2>
          <p>
            We provide our Services using reasonable skill and care. But there are certain things that we don't promise about our Services:
          </p>
          <p>
            OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER BUILTBYJACK NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON'T MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE SERVICES "AS IS".
          </p>

          <h2>9. Liability for our Services</h2>
          <p>
            WHEN PERMITTED BY LAW, BUILTBYJACK, AND BUILTBYJACK'S SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.
          </p>
          <p>
            TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF BUILTBYJACK, AND ITS SUPPLIERS AND DISTRIBUTORS, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO SUPPLYING YOU THE SERVICES AGAIN).
          </p>

          <h2>10. Business uses of our Services</h2>
          <p>
            If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify BuiltByJack and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys' fees.
          </p>

          <h2>11. About these Terms</h2>
          <p>
            We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We'll post notice of modifications to these terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately.
          </p>
          <p>
            If there is a conflict between these terms and the additional terms, the additional terms will control for that conflict. These terms control the relationship between BuiltByJack and you. They do not create any third party beneficiary rights.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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