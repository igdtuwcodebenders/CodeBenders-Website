export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/codebender-illustration.png"
              alt="Codebender developer illustration with coding brackets"
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          {/* Heading beside logo */}
          <div className="flex items-center">
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground neon-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Who are Codebenders?
            </h2>
          </div>
        </div>

        {/* Content below */}
        <div className="space-y-8">
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Codebenders is the technical society of IGDTUW. We help students learn about technological advancement and
              about the gateways to upcoming technologies. We strongly believe that learning about technology also
              improves our creativity and imagination. Codebenders believes in providing students with real-life
              experience with technology and helps them develop their practical skills. We organize monthly technical
              workshops to enhance your practical skills. We try to act as a bridge between theoretical knowledge and
              practical application.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center neon-border">
                  <span className="text-primary text-lg">😊</span>
                </div>
                <div className="text-3xl font-bold text-primary neon-glow">100+</div>
              </div>
              <h3 className="font-semibold text-foreground">Reach</h3>
              <p className="text-sm text-muted">
                Everytime almost 100+ students attend and get benefits from our sessions
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center neon-border">
                  <span className="text-secondary text-lg">📋</span>
                </div>
                <div className="text-3xl font-bold text-secondary neon-glow">6+</div>
              </div>
              <h3 className="font-semibold text-foreground">Sessions</h3>
              <p className="text-sm text-muted">
                Successfully organized 4+ sessions on placements preparations, project builiding and working towards
                more.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center neon-border">
                  <span className="text-accent text-lg">⏰</span>
                </div>
                <div className="text-3xl font-bold text-accent neon-glow">2+</div>
              </div>
              <h3 className="font-semibold text-foreground">Active</h3>
              <p className="text-sm text-muted">
                We are actively working towards helping students learn and grow for the last 2 year.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center neon-border">
                  <span className="text-destructive text-lg">🏆</span>
                </div>
                <div className="text-3xl font-bold text-destructive neon-glow">10+</div>
              </div>
              <h3 className="font-semibold text-foreground">Codebenders</h3>
              <p className="text-sm text-muted">
                A team of 10 Codebenders work towards organizing these fruitful sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
