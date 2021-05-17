import logo from './logo.svg';
import react from 'react';
import data from './data';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>

    <div class="grid-container">

        <header class="header">
            <div class="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to='/'>Bijueira's</Link>
            </div>
            <div class="header-links">
                <a href="cart.html"><img class="cart-icon" src="../images/cart.png"></img></a>
                  |
                <a href="singin.html"> Sing In</a>
            </div>
        </header>

        <aside class="sidebar">
            <h3>   Categorias</h3>
            <button class="sidebar-close-button" onClick={closeMenu}> X </button>
            <ul>
                <li><a href="index.html">Anel</a></li>
                <li><a href="index.html">Colar</a></li>
            </ul>
        </aside>

        <main class="main">
            <div class="content">
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" exact={true} component={HomeScreen}></Route>
                
    
            </div>
            
        </main>


        <footer class="footer">
            All right reserved.
        </footer>

    </div>

    </BrowserRouter>
    
  );
}

export default App;
