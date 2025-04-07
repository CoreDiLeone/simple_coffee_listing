import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Product from "./components/Product";


function App() {
  
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/product' element={ <Product />}/>
    </Routes>
    </HashRouter>
  )
}

export default App
