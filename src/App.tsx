import { useState } from 'react'
import './App.scss'
import Cart from './Components/Cart/Cart'
import { Item } from './Components/Item/Item'
import { Data } from './Data/Data'

export type CartItemType = {
  id: number
  img: string
  name: string
  price: number
  amount: number
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ?
            { ...item, amount: item.amount + 1 }
            : item
        ))
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    ))
  }

  return (
    <main>
      <div className={cartOpen ? 'cartContainer' : 'cart-close'}>
        <div className='close'>
          <button onClick={() => setCartOpen(false)}>
            <svg viewBox="0 0 671 671" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2 19.2C31.2018 7.20185 47.4775 0.46167 64.448 0.46167C81.4185 0.46167 97.6942 7.20185 109.696 19.2L336 245.504L562.304 19.2C574.375 7.54188 590.541 1.09104 607.322 1.23686C624.102 1.38268 640.154 8.11349 652.02 19.9796C663.887 31.8457 670.617 47.8977 670.763 64.6783C670.909 81.4589 664.458 97.6255 652.8 109.696L426.496 336L652.8 562.304C664.458 574.375 670.909 590.541 670.763 607.322C670.617 624.102 663.887 640.154 652.02 652.02C640.154 663.887 624.102 670.617 607.322 670.763C590.541 670.909 574.375 664.458 562.304 652.8L336 426.496L109.696 652.8C97.6255 664.458 81.4589 670.909 64.6783 670.763C47.8977 670.617 31.8457 663.887 19.9796 652.02C8.11349 640.154 1.38268 624.102 1.23686 607.322C1.09104 590.541 7.54188 574.375 19.2 562.304L245.504 336L19.2 109.696C7.20185 97.6942 0.46167 81.4185 0.46167 64.448C0.46167 47.4775 7.20185 31.2018 19.2 19.2V19.2Z" fill="black" />
            </svg>
          </button>
        </div>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </div>

      <nav>
        <button onClick={() => setCartOpen(true)}>
          <svg viewBox="0 0 118 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M117.941 37.2347L112.992 65.5444C112.382 68.6717 109.884 70.5732 107.002 70.6089H34.8592L33.4268 78.6603H102.184C105.805 78.9346 108.26 81.4923 108.305 84.7636C108.041 88.3666 105.477 90.8224 102.184 90.8671H26.1343C22.0214 90.4982 19.5688 87.2287 20.0139 83.5949L23.2694 65.9337L18.321 16.3267L4.25704 11.9117C0.820188 10.551 -0.582537 7.45047 0.220158 4.24996C1.55484 0.914422 4.75293 -0.609541 7.90324 0.22427L25.8739 5.93818C28.2948 6.84318 29.6875 8.8194 30.0409 11.1327L31.0827 21.0021L112.602 30.0923C116.347 30.9014 118.381 33.86 117.941 37.2347V37.2347ZM44.7684 103.683C44.7684 108.828 40.5853 113 35.425 113C30.2647 113 26.0816 108.828 26.0816 103.683C26.0816 98.5365 30.2648 94.3649 35.425 94.3649C40.5852 94.365 44.7684 98.5367 44.7684 103.683ZM100.548 103.683C100.548 108.828 96.365 113 91.2047 113C86.0444 113 81.8613 108.828 81.8613 103.683C81.8613 98.5365 86.0444 94.3649 91.2047 94.3649C96.365 94.365 100.548 98.5367 100.548 103.683Z" fill="black" />
          </svg>
        </button>
      </nav>

      <div className='cards'>
        {Data.map((item) => (
          <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        )
        )}
      </div>
    </main>
  )
}

export default App
