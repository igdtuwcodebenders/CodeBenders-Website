"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1
              className="text-4xl font-bold text-foreground mb-6 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Our Team
            </h1>
            <p className="text-lg text-muted mb-12">Meet the amazing team behind Codebenders!</p>

            {/* President Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-6 underline decoration-2 underline-offset-4">
                President
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                  <img
                    src="/anshika-president.png"
                    alt="Anshika Arora - President"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Anshika Arora</h3>
              </div>
            </div>

            {/* Vice Presidents Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Vice Presidents
              </h2>
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
                  <h3 className="text-lg font-semibold text-foreground">Sonam Kumari</h3>
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
                  <h3 className="text-lg font-semibold text-foreground">Divya Sharma</h3>
                </div>
              </div>
            </div>

            {/* General Secretary and Leads Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                General Secretary and Leads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Akanksha - Tech Lead */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/akanksha-tech-lead.png"
                      alt="Akanksha - Tech Lead"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Akanksha (Tech Lead)</h3>
                </div>

                {/* Sanjana - Outreach Lead */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/sanjana-outreach-lead.png"
                      alt="Sanjana - Outreach Lead"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Sanjana (Outreach Lead)</h3>
                </div>

                {/* Aditi Goel - General Secretary */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/aditi-general-secretary.png"
                      alt="Aditi Goel - General Secretary"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Aditi Goel (General Secretary)</h3>
                </div>
              </div>
            </div>

            {/* Tech Cores Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Tech Cores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Lavanya Sharma */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/lavanya-sharma-photo.png"
                      alt="Lavanya Sharma - Tech Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Lavanya Sharma</h3>
                </div>

                {/* Adharika Mahajan */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/adharika-mahajan-photo.png"
                      alt="Adharika Mahajan - Tech Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Adharika Mahajan</h3>
                </div>
              </div>
            </div>

            {/* Content Cores Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Content Cores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Tanishka Bhatti */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/tanishka-bhatti-photo.png"
                      alt="Tanishka Bhatti - Content Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Tanishka Bhatti</h3>
                </div>

                {/* Harshita Bhardwaj */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/harshita-bhardwaj-photo.png"
                      alt="Harshita Bhardwaj - Content Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Harshita Bhardwaj</h3>
                </div>
              </div>
            </div>

            {/* Design Cores Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Design Cores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Yoshita Singhal */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/yoshita-singhal-photo.png"
                      alt="Yoshita Singhal - Design Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Yoshita Singhal</h3>
                </div>

                {/* Drishti Chaudhary */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/drishti-chaudhary-photo.png"
                      alt="Drishti Chaudhary - Design Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Drishti Chaudhary</h3>
                </div>
              </div>
            </div>

            {/* Event Management Cores Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                Event Management Cores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Srishti */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/srishti-photo.png"
                      alt="Srishti - Event Management Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Srishti</h3>
                </div>

                {/* Kajal Kumari */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/kajal-kumari-photo.png"
                      alt="Kajal Kumari - Event Management Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Kajal Kumari</h3>
                </div>
              </div>
            </div>

            {/* PR Cores Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8 underline decoration-2 underline-offset-4">
                PR Cores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Aarti */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img src="/aarti-photo.png" alt="Aarti - PR Core" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Aarti</h3>
                </div>

                {/* Harshita Tanwar */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg bg-muted flex items-center justify-center">
                    <img
                      src="/harshita-tanwar-photo.png"
                      alt="Harshita Tanwar - PR Core"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Harshita Tanwar</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
