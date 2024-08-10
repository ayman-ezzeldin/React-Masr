import './Popular.css'
import React from 'react'
import data_product from './../Assets/data';
import { Items } from './../Items/Items';


export const Popular = () => {
  return (
      <div className='popular'>
          <h1>POPULAR IN WOMEN</h1>
          <hr />
          <div className="popular-item">
              {data_product.map((item, i) => {
                  return <Items key={i} product={item} />
              })}
          </div>

      </div>
  )
}
