import { useState, useEffect } from 'react';
import { getAllProducts } from '../Apiservices/Api';
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    const [products , setProduct] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProducts();
            console.log(data)
        setProduct(data)
        };
        fetchData(); // Call fetchData function
    }, []);
    


    return (
        
        <div className='product-grid'>{
            products.map((product)=>(

                <div className="card" key={product.id} style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    ${product.price}
                </span>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    {/* <p className="card-text"></p> */}
                    <Link to= {`/details/${product.id}`}>

                    <button type="button" className="btn btn-product btn-sm">Product Details</button>
                    </Link>
                </div>
            </div>
            
            )
            )    
        }
           
        </div>
    );
}

export default Home;
