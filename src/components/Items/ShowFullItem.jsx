import React from "react"
import { ImCancelCircle } from "react-icons/im";
import './_item.scss';

class ShowFullItem extends React.Component {
    render() {
        return (
            <div className="full-item">
                <div>
                    <ImCancelCircle className="close-button" onClick={() => this.props.onShowItem(this.props.item)} />
                    <img onClick={() => this.props.onShowItem(this.props.item)} src={"./img/" + this.props.item.img} alt='img' />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price} $</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export { ShowFullItem }

