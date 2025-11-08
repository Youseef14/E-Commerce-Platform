import React from 'react'
import Button from '../components/Button'

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-beige">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Radical Transparency.<br />Exceptional Quality.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            We believe in doing things differently. From our ethical factories to our sustainable materials,
            every decision is made with transparency and quality in mind.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Our Mission</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                We're on a mission to prove that you don't have to choose between style and ethics.
                Every piece we create is designed to last, made with sustainable materials, and
                produced in factories that treat workers fairly.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We believe that when you know where your clothes come from and how they're made,
                you can feel good about what you wear.
              </p>
            </div>
            <div 
              className="aspect-[4/3] bg-neutral-100 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-neutral-300 leading-relaxed">
                We share the true cost of our products—from materials to labor to transportation.
                No secrets, no markups, just honest pricing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-neutral-300 leading-relaxed">
                We choose materials that are better for the planet, from organic cotton to
                recycled polyester, and we're always looking for ways to reduce our impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-neutral-300 leading-relaxed">
                We design timeless pieces that are built to last. Every stitch, seam, and
                fabric is carefully considered to ensure exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Our Factories</h2>
            <p className="text-neutral-600 leading-relaxed">
              We partner with the world's best ethical factories. Each one is vetted for fair wages,
              safe working conditions, and environmental responsibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-beige p-8">
              <h3 className="text-xl font-semibold mb-3">Italy</h3>
              <p className="text-neutral-600 mb-4">
                Our premium fabrics and outerwear are crafted in family-owned factories in northern Italy,
                where artisans have perfected their craft over generations.
              </p>
              <a href="#" className="text-sm font-medium hover:text-neutral-600">
                Learn More →
              </a>
            </div>
            <div className="bg-beige p-8">
              <h3 className="text-xl font-semibold mb-3">Portugal</h3>
              <p className="text-neutral-600 mb-4">
                Our knitwear and basics are produced in modern, sustainable facilities in Portugal,
                known for their commitment to quality and worker welfare.
              </p>
              <a href="#" className="text-sm font-medium hover:text-neutral-600">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-beige">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Join Our Mission</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Every purchase supports ethical manufacturing and sustainable fashion.
            Together, we can make a difference.
          </p>
          <Button size="lg">Shop Now</Button>
        </div>
      </section>
    </div>
  )
}

export default About
