"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Instagram, Music } from "lucide-react";

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
            { name: "About", id: "about" },
            { name: "Connect", id: "contact" }
          ]}
          button={{
            text: "Become a Member",            href: "#contact"
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Elevé Social Society"
          description={[
            "We are more than a social circle—we are a movement of women committed to authentic connection, personal excellence, and mutual elevation. Each gathering, each conversation, each moment is curated to help you grow, inspire, and thrive alongside women who truly understand your journey.",            "Our community celebrates ambition, authenticity, and the power of sisterhood. Founded in 2024, Elevé Social Society brings together ambitious women for meaningful conversations, unforgettable moments, and a lifestyle rooted in confidence, growth, and authentic connection."
          ]}
          useInvertedBackground={false}
          showBorder={false}
        />
      </div>

      <div id="social" data-section="social" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '2rem' }}>Connect With Us</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-cta)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-cta)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Music size={20} />
              <span>TikTok</span>
            </a>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--foreground)', marginTop: '2rem' }}>Founded in 2024</p>
          <img
            src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ajz6WLUDj1uOeBrQGW186GEG84/uploaded-1773872793499-jjgn0b1w.png"
            alt="Elevé Social Society"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '2rem', borderRadius: '8px' }}
          />
        </div>
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