"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function Events() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filters = ["All", "Recent", "Past"]

  const recentEvents = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.21_01fc5c5f.jpg-xsaOITbWKx8hl29NiMedgsidIhTAp4.jpeg",
      alt: "Unlock Interview Success with Insider Tips - January 19th, 2025",
      type: "Recent",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.21_b51d2538.jpg-7XJE3OlTybS6SLhSvlXJejbtte2sv0.jpeg",
      alt: "Resume and Project Building Session - February 8th, 2025",
      type: "Recent",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.21_3de16577.jpg-yOF3tDavQGmflKq1PilNinccveCzUK.jpeg",
      alt: "How to Crack OA? From Dry Runs to Dream Runs - April 27th, 2025",
      type: "Recent",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.21_77e2b3c4.jpg-m4G1nCw21eBoY9pdknbIyzoke6Jsvx.jpeg",
      alt: "Road to Perfect 10/10 SGPA - January 25th, 2025",
      type: "Recent",
    },
  ]

  const pastEvents = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.20_862b641a.jpg-hBkMDRJS9WQzAMHQoMTQmkHDFHMYI2.jpeg",
      alt: "Interview Preparation Workshop - Past Event",
      type: "Past",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.46.20_2a00c533.jpg-iBQ7ekLVczYzrHCLqbpzN52ZjQ0X1u.jpeg",
      alt: "Find and Be Found - Extrovert Workshop - Past Event",
      type: "Past",
    },
  ]

  const allEvents = [...recentEvents, ...pastEvents]
  const filteredEvents = activeFilter === "All" ? allEvents : allEvents.filter((event) => event.type === activeFilter)

  return (
    <section id="events" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-foreground mb-4 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Upcoming Events
            </h2>
          </div>

          <div className="max-w-6xl mx-auto bg-background rounded-lg p-8 neon-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image placeholder on left */}
              <div className="aspect-[4/3] max-w-md mx-auto rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-20%20at%2018.45.59_69b40ba3.jpg-H0WV9UCUEs1szp72ZlbsEs6EvC2VOS.jpeg"
                  alt="Orientation Coming Soon - Stay Tuned for Updates"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content on right */}
              <div className="space-y-6">
                <blockquote className="text-xl italic text-muted border-l-4 border-primary pl-6 neon-border-left">
                  "We are each other's harvest; we are each other's business; we are each other's magnitude and bond."
                </blockquote>

                <div className="space-y-4 text-lg text-muted leading-relaxed">
                  <p>
                    {
                      "Get ready to kickstart an incredible coding adventure! Our upcoming orientation is your gateway to the world of Codebenders—a vibrant space where your curiosity sets the agenda."
                    }
                  </p>

                  <p>
                    {
                      "Whether you’re a beginner or a seasoned coder, there’s something here for everyone. Don’t miss the chance to ignite your tech passion and become a part of a community that codes, creates, and grows together. Join us, and let’s bend the limits of what’s possible!"
                    }
                  </p>

                  <p>It's your time to flaunt your skills in Codebenders and grow with us.</p>
                </div>

                <a
                  href="#"
                  className="inline-block bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-all duration-200 neon-glow hover:shadow-primary/50 transform hover:-translate-y-1"
                >
                  {"Apply Now"}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-foreground mb-4 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Events
          </h2>
          <p className="text-lg text-muted">All the Recent and past events' details can be found here!</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-background rounded-lg p-1 neon-border">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  activeFilter === filter
                    ? "bg-primary text-background neon-glow"
                    : "text-muted hover:text-primary hover:bg-primary/10",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg overflow-hidden neon-border hover:shadow-lg transition-all duration-300 cursor-pointer",
                event.type === "Recent" ? "aspect-square" : "aspect-[4/3]",
              )}
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              <img
                src={event.src || "/placeholder.svg"}
                alt={event.alt}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 bg-background"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
