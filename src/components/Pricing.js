import React from 'react'

export default ({ data }) => (
  <div>
    {data.map(price => (
      <div key={price.plan}>
        <section>
          <h4>{price.plan}</h4>
          <h2>${price.price}</h2>
          <p>{price.description}</p>
          <ul>{price.items.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
    ))}
  </div>
)
