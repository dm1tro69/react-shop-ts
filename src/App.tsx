import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import HomePage from "./containers/HomePage";
import AllProductsPage from "./containers/AllProductsPage";
import CheckoutPage from "./containers/CheckOutPage";
import {ROUTE} from "./constans/route";
import HeaderNavigation from "./components/HeaderNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className={'app-container'}>
        <HeaderNavigation/>
        <Routes>
          <Route path={ROUTE.HOME} element={<HomePage/>}/>
          <Route path={ROUTE.ALL_PRODUCTS} element={<AllProductsPage/>}/>
          <Route path={ROUTE.CHECKOUT} element={<CheckoutPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
