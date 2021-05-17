import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function HomeScreen (props){
    return <ul class="products"> 
                  {
                    data.products.map(product =>
                      <li>
                        <div class="product">
                            <img class="product-img" src={product.image} alt="product"></img>
                             <Link to={'/product/' + product.id}><div class="product-name">{product.name}</div></Link>
                            <div class="product-price">R$ {product.price}</div>
                            <div class="product-rating">{product.rating} estrelas ({product.numReviews} Avaliações)</div>
                        </div>
                    </li>
                      )
                  }
                </ul>
}
export default HomeScreen;