"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Instagram } from "lucide-react";

export default function AboutPage() {
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
            { name: "Connect", id: "contact" }
          ]}
          button={{
            text: "Become a Member",            href: "#contact"
          }}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="About Elevé Social Society"
          description="Founded in 2024, Elevé Social Society was born from a vision to create a meaningful space where ambitious women can connect authentically, grow together, and celebrate their journeys. We are more than a social circle—we are a movement committed to empowerment, excellence, and the transformative power of sisterhood.

Our community brings together women from diverse backgrounds and industries, united by shared values of authenticity, ambition, and mutual elevation. Every gathering, every conversation, and every moment is carefully curated to inspire growth, foster genuine connections, and create unforgettable experiences.

We celebrate the woman who knows her worth, the entrepreneur building her empire, the professional breaking barriers, and the visionary creating change. Join us as we redefine what it means to elevate—together."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ajz6WLUDj1uOeBrQGW186GEG84/uploaded-1773872793499-jjgn0b1w.png"
          imageAlt="Elevé Social Society company description and values"
          useInvertedBackground={false}
          buttons={[
            { text: "Instagram", href: "https://instagram.com", onClick: undefined },
            { text: "TikTok", href: "https://tiktok.com", onClick: undefined }
          ]}
          buttonAnimation="slide-up"
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
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "Email", href: "mailto:hello@elevesocietydallas.com" },
                { label: "Contact", href: "#contact" }
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