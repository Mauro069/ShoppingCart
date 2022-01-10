import React from "react";
import { CartItemType } from "../../App";

import './CartItem.scss'

type Props = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return <div className="cart-item">
        <div className="izq">
            <h3>{item.amount} | {item.name}</h3>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="der">
            <div className="buttons">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
            </div>
            <img src={item.img} alt={item.name} />
        </div>

    </div>
}

export default CartItem