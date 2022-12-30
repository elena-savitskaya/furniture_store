import React, { Component } from 'react'
import './_order.scss';
import { FaTrash } from 'react-icons/fa';
import Count from '../Count/Count';
class Order extends Component {   
    render() {
        return (
            <div className='item'>
                <div className='item-image'>
                    <img src={"./img/" + this.props.item.img} alt='img' />
                </div>
                <div className='item-text'>
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.priceTotal} $</b>    
                </div>
                <div className='item-count'>
				    <Count count={this.props.item.count} increase={this.props.onIncrease} decrease={this.props.onDecrease} changeValue={this.props.onChangeValue} id={this.props.item.id} />
			    </div>    
                <FaTrash className='icon-delete' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>)
    }
}

export { Order }