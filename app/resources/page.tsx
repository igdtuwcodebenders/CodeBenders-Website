"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1
              className="text-5xl font-bold text-foreground mb-6 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Resources
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Everything you need to kickstart your coding journey. From learning resources to career opportunities,
              we've got you covered.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
          {/* Programming Languages */}
          <div id="programming-languages">
            <h2
              className="text-3xl font-bold text-foreground mb-8 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Programming Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">C++</h3>
                <a
                  href="https://youtu.be/QesotfZQmT8?si=USE-d_Edq1W0lbZi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  C++ Tutorial <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Python</h3>
                <a
                  href="https://www.kaggle.com/learn/python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  Kaggle Python Course <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Java</h3>
                <a
                  href="https://youtu.be/eIrMbAQSU34?si=pUp1YMqAPeMviFE9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  Java Tutorial <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Data Structures and Algorithms */}
          <div id="dsa">
            <h2
              className="text-3xl font-bold text-foreground mb-8 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Data Structures and Algorithms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Strivers A2Z Sheet</h3>
                <a
                  href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  Complete DSA Course <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">NeetCode 150</h3>
                <a
                  href="https://neetcode.io/practice?tab=neetcode150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  Practice Problems <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">SWE Placement Preparation</h3>
                <a
                  href="https://github.com/inofficialamanjha/SWE-Placement-Preparation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 underline"
                >
                  GitHub Repository <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div id="machine-learning">
            <h2
              className="text-3xl font-bold text-foreground mb-8 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Machine Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Intro to Machine Learning</h3>
                <a
                  href="https://www.kaggle.com/learn/intro-to-machine-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 underline"
                >
                  Kaggle ML Course <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Deep Learning Specialization</h3>
                <a
                  href="https://www.coursera.org/specializations/deep-learning?action=enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 underline"
                >
                  Coursera Course <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Machine Learning One Shot</h3>
                <a
                  href="https://youtu.be/JxgmHe2NyeY?si=K0FgVAozLYpUtCgv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 underline"
                >
                  YouTube Tutorial <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div id="web-dev">
            <h2
              className="text-3xl font-bold text-foreground mb-8 neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Web Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">HTML and CSS</h3>
                <a
                  href="https://youtu.be/mU6anWqZJcc?si=bcovNPhTLmsRPwGd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 underline"
                >
                  Complete Tutorial <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">CodeWithHarry Course</h3>
                <a
                  href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=FwCA8KMuHchXNDdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 underline"
                >
                  YouTube Playlist <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 neon-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">CodeHelp MERN Stack Course</h3>
                <a
                  href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=T_6FvHG9A5B76TLT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 underline"
                >
                  YouTube Playlist <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
