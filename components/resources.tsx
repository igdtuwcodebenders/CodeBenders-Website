import { ArrowRight } from "lucide-react"

export function Resources() {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-foreground mb-6 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Resources & Opportunity
          </h2>
          <p className="text-lg text-muted max-w-4xl mx-auto">
            This section is dedicated to first years who have no idea from where to begin! For more such details visit{" "}
            <a href="/resources" className="text-primary hover:text-primary/80 underline neon-glow">
              Resources
            </a>{" "}
            and{" "}
            <a href="/opportunities" className="text-secondary hover:text-secondary/80 underline neon-glow">
              Opportunities
            </a>{" "}
            page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="/resources#dsa"
            className="group bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border hover:bg-primary/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                <span className="text-primary-foreground text-2xl font-bold">DS</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Data Structures & Algorithms</h3>
              <p className="text-muted mb-4">
                Master DSA with curated resources including Strivers A2Z sheet, NeetCode 150, and placement preparation
                materials.
              </p>
              <div className="flex items-center justify-center text-primary group-hover:text-primary/80 font-medium">
                Explore Resources <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          <a
            href="/resources#web-dev"
            className="group bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 neon-border hover:bg-secondary/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                <span className="text-secondary-foreground text-2xl font-bold">WD</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Web Development</h3>
              <p className="text-muted mb-4">
                Learn web development from scratch with HTML/CSS tutorials, CodeWithHarry courses, and MERN stack
                resources.
              </p>
              <div className="flex items-center justify-center text-secondary group-hover:text-secondary/80 font-medium">
                Explore Resources <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          <a
            href="/resources#machine-learning"
            className="group bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 neon-border hover:bg-accent/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                <span className="text-accent-foreground text-2xl font-bold">ML</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Machine Learning</h3>
              <p className="text-muted mb-4">
                Dive into ML with Kaggle courses, Coursera's deep learning specialization, and comprehensive video
                tutorials.
              </p>
              <div className="flex items-center justify-center text-accent group-hover:text-accent/80 font-medium">
                Explore Resources <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
