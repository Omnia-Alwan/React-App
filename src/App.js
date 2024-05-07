
import Navbar from './components/Navbar.js';
import ProductsList from './components/ProductsList.js';
import Slider from './components/Slider.js';
import About from './components/About.js';
import ProductDetails from './components/ProductDetails.js'

import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    
    <div className='App'>
    <Navbar/>
    <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
