import './App.css'
// import Home from '../Components/Home'
// import Products from '../Components/Products'
// import { Route, Routes } from 'react-router-dom'
// import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Products from '../Components/Products';


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/products' element={<Products/>}/>
    </Routes>
      
    </>
  )
}

export default App
