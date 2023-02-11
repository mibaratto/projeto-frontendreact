
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { productList } from './assents/productList';
import styled from 'styled-components';
import { useState } from 'react';


 function App() {
   const [minFilter, setMinFilter] = useState(0)
   const [maxFilter, setMaxFilter] = useState(0)
   const [searchFilter, setSearchFilter] = useState("")
   const[amount, setAmount] = useState(0)
   const[cart, setCart] = useState([])


   const addProductCart = (productAdd) => {
    const existingProduct = cart.find(item => item.id === productAdd.id)
    if(existingProduct) {
      setCart(cart.map(item => item.id === productAdd.id ? {...existingProduct, qty: existingProduct.qty + 1} : item))
    } 
    else {
      setCart([...cart, {...productAdd, qty: 1}])
    }

    setAmount(amount + productAdd.value)
  }

  const removeItemCart = (itemRemoved) => {
    const existingProduct = cart.find(item => item.id === itemRemoved.id)
    if (existingProduct.qty === 1) {
      setCart(cart.filter((item) => item.id !== itemRemoved.id))
    }
    else {
      setCart(cart.map(item => item.id === itemRemoved.id ? {...existingProduct, qty: existingProduct.qty - 1} : item))
    }

    setAmount(amount - itemRemoved.value)
  }

  const cleanFilter = () => {
    setMaxFilter(0)
    setMinFilter(0)
    setSearchFilter("")
  }

  return (
    <>
      < div className="struct">
        <nav>
          <Filters
            minFilter = {minFilter}
            setMinFilter = {setMinFilter}
            maxFilter = {maxFilter}
            setMaxFilter = {setMaxFilter}
            searchFilter = {searchFilter}
            setSearchFilter = {setSearchFilter}
            cleanFilter={cleanFilter}
          />
        </nav>
        <main>
          <Home
            productList = {productList}
            minFilter = {minFilter}
            maxFilter = {maxFilter}
            searchFilter = {searchFilter}
            addProductCart = {addProductCart}
          />
        </main>
        <aside>
            <Cart
              cart={cart}
              setCart={setCart}
              removeItemCart={removeItemCart}
              amount={amount}
            />
        </aside>
      </div>
  </>
  );
}

export default App;
