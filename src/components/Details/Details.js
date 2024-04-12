import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { getAllProductId } from '../../Apiservices/Api';
import { Link } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    console.log("Product ID:", id);
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getAllProductId(id);
            // console.log(data)
            setProductDetail(data);
        };
        fetchProduct();


    }, [id])

    useEffect(() => {
        console.log("Product Detail:", productDetail);
        console.log("Product Detail Keys:", Object.keys(productDetail));
    }, [productDetail]);

    const onClickHandle =() =>{
        window.confirm("The product is out of stoke")
    }


    return (
        <div className='Container'>
            {Object.keys(productDetail).length !== 0 ? (
                <div className='row'>
                    <div className='col-4'>
                        <img src={productDetail.data.image} alt={productDetail.data.title} />
                    </div>
                    <div className='col-8'>
                        <div className='carddetails'>
                            <h2 className='head'>{productDetail.data.title}</h2>
                            <p className='decr'>{productDetail.data.description}</p>
                            <h4 className='prices'>${productDetail.data.price}</h4>
                            <div className='button'>
                              
                                <button className='btn1 btn-primary' onClick={onClickHandle}>Buy Now</button>
                               
                                <br />
                                <Link to='/' >
                                <button className='btn2'>Back to home</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Details;

