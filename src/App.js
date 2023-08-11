// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Product from "././Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import ContextFetch from "./Pages/ContextFetch";
// import Footer from "./Pages/Footer/Footer";
import Groceries from "./Pages/CategoryComp/Groceries";
import MensFashion from "./Pages/CategoryComp/MensFashion";
import Electronics from "./Pages/CategoryComp/Electronics";
import Mobile from "./Pages/CategoryComp/Mobile";
import Homedecor from "./Pages/CategoryComp/Homedecor";
import WomensFashion from "./Pages/CategoryComp/WomensFashion";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import TermsAndConditions from "./FooterComponent/TermsAndConditions ";

// import ContextFetch from './Pages/ContextFetch';
// import Navbar from './Navbar/Navbar'
function App() {
  // const Navigate=useNavigate()
  return (
    <div className="App">
      <ContextFetch>
        
          
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route  path="/" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
      {/* <TheRestOfYourApplication /> */}
           
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/details/:id" element={<ProductDetails />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            
            
            <Route path="/Groceries" element={<Groceries />}></Route>
            <Route path="/MensFashion" element={<MensFashion />}></Route>
            <Route path="/Electronics" element={<Electronics />}></Route>
            <Route path="/Mobile" element={<Mobile />}></Route>
            <Route path="/Homedecor" element={<Homedecor />}></Route>
            <Route path="/WomensFashion" element={<WomensFashion />}></Route>
            <Route
              path="/TermsAndConditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </BrowserRouter>
   
      </ContextFetch>
    </div>
  );
}

export default App;
