import React from 'react';
import './ProductItem.scss';

const ProductItem = (props) => {
  const { shop_background_img_base64 , name, rewards_rate, url, live_status } = props

  return (
    <a className='product' style={{backgroundImage: `url(${shop_background_img_base64})`}} href={url}>
      <span className={live_status}>Coming soon</span>
      <div className='product-info'>
        <h4>{name}</h4>
        <span>{rewards_rate}% minimum</span>
      </div>
    </a>
  );
}

export default ProductItem;