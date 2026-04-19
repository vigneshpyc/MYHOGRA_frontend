import './App.css'
// import Home from '../Components/Home'
// import Products from '../Components/Products'
// import { Route, Routes } from 'react-router-dom'
// import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Products from '../Components/Products';
import Maintanance from '../Components/Maintanance';
import CreateNewUser from '../Components/CreateNewUser';


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/products' element={<Products/>}/>
      <Route path='/maintanance' element={<Maintanance/>}/>
      <Route path='/createUser' element={<CreateNewUser/>}/>

    </Routes>
      
    </>
  )
}

export default App
