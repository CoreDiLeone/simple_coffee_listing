import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Product from "./components/Product";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/product' element={ <Product />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
