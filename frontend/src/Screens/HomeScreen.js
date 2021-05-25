import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props){

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.defaults.port = 5000;
    const fetchData = async () =>{
      const {data} = await axios.get('http://192.168.15.164:5000/api/products');
      setProduct(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

    return <ul class="products"> 
                  {
                    products.map(product =>
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