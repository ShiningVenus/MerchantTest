import React from 'react';
import './ProductItem.scss';

const ProductItem = (props) => {
  const { shop_background_img_base64 , name, rewards_rate } = props

  return (
    <div className='product' style={{backgroundImage: `url(${shop_background_img_base64})`}}>
      {/* <img src={ shop_background_img_base64 } alt='img' /> */}
      <div className='product-info'>
        <h4>{name}</h4>
        <span>{rewards_rate}% minimum</span>
      </div>
    </div>
  );
}

export default ProductItem;