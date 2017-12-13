import React from 'react'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.image}>
        <section>
          <p>
            <img alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default FeatureGrid
