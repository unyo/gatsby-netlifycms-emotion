import React from 'react'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h2>{title}</h2>
                </div>
                <div>
                  <div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div>
                  <div>
                    <h3>{main.heading}</h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <article>
                          <img src={main.image1.image} alt={main.image1.alt} />
                        </article>
                      </div>
                      <div>
                        <article>
                          <img src={main.image2.image} alt={main.image2.alt} />
                        </article>
                      </div>
                    </div>
                    <div>
                      <article>
                        <img src={main.image3.image} alt={main.image3.alt} />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div />
                <h2>{pricing.heading}</h2>
                <p>{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
