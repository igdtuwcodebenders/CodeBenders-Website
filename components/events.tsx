"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Events() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)
  const targetDate = '2025-10-23T00:00:00+05:30'

  // --- COUNTDOWN LOGIC ---
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(
    +new Date(targetDate) > +new Date()
  )

  useEffect(() => {
    setIsClient(true)

    if (!isRegistrationOpen) return

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsRegistrationOpen(false)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isRegistrationOpen])

  const timerComponents = (Object.keys(timeLeft) as (keyof TimeLeft)[]).map(
    (interval) => (
      <div key={interval} className="mx-3 p-2">
        <span className="text-4xl font-extrabold block text-primary neon-glow-text">
          {timeLeft[interval].toString().padStart(2, "0")}
        </span>
        <span className="text-sm uppercase text-muted font-medium">{interval}</span>
      </div>
    )
  )

  // --- FILTERS AND EVENTS ---
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
  const filteredEvents =
    activeFilter === "All"
      ? allEvents
      : allEvents.filter((event) => event.type === activeFilter)

  return (
    <section id="events" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">

        {/* ---- Commit and Conquer Section ---- */}
        <div className="mb-20 text-center">
          <h2
            className="text-5xl font-bold text-foreground mb-8 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Events
          </h2>

          <div className="max-w-4xl mx-auto bg-background rounded-lg p-10 neon-border">
            <h3
              className="text-3xl font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Commit and Conquer
            </h3>
            <p className="text-lg text-muted font-medium tracking-wide mb-8">
              An Open Source Fest by <span className="text-primary font-semibold">CodeBenders</span>
            </p>

            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                <strong>Commit and Conquer</strong> is CodeBenders’ flagship open-source festival — a
                celebration of collaboration, creativity, and community. It unites passionate developers,
                designers, and innovators to build impactful solutions for real-world problems.
              </p>

              <p>
                This event isn’t just about coding — it’s about connecting, learning, and creating together.
                Through open-source contributions, participants embrace transparency, teamwork, and shared
                growth while transforming bold ideas into tangible results.
              </p>

              <p>
                Join the movement, make your mark, and help shape the future of technology — one commit at a
                time.
              </p>
            </div>

            {/* Countdown */}
            <div className="mt-8 mb-6 p-4 rounded-xl bg-primary/10 border border-primary/50">
              <p className="text-xl font-bold text-primary mb-2 uppercase tracking-widest">
                {isRegistrationOpen ? 'Registration Ends In' : 'Registration Closed'}
              </p>

              <div className="flex justify-center text-center text-foreground">
                {isClient ? (
                  isRegistrationOpen ? (
                    timerComponents
                  ) : (
                    <span className="text-2xl font-bold text-red-500">
                      The registration period has ended.
                    </span>
                  )
                ) : (
                  <span className="text-2xl font-bold text-primary/50">
                    Loading countdown...
                  </span>
                )}
              </div>
            </div>

            <a
              href="https://commit-and-conquer-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-all duration-200 neon-glow hover:shadow-primary/50 transform hover:-translate-y-1"
            >
              View Website →
            </a>
          </div>
        </div>

        {/* ---- General Events Section ---- */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-foreground mb-4 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Events
          </h2>
          <p className="text-lg text-muted">
            Explore all our recent and past events here!
          </p>
        </div>

        {/* Filters */}
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

        {/* Event Cards */}
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
