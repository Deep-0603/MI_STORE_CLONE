import React from 'react';
import "../styles/ProductReviewCard.css";
const ProductReviewCard = ({name,price,item,image,index,reviews}) => {
  return (
    <div className='ProductReviewCard'>
      <img src = {image} alt = {`${index} review`} />
      <h5>{reviews}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
}

export default ProductReviewCard;
