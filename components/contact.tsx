"use client"

import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("igdtuwcodebenders@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 bg-background font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2
            className="text-4xl font-bold text-foreground mb-2 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mb-4 shadow-lg shadow-primary/50"></div>
          <p className="text-xl text-muted">Follow Codebenders on Social Media Handles</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Branding and Social */}
          <div>
            <h3
              className="text-4xl font-bold text-primary mb-2 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              CODEBENDERS
            </h3>
            <p className="text-lg text-muted mb-8">Get Latest Updates on</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/codebenders_igdtuw/"
                className="w-12 h-12 border-2 border-secondary text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 neon-border hover:shadow-secondary/25"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://in.linkedin.com/company/codebenders"
                className="w-12 h-12 border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border hover:shadow-primary/25"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 text-secondary">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="text-lg text-muted">Technical Society at IGDTUW</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 text-primary">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <a href="mailto:igdtuwcodebenders@gmail.com" className="text-lg text-muted hover:text-foreground">
                  igdtuwcodebenders@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="px-2 py-1 bg-card text-muted text-sm rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 neon-border"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-primary/20">
          <p className="text-xl text-muted italic">
            <span className="text-3xl text-primary/40">"</span>
            Get back to work mode, show me the optimal code.
            <span className="text-3xl text-primary/40">"</span>
          </p>
        </div>
      </div>
    </section>
  )
}
