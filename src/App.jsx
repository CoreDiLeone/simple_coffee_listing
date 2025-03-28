import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Product from "./components/Product";

const basename = '/simple_coffee_listing/'; 
function App() {
  
  return (
    <BrowserRouter basename={basename}>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/product' element={ <Product />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
