export function Recruitments() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-foreground mb-12 neon-glow"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Recruitments
        </h2>

        <blockquote className="text-xl italic text-muted mb-8 border-l-4 border-primary pl-6 neon-border-left">
          "We are each other's harvest; we are each other's business; we are each other's magnitude and bond."
        </blockquote>

        <div className="space-y-6 text-lg text-muted leading-relaxed mb-12">
          <p>Finally, the wait is over! CODEBENDERS is recruiting members</p>

          <p>
            If you feel you want to contribute to society, if you want to show your potential and grow with CODEBENDERS,
            this is the time, you can apply here and become a valuable member of CODEBENDERS.
          </p>

          <p>It's your time to flaunt your skills in Codebenders and grow with us.</p>

          <p className="font-semibold text-secondary neon-glow">Deadline: 5th Dec, 11:59PM</p>
        </div>

        <a
          href="#"
          className="inline-block bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-all duration-200 neon-glow hover:shadow-primary/50 transform hover:-translate-y-1"
        >
          Apply Here
        </a>
      </div>
    </section>
  )
}
