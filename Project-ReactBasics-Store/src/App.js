
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
import { productList } from './assents/productList';
import styled from 'styled-components';
import { useState } from 'react';



 function App() {
   const [minFilter, setMinFilter] = useState(0)
   const [maxFilter, setMaxFilter] = useState(0)
   const [searchFilter, setSearchFilter] = useState("")
   const[amount, setAmount] = useState(0)
   const[cart, setCart] = useState([])

  return (
    <>
      < div className="struct">
        <nav>
            <Filters/>
        </nav>
        <Home
        productList = {productList} />
        <aside>
            <p>Aside</p>
            <Cart/>
            <Items />
        </aside>
      </div>

      <footer>
      <p>footer</p>
    </footer>
  </>
  );
}

export default App;
