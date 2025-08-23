"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Events } from "@/components/events"
import { Resources } from "@/components/resources"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <section id="team" className="py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2
              className="text-4xl font-bold text-foreground mb-6 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Leadership Team
            </h2>
            <p className="text-lg text-muted mb-12">Meet our amazing leadership team!</p>

            {/* President Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-6 underline decoration-2 underline-offset-4">
                President
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                  <img
                    src="/anshika-president.png"
                    alt="Anshika Arora - President"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Anshika Arora</h4>
              </div>
            </div>

            {/* Vice Presidents Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Vice Presidents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Sonam Kumari */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                    <img
                      src="/sonam-vp.png"
                      alt="Sonam Kumari - Vice President"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Sonam Kumari</h4>
                </div>

                {/* Divya Sharma */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                    <img
                      src="/divya-vp.png"
                      alt="Divya Sharma - Vice President"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Divya Sharma</h4>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/team"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium neon-glow"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Meet Our Full Team
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Events />
        <Resources />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
