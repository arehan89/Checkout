import logo from './logo.svg';
/* import Navbar from './component/Navbar'; */
import './App.css';
import CheckOut from './component/checkout';
import ShoppingCart from './component/shoppingCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contentful} from './Contentful';

function App() {
    Contentful()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckOut />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
