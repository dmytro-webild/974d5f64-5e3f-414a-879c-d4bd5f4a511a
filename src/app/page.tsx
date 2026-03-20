"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Heart, Sparkles } from "lucide-react";

export default function LandingPage() {
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
            { name: "About", id: "/about" },
            { name: "Connect", id: "contact" }
          ]}
          button={{
            text: "Become a Member",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Elevé Social Society"
          description="A community designed for women who want to connect, grow, and elevate every area of their lives. Created for ambitious women who value real connection and elevated experiences, our space brings together a select circle for meaningful conversations, unforgettable moments, and a lifestyle rooted in confidence, growth, and authenticity."
          slides={[]}
          buttons={[
            { text: "Join the Circle", href: "#contact" },
            { text: "Learn More", href: "/about" }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          logoContainerClassName="text-black"
          descriptionClassName="text-black"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="About Elevé Social Society"
          description="We are more than a social circle—we are a movement of women committed to authentic connection, personal excellence, and mutual elevation. Each gathering, each conversation, each moment is curated to help you grow, inspire, and thrive alongside women who truly understand your journey. Our community celebrates ambition, authenticity, and the power of sisterhood."
          tag="Our Mission"
          tagIcon={Heart}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          metrics={[
            { value: "300+", title: "Members" },
            { value: "Monthly", title: "Events" },
            { value: "100%", title: "Authentic" },
            { value: "Elevated", title: "Experiences" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Join Us"
          title="Become a Member Today"
          description="Connect with 400+ ambitious women at exclusive monthly events. Sign up to receive exclusive event invitations and member updates directly to your phone. Get a welcome message from our community the moment you join."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your phone number"
          buttonText="Join & Get Welcome Text"
          termsText="By joining, you agree to receive event updates and member communications via text message. We respect your privacy and promise elevated experiences."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Community",              items: [
                { label: "About Us", href: "/about" },
                { label: "Join Us", href: "#contact" },
                { label: "Events", href: "#" },
                { label: "Our Values", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Email", href: "mailto:hello@elevesocietydallas.com" },
                { label: "Contact", href: "#contact" },
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