"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Calendar } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Monthly Networking Brunch',
      date: 'February 15, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'The Joule, Downtown Dallas',
      description: 'Join us for an intimate brunch where we connect with fellow members, share stories, and celebrate our collective ambitions.'
    },
    {
      id: '2',
      title: 'Wellness & Mentorship Circle',
      date: 'February 22, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'The Statler Hotel, Dallas',
      description: 'A transformative evening dedicated to personal growth, wellness practices, and meaningful mentorship conversations.'
    },
    {
      id: '3',
      title: 'Women Entrepreneurs Summit',
      date: 'March 8, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Renaissance Dallas, Uptown',
      description: 'Our flagship annual event featuring keynote speakers, panel discussions, and networking opportunities with industry leaders.'
    },
    {
      id: '4',
      title: 'Arts & Culture Evening',
      date: 'March 16, 2024',
      time: '7:00 PM - 9:30 PM',
      location: 'Dallas Museum of Art',
      description: 'Experience an exclusive evening of art, culture, and refined conversation in one of Dallas's most prestigious venues.'
    },
    {
      id: '5',
      title: 'Spring Garden Soirée',
      date: 'April 5, 2024',
      time: '5:00 PM - 8:00 PM',
      location: 'The Arboretum at UT Dallas',
      description: 'Celebrate the season with an elegant garden gathering, featuring curated experiences and elevated dining.'
    },
    {
      id: '6',
      title: 'Book Club & Wine Tasting',
      date: 'April 18, 2024',
      time: '6:30 PM - 8:30 PM',
      location: 'Private Venue, Highland Park',
      description: 'Discuss this month's selection while enjoying curated wines and connecting with fellow members over shared interests.'
    }
  ];

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
            text: "Join the Circle",            href: "/join-circle"
          }}
        />
      </div>

      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Upcoming Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Events
            </h1>
            <p className="text-lg text-foreground/70">
              Discover exclusive gatherings, networking opportunities, and elevated experiences designed for our community members.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors duration-300 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-foreground/70 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-medium">{event.date}</p>
                          <p className="text-foreground/60">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent font-medium mt-0.5">📍</span>
                        <p className="text-foreground/70">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-lg bg-card/50 border border-foreground/10 text-center">
            <p className="text-foreground/70 mb-4">
              Interested in attending our events? Join our community to receive exclusive invitations.
            </p>
            <a
              href="/join-circle"
              className="inline-block px-8 py-3 bg-primary-cta text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Become a Member
            </a>
          </div>
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