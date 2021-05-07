import logo from './logo.svg';
import react from 'react';
import data from './data';
import './App.css';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div class="grid-container">

        <header class="header">
            <div class="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>

                <a href="index.html">Bijueira's</a>
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
                <ul class="products"> 
                  {
                    data.products.map(product =>
                      <li>
                        <div class="product">
                            <img class="product-img" src={product.image} alt="product"></img>
                             <a href="product.html"><div class="product-name">{product.name}</div></a>
                            <div class="product-price">R$ {product.price}</div>
                            <div class="product-rating">{product.rating} estrelas ({product.numReviews} Avaliações)</div>
                        </div>
                    </li>
                      )
                  }
                </ul>

            </div>
        </main>


        <footer class="footer">
            All right reserved.
        </footer>

    </div>
    
  );
}

export default App;
