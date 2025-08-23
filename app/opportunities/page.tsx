"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ExternalLink, Calendar, Trophy } from "lucide-react"

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/10 to-destructive/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1
              className="text-5xl font-bold text-foreground mb-6 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Opportunities
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Discover exciting opportunities to showcase your skills, learn from industry experts, and advance your
              career in technology.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Google Gen AI Exchange Program */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl neon-border hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 neon-glow">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Google Gen AI Exchange Program</h3>
                  <p className="text-muted mb-6">
                    Join Google's prestigious Gen AI Exchange Program and learn cutting-edge artificial intelligence
                    technologies from industry experts. This program offers hands-on experience with the latest AI tools
                    and frameworks.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center text-sm text-muted">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Application Open</span>
                    </div>
                  </div>
                  <a
                    href="https://vision.hack2skill.com/event/genaiexchange?utm_source=hack2skill&utm_medium=homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium neon-border"
                  >
                    Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Smart India Hackathon */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-xl neon-border hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 neon-glow">
                  <Trophy className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Smart India Hackathon</h3>
                  <p className="text-muted mb-6">
                    India's biggest hackathon initiative by the Government of India. Solve real-world problems, showcase
                    your innovation, and compete with the brightest minds across the country for exciting prizes and
                    recognition.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center text-sm text-muted">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Registration Open</span>
                    </div>
                  </div>
                  <a
                    href="https://sih.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium neon-border"
                  >
                    Register Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* NXP Women in Tech Program */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 p-8 rounded-xl neon-border hover:shadow-lg hover:shadow-destructive/25 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0 neon-glow">
                  <Trophy className="h-6 w-6 text-destructive-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">NXP Women in Tech Program</h3>
                  <p className="text-muted mb-6">
                    Join NXP's Women in Tech Program designed to empower and support women in technology careers.
                    Connect with industry leaders, access mentorship opportunities, and advance your career in the
                    semiconductor and technology industry.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center text-sm text-muted">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Program Available</span>
                    </div>
                  </div>
                  <a
                    href="https://www.nxp.com/company/about-nxp/events/women-in-tech:WOMEN-IN-TECH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-destructive text-destructive-foreground px-6 py-3 rounded-lg hover:bg-destructive/80 transition-colors font-medium neon-border"
                  >
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-card p-8 rounded-xl neon-border">
            <h2
              className="text-2xl font-bold text-foreground mb-4 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Stay Updated
            </h2>
            <p className="text-muted mb-6">
              Don't miss out on new opportunities! Follow us on social media and join our community to get notified
              about upcoming hackathons, competitions, and career opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 font-medium">
                Join Our Community
              </a>
              <span className="text-muted">•</span>
              <a href="#" className="text-secondary hover:text-secondary/80 font-medium">
                Follow Updates
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
