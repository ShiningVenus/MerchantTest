import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import MainLayout from '../layout/MainLayout';
import ProductItem from '../components/ProductItem';

import './Shop.scss'

const Shop = () => {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://127.0.0.1:3030/api/merchants`)

    console.log(res.data)
    setProducts(res.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <MainLayout>
      <div className='container'>
        <h2>Discover Stores</h2>
        <div className='product-wrapper'>
          {
            products.map((product, index) => <ProductItem key={index} {...product} />)
          }
        </div>
      </div>
    </MainLayout>
  );
}

export default Shop;