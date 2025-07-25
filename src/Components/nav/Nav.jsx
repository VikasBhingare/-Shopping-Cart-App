import React from 'react'
import { BiLogoShopify } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'


const Nav = () => {

    let dispatch = useDispatch();
    let items = useSelector(state => state)
    console.log(items)

    return (
        <div className='nav'>
            <div className="top-nav">
                <Link to='/'><div className="logo">
                    <span>V-Shop</span>
                    <BiLogoShopify />
                </div></Link>
                <form className='search-box' >
                    <input type="text" placeholder='Search Items...' />
                    <button><CiSearch />
                    </button>
                </form>

                <Link to='/cart'> <div className="cart-box">
                    <FiShoppingCart />
                    <span>{items.cart.length}</span>
                </div> </Link>

            </div>
            <div className="bottom-nav">
                <Link to='/'><li>Home</li></Link>
                <Link to='/shop'><li>Shop</li></Link>
                <Link to='/cart'><li>Cart</li></Link>
                <Link to='/contact'><li>Contact</li></Link>

            </div>
        </div>
    )
}

export default Nav
