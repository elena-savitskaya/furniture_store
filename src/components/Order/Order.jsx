import React, { Component } from 'react'
import './_order.scss';
import { FaTrash } from 'react-icons/fa';
import Count from '../Count/Count';
class Order extends Component {   
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt='img' />
                <div className='item-count'>
				    <Count count={this.props.item.count} increase={this.props.increase} decrease={this.props.decrease} changeValue={this.props.changeValue} id={this.props.item.id} />
			    </div>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.priceTotal} $</b>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>)
    }
}

export { Order }