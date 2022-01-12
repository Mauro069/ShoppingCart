import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../../App";
import React from "react";

import './Cart.scss'

type Props = {
    cartItems: CartItemType[]
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    // QUE HACE REDUCE?
    // const items = [{amount: 1, price:2}, {amount: 2, price:3}, {amount: 1, price:10}];
    // primer vuelta => acc es 0 + amount que es 1 * price que es 2 retornaria 2
    // segunda vuelta => acc es 2 + amount que es 2 * price que es 3 retornaria 8
    // ultima vuelta => acc es 8 + amount que es 1 * price que es 10 retornaria 18

    return (
        <div className='cart'>
            <h2>
                Your Shopping Cart
            </h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            <div className="items">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart} />
                ))}
            </div>
            <h3 className="total">Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
        </div>
    )
}

export default Cart