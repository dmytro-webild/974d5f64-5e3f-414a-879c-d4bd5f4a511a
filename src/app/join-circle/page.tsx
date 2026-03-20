"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Input from '@/components/form/Input';
import ButtonElasticEffect from '@/components/button/ButtonElasticEffect/ButtonElasticEffect';
import { useState } from 'react';
import { Sparkles } from "lucide-react";

export default function JoinCirclePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Elevé Social Society"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "about" },
            { name: "Events", id: "events" },
            { name: "Connect", id: "contact" }
          ]}
          button={{
            text: "Back to Home",            href: "/"
          }}
        />
      </div>

      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Join the Circle</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Become a Member
            </h1>
            <p className="text-lg text-foreground/70">
              Join our exclusive community of ambitious women and get access to monthly events, networking opportunities, and authentic connections.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <Input
                value={formData.firstName}
                onChange={(value) => setFormData({ ...formData, firstName: value })}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <Input
                value={formData.lastName}
                onChange={(value) => setFormData({ ...formData, lastName: value })}
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input
                value={formData.phoneNumber}
                onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                placeholder="Enter your phone number"
                type="tel"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="Enter your email address"
                type="email"
                required
              />
            </div>

            <ButtonElasticEffect
              text="Join the Circle"
              type="submit"
            />
          </form>

          <p className="text-center text-sm text-foreground/60">
            By joining, you agree to receive event updates and member communications. We respect your privacy and promise elevated experiences.
          </p>
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Community",              items: [
                { label: "About Us", href: "/#about" },
                { label: "Join Us", href: "/join-circle" },
                { label: "Events", href: "/events" },
                { label: "Our Values", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Email", href: "mailto:hello@elevesocietydallas.com" },
                { label: "Contact", href: "/#contact" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Membership Agreement", href: "#" },
                { label: "Code of Conduct", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Elevé Social Society. All rights reserved. A community for ambitious Dallas women."
        />
      </div>
    </ThemeProvider>
  );
}