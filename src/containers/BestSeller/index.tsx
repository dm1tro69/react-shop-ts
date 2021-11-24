import React from 'react';
import './style.css'
import ProductCard from "../../components/ProductCard";

const BestSeller = () => {
    return (
        <div className={'best-seller-container'}>
             <h2>Best Seller</h2>
            <div className={'best-seller-products'}>
               <ProductCard
                   url={"http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png"}
                   name={'Formal Dress'}/>
               <ProductCard
                   url={"http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.png"}
                   name={'Shirts Casual'}/>
               <ProductCard
                   url={"http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png"}
                   name={'Long Sleeve'}/>
            </div>
        </div>
    );
};

export default BestSeller;
