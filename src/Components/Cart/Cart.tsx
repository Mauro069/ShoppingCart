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