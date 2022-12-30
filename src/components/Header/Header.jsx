import React, { useState } from 'react';
import home from '../../img/home.jpg';
import './_header.scss';
import { Order } from '../Order/Order';
import { FaShoppingCart } from 'react-icons/fa';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.priceTotal))

    return (
        <div>
            {props.orders.map(el => (
                <Order 
                    onDelete={props.onDelete} 
                    onIncrease={props.onIncrease}
                    onDecrease={props.onDecrease}
                    onChangeValue={props.onChangeValue} 
                    key={el.id} 
                    item={el} />))}
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
            <div className='container'>
                <div className='header'>
                    <h1 className='logo'>House Staff</h1>
                    <div className='header-nav'>
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
                </div>
                <div className='presentation'>
                    <img src={home} alt="img" />
                    <div className='text'>The best furniture at low prices</div>
                </div>
            </div>
        </header>
    )
}

export { Header } 