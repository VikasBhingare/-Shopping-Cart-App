import React, { useState } from 'react'
import bg from '../../assets/bg0.gif'
import './Home.css'
import { category } from '../../Category'
import Product from '../../Components/Product/Product'
import { dummydata } from '../../dummydata'

const Home = () => {

    let [cate, setCate] = useState(dummydata)
    function filterProducts(category) {
        const updatedata = dummydata.filter((item) => (item.category === category))
        setCate(updatedata)
    }

    return (
        <div className='home'>

            <div className="hero-bg">
                <img src={bg} alt="" />
            </div>

            {/* Api Fetch json category data */}
            <div className="category-section">
                {category.slice(0, 5).map((item) => (
                    <div className="category-card" onClick={() => {
                        filterProducts(item.name)
                    }}>
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                    </div>

                ))}
            </div>

            {/* Tranding Product */}
            <h1>Tranding Product</h1>

            {/* dummy product data */}
            <div className="product-section">
                {cate.slice(0, 7).map((item) => (
                    <Product name={item.name} price={item.price} image={item.image} id={item.id } />
                ))}
            </div>
        </div>
    )
}

export default Home
