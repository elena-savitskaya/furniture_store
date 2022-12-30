import React from "react";
import { Categories } from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Items } from "./components/Items/Items";
import { ShowFullItem } from "./components/Items/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair grey',
          img: 'chair-grey.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'chairs',
          price: '14.99',
          priceTotal: '14.99',
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'tables',
          price: '59.99',
          priceTotal: '59.99',
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'sofa',
          price: '139.99',
          priceTotal: '139.99',
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'lamp.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'light',
          price: '9.99',
          priceTotal: '9.99',
        },
        {
          id: 5,
          title: 'Chair white',
          img: 'chair-white.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'chairs',
          price: '9.99',
          priceTotal: '9.99',
        },
        {
          id: 6,
          title: 'Armchair',
          img: 'armchair.jpg',
          count: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: 'armchair',
          price: '39.99',
          priceTotal: '39.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.setState.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.increase = this.increase.bind(this);    
    this.decrease = this.decrease.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  render() {
    return (
      <>
        <Header 
          orders={this.state.orders} 
          onIncrease={this.increase}
          onDecrease={this.decrease}
          onchangeValue={this.changeValue} 
          onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder} />}
        <Footer />
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({
      showFullItem: !this.state.showFullItem
    })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
        console.log(this.state.orders)
      })
  }

  increase (id) {
		this.setState({ orders: this.state.orders.map((el) => {
				if (el.id === id) {
					return {
						...el,
						count: el.count + 1,
						priceTotal: (el.count + 1) * el.price,
					};
				}
				return el
			})
		})
	}

	decrease (id) {
		this.setState({ orders: this.state.orders.map((el) => {
				if (el.id === id) {
					const newCount = el.count - 1 > 1 ? el.count - 1 : 1;

					return {
						...el,
						count: newCount,
						priceTotal: newCount * el.price,
					};
				}
				return el
			})
		})
	}

	changeValue (id, value) {
		this.setState({ orders: this.state.orders.map((el) => {
				if (el.id === id) {
					return {
						...el,
						count: value,
						priceTotal: value * el.price
					}
				}
				return el
			})
		})
	}

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
}

export default App;
