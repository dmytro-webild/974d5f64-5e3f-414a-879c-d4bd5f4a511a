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

const upcomingEvents: Event[] = [
  {
    id: "1",    title: "Monthly Networking Brunch",    date: "February 15, 2025",    time: "10:00 AM - 12:00 PM",    location: "Dallas, TX",    description: "Join us for an intimate gathering of ambitious women. Connect over brunch, share experiences, and build meaningful relationships."
  },
  {
    id: "2",    title: "Women in Business Panel Discussion",    date: "February 28, 2025",    time: "6:00 PM - 8:00 PM",    location: "Downtown Dallas",    description: "Hear from successful entrepreneurs and leaders in our community. Q&A session and networking to follow."
  },
  {
    id: "3",    title: "Wellness & Mindfulness Workshop",    date: "March 8, 2025",    time: "9:00 AM - 11:00 AM",    location: "Dallas, TX",    description: "Join us for a rejuvenating session focused on wellness, meditation, and personal growth."
  },
  {
    id: "4",    title: "Exclusive Spring Gala",    date: "March 22, 2025",    time: "7:00 PM - 11:00 PM",    location: "Luxury Venue, Dallas",    description: "Our most anticipated event of the season. Celebrate with the entire community in an elevated evening of elegance and connection."
  },
  {
    id: "5",    title: "Career Development Masterclass",    date: "April 5, 2025",    time: "2:00 PM - 4:00 PM",    location: "Dallas, TX",    description: "Learn strategies for advancing your career, negotiating better, and achieving your professional goals."
  },
  {
    id: "6",    title: "Community Volunteer Day",    date: "April 19, 2025",    time: "9:00 AM - 1:00 PM",    location: "Dallas Community Center",    description: "Give back to our community together. We'll be volunteering with a local organization making a real impact."
  }
];

export default function EventsPage() {
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
            { name: "Events", id: "events" },
            { name: "Connect", id: "contact" }
          ]}
          button={{
            text: "Join the Circle",            href: "/signup"
          }}
        />
      </div>

      <div id="events" data-section="events" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-lg text-foreground/70">Join us for exclusive gatherings designed to connect, inspire, and elevate our community.</p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-card rounded-lg border border-foreground/10 p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-cta" />
                      <span className="text-sm font-semibold text-primary-cta">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-foreground/70 mb-4">{event.description}</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground/60 min-w-12">Time:</span>
                        <span className="text-foreground/70">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground/60 min-w-12">Location:</span>
                        <span className="text-foreground/70">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-primary-cta text-background font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg border border-foreground/10 text-center">
            <p className="text-foreground/70 mb-4">Don't see what you're looking for? Members receive exclusive event invitations throughout the year.</p>
            <a href="/signup" className="inline-block px-6 py-3 bg-secondary-cta text-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
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
                { label: "Events", href: "/events" },
                { label: "Join Us", href: "/signup" },
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