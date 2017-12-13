import React from 'react'

export default ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article>
        <div>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)
