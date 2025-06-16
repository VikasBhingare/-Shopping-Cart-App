import React, { useState } from 'react'
import './Shop.css'
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import Product from '../../Components/Product/Product'
import { BiLogoShopify } from "react-icons/bi";

const Shop = () => {
    let [cate, setCate] = useState(dummydata)
    function filterProducts(category) {
            if(category==='All'){
           setCate(dummydata)
            } else {
                const updatedata = dummydata.filter((item) => (item.category === category))
                setCate(updatedata)
}
            
        }
    
  return (
      <div className='shop'>
          <div className="heading">
              <span>Shop</span>
              <BiLogoShopify />
          </div>


          {/* Category show */}
      <div className="category-section">
                      {category.map((item) => (
                          <div className="category-card" onClick={() => {
                              filterProducts(item.name)
                          }}>
                              <img src={item.image} alt="" />
                              <span>{item.name}</span>
                          </div>
      
                      ))}
          </div>
          {/* Product section */}
        <div className="product-section">
                        {cate.map((item) => (
                            <Product name={item.name} price={item.price} image={item.image} id={item.id } />
                        ))}
                    </div>
      </div>
      
  )
}

export default Shop
