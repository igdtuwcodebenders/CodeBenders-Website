export function Testimonials() {
  const testimonials = [
    {
      name: "Ria Arora",
      role: "Ex-President & Codebender",
      image: "/placeholder.svg?height=96&width=96&text=RA",
      testimonial:
        "When I joined IGDTUW in my first year, I was looking for communities that aligned with my interests and could help me grow both personally and professionally. Codebenders turned out to be exactly what I needed. The society provided me with numerous opportunities to learn new technologies, work on exciting projects, and connect with like-minded individuals. Being part of Codebenders not only enhanced my technical skills but also helped me develop leadership qualities. The workshops, hackathons, and collaborative projects were instrumental in shaping my career path. I'm grateful for the experiences and friendships I gained through this amazing community.",
    },
    {
      name: "Komal Kirti",
      role: "Ex-President & Codebender",
      image: "/placeholder.svg?height=96&width=96&text=KK",
      testimonial:
        "Codebenders has been an important part of my four years journey in IGDTUW. It provided me with a platform to explore my interests in technology and programming. Through various workshops and events organized by the society, I was able to learn new programming languages, frameworks, and development methodologies. The collaborative environment fostered creativity and innovation, allowing me to work on projects that I'm truly proud of. The mentorship and guidance I received from seniors and peers helped me navigate through challenges and grow as a developer. Codebenders is more than just a technical society; it's a family that supports and encourages each member to reach their full potential.",
    },
    {
      name: "Pallavi Bishnoi",
      role: "Ex-President & Codebender",
      image: "/placeholder.svg?height=96&width=96&text=PB",
      testimonial:
        "CodeBenders has been an essential part of my college life and has significantly contributed to my personal and professional growth. The society provided me with countless opportunities to learn, experiment, and implement new technologies. From organizing workshops to participating in hackathons, every experience was enriching and educational. The supportive community of CodeBenders helped me build confidence in my technical abilities and encouraged me to take on leadership roles. The skills I developed and the connections I made through this society have been invaluable in my career journey. I highly recommend joining CodeBenders to anyone who wants to enhance their technical skills while being part of an amazing community.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-foreground mb-4 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Testimonials
          </h2>
          <p className="text-xl text-muted">Hear from the Alumnus & Ex-Codebenders!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg shadow-lg neon-border hover:shadow-primary/25 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30"
                />
                <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                <p className="text-primary font-medium">{testimonial.role}</p>
              </div>
              <p className="text-muted leading-relaxed text-sm">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
