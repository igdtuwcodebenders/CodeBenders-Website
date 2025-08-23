export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden pt-20">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        {/* Animated Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric Neon Shapes */}
        <div className="absolute top-32 left-16 w-1 h-20 bg-primary shadow-lg shadow-primary/50 animate-pulse"></div>
        <div
          className="absolute top-48 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-secondary shadow-lg shadow-secondary/50 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-1 h-20 bg-primary shadow-lg shadow-primary/50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-12 w-20 h-1 bg-accent shadow-lg shadow-accent/50 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-12 w-16 h-1 bg-destructive shadow-lg shadow-destructive/50 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-1000 neon-glow"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Hi, <span className="text-primary">Codebenders</span> here!
        </h1>

        <p
          className="text-xl text-muted max-w-2xl animate-in fade-in slide-in-from-bottom duration-1000 delay-300 leading-relaxed"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Welcome to the <span className="text-secondary">Technical Society</span> at IGDTUW. Join us in our{" "}
          <span className="text-accent">coding journey</span> into the future!
        </p>

        {/* Futuristic CTA Button */}
        <button
          className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25 neon-border animate-in fade-in slide-in-from-bottom duration-1000 delay-500"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          ENTER THE MATRIX
        </button>
      </div>
    </section>
  )
}
