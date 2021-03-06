import React, {FC} from 'react';
import './style.css'
import {ProductCardProps} from "./interface";

const ProductCard:FC<ProductCardProps> = ({name, url}) => {
    return (
        <div className={'product-card-container'}>
           <div style={{backgroundImage: `url(${url})`}} className={'product-image'}/>
            <div className={'product-details'}>
                <p>{name}</p>
            </div>

        </div>
    );
};

export default ProductCard;
