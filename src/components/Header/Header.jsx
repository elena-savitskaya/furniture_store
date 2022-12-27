import React, { useState } from 'react'
import './_header.scss';
import { FaShoppingCart } from "react-icons/fa";
import { Order } from '../Order/Order';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />))}
            <p className='sum'>Total: {new Intl.NumberFormat().format(sum)} $</p>
        </div>
    )
}
const showNothing = () => {
    return (<div className='empty'>
        <h2>There are no items in the cart</h2>
    </div>)
}

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);


    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Personal account</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                    </div>
                )}
            </div>
            <div className='presentation'>
                <img src="./img/home.jpg" alt="img" />
            </div>
        </header>
    )
}

export { Header } 