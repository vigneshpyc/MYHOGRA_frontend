import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";
import styled from 'styled-components';
import { addProduct, productFetch } from '../src/api/Update';
import { AuthContext } from '../src/context/AuthContext';
function Products() {
  const [category, setCategory] = useState("")
  const [product, setProduct] = useState([])
  const [selectedItems, setSelectedItems] = useState([]);
  const {userID, token, loading} = useContext(AuthContext)
  const navigate = useNavigate()

   useEffect(()=>{
      if (!loading && !token){
      navigate('/')
    }
    },[token, loading])

  const fetchData = async (event)=>{
    setCategory(event.target.value)
    const data = await productFetch(event.target.value);
    setProduct(data)

  }
  const addItem = async(product)=>{
    console.log("item name :", product)
    if (!selectedItems.includes(product)) {
            setSelectedItems([...selectedItems, product]);
        }
    let res = await addProduct(product)
    console.log(res)
  }
  return (
    <>
    <Style>
      {/* nav bar design */}
      <Nav>
        <nav className='navbar'>
          <i className='back_icon' onClick={()=>{navigate('/home')}}><IoChevronBack /></i>
          <h4>ADD PRODUCTS</h4>
        </nav>
      </Nav>
      <Category>
        <div className="category">
          <select value={category} onChange={fetchData}>
            <option value="" >choose Category</option>
            <option value="vegetables" >Vegetables</option>
            <option value="oils">Oil</option>
            <option value="pulses">Pulses</option>
            <option value="grains">Grains</option>
            <option value="fruits">Fruits</option>
          </select>
        </div>
      </Category>

      {/* products shows page */}
      <ProductsDesign>
          {product.map((item,index)=>(
            <div className="pro" key={index}>
              <div className="cnt">
                  <div className="pic" >
                    <img src={`/src/assets/products/${item.item_name}.png`} style={{width:"100px",height:"100px"}} alt={`${item.item_name}`} />
                  </div>
                  <div className="datas">
                    <h3>{item.item_name}</h3>
                    <button onClick={()=>addItem(item.item_name)}>Add</button>
                  </div>
                  <Indication $indication={selectedItems.includes(item.item_name)}>
                  <div className="indication" ></div>
                  </Indication>
              </div>
          </div>
          ))}
      </ProductsDesign>
    </Style>
    </>
  )
}

const Style = styled.div`
--bgcolor : #389c9a;
--color: orange;
--icon-color : white;
min-height: 100vh;
background-color: #caf2f2;
.background{
  background-color: #389c9a;
  border: 5px solid black;
  margin: 1;
}

`
const Nav = styled.div`

background-color:var(--bgcolor);
font-size: 20px;
padding: 3%;
justify-content: center;
color: var(--icon-color);

.navbar{
  display: flex;
  align-items: center;
}
`
const Category = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  select{
    width: 100%;
    padding:5px;
    color:#152f2f;
    cursor: pointer;
  }
`
const ProductsDesign = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  .pro{
    width: 90%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  .cnt{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius:10px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  }
  .pic{
    width: 50%;
  }
  .datas{
    width: 50%;
    color: #389c9a;
  }
   button{
    width: 50%;
    padding: 1%;
    background-color: #FED871;
    color: #389c9a;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight:bold;
  }
`

const Indication = styled.div`
  .indication{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    /* background-color: green; */
   background-color:${(props)=>
            props.$indication ? "green" : "red"
        };
  }
`
export default Products
