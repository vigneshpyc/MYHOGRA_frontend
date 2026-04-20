import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../src/context/AuthContext'
import hero from '../src/assets/hero.png'
import { updateDB, resetList } from '../src/api/Update'
import { HiOutlineLightBulb } from "react-icons/hi";
function Home() {

  const [active, setActive] = useState("purchased")
  const {token, loading, user, purchased, notPurchased, setPurchased, setNotPurchased} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if (!loading && !token){
    navigate('/')
  }
  },[token, loading])

  const handleComplete = (product,index)=>{
    const res = updateDB(product) // line wants to change
    console.log(res.data)
    setNotPurchased(notPurchased.filter((_, i) => i !== index));
    setPurchased([...purchased, product])
  }

  const reset = ()=>{
    const res = resetList()
    if (res){
      console.log("Reset Success")
    }
    else{
      console.log("reset Unsuccess")
    }
  }
  return (
    <Style>
      {/* nav bar under working */}
     <Nav>
       <nav>
        <div className="nav">
          <h3>MYHOGRA</h3>
          {/* <img src={hero} alt="sorry image not found" /> */}
        </div>
        {/* <div className="profile">
          <ul>
            <li>Profile</li>
            <li>Change Password</li>
            <li>History</li>
            <li>Logout</li>
          </ul>
        </div> */}
        
      </nav>
     </Nav>
      <div className="home">
        <h1>Welcome {user}</h1>
      </div>
      <div className="cnt">
      
      <div className="buttons">

        <Button
          $active={active === "purchased"}
          onClick={() => setActive("purchased")}  $position="left"
        >
          Purchased
        </Button>

        <Button
          $active={active === "notPurchased"}
          onClick={() => setActive("notPurchased")}  $position="right"
        >
          Not Purchased
        </Button>
      </div>
       <Content $show={active === "purchased"}>
        <h3>Purchased Items</h3>
        <table className='items'>
          <tbody>
            {purchased && purchased.length >0 ?(
              purchased.filter(item=>item!=null && item!='').map((item, index)=>(
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))):(
              <tr>
                <td>Empty items</td>
              </tr>
            )}
          </tbody>
        </table>
        
      </Content>

      <Content $show={active === "notPurchased"}>
        <h3>Not Purchased Items</h3>
        <table className='items'>
          <tbody>
            {notPurchased && notPurchased.length>0 ?(
              notPurchased.filter(item=>item!=null && item!='').map((item, index)=>(
              <tr key={index}>
                <td>{item}</td>
                <td className='btntd'><button onClick={()=>handleComplete(item,index)}>Done</button></td>
              </tr>
            ))):(
              <tr>
                <td>Empty Items</td>
              </tr>
            )}
          </tbody>
        </table>
        
      </Content>
      <div className="addproduct">
        <button className='add' onClick={()=>{navigate('products')}}>Add Products</button>
        <button className='add' onClick={reset}>Reset List</button>
      </div>
      <div className="suggestion">
        <div className="i" onClick={()=>navigate('/maintanance')}>
        <HiOutlineLightBulb />
        </div>
      </div>

      </div>
    </Style>
  )
}
const Style = styled.div`
  --color: white;
  --bgcolor: #389c9a;
  --product_color:#1E293B;
  h3{
    color: #389c9a;
  }

  .home {
    width: 100%;
    height: 50%;
    /* border: 1px solid black; */
    /* background-color: #389c9a; */
    background-image: url("./src/assets/products/backimg.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* z-index: 0; */
  }
  .cnt{
    position: absolute;
    /* z-index: 1; */
    top: 50%;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 0 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  h1 {
    color: white;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
  }
  .addproduct{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5%;
    
  }
  .addproduct .add{
    font-size: 20px;
    padding: 2%;
    width: 70%;
    height: auto;
    background-color: var(--bgcolor);
    outline: none;
    border: none;
    color: var(--color);
    border-radius: 30px;
    margin: 5px;
  }
  .buttons {
    display: flex;
    width: 100%;
  }
  .suggestion{
    width: 100%;
    height: 50px;
    padding-right: 20px;
  }
  .i{
    float: right;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #389c9a;
    color: white;
    font-size: 40px;
    border-radius: 50%;
    animation: spin 1s infinite;
  }
  @keyframes spin {
   from{
    transform: rotateY(360deg);
   }
  }
`
const Button = styled.button`
  width: 50%;
  padding: 2%;
  border: none;
  outline: none;
  cursor: pointer;

  background-color: ${(props) =>
    props.$active ? "var(--bgcolor)" : "transparent"};
  
  border-radius: ${(props)=>{
    if (!props.$active) return 0;

    if (props.$position==="left"){
      return "30px 0 0 0"
    }
    if (props.$position==="right"){
      return "0 30px 0 0"
    }
  }
  };

  color: ${(props) =>
    props.$active ? "var(--color)" : "black"};

  /* border-right: 1px solid black; */

  transition: 0.3s ease;
  /* border-radius: 30px 0 0 0; */
`
const Content = styled.div`
  display: ${(props) => (props.$show ? "block" : "none")};
  padding: 10px;
  .items{
    width: 100%;
    padding: 5px;
    color: #389c9a;
  }
  .btntd{
    text-align: end;
  }
  .btntd button{
    width: 50%;
    padding: 1%;
    background-color: #389c9a;
    color: #FED871;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight:bold;

  }
  tr:nth-child(odd){
    background-color: #d4faf9;
  }
  td{
    border-collapse:collapse;
    padding: 1%;
    text-align: justify;
  }
`
const Nav = styled.nav`
  height: 30px;
  overflow-y: auto;
  position:relative;
  z-index: 1;
.nav{
  display: flex;
  justify-content: space-between;
}
.profile{
  float: right;
  position: absolute;
  top: 30px;
  left: 70%;
  z-index: 1;
  border: 1px solid black;
}
  img{
    width: 30px;
    height: 30px;
  }
`
export default Home