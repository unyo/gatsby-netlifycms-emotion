import React from 'react'

export default ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, i) => (
      <article key={i}>
        <div>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)
