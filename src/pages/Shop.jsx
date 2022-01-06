import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import MainLayout from '../layout/MainLayout';
import ProductItem from '../components/ProductItem';

import './Shop.scss'

const Shop = () => {

  const [products, setProducts] = useState([]);

  const filterData = (data) => {
    let obj = {}
    data.reverse().forEach(item => {
      if(obj[item.id] == null || obj[item.id] === 'coming_soon'){
        obj[item.id] = item
      }
    })
    const resArr = Object.values(obj)
  
    resArr.sort((a, b) => {
      const p1 = a.live_status === 'live' ? 1 : 0;
      const p2 = b.live_status === 'live' ? 1 : 0;
      return p2 - p1
    })
  
    return resArr
  }

  const fetchData = async () => {
    const res = await axios.get(`https://node-merchant.herokuapp.com/api/merchants`)

    setProducts(filterData(res.data))
  }

  useEffect(() => {
    fetchData();
  }, []) //eslint-disable-line

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