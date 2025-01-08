import React from 'react';
import './ProductCard.css';

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-card__image" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>
      <button className="product-card__button">Book Now</button>
    </div>
  );
};

export default ProductCard;
