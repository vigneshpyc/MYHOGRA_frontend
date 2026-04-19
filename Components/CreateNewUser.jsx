import axios from 'axios'
import React, { useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
function CreateNewUser() {
    const navigate = useNavigate()
    const API = "http://localhost:8000/api/V1/auth";
    const [passwrd, setPassWrd] = useState("")
    const [repaswrd, setRePasWrd] = useState("")
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const hadleChange = (e)=>{
        setPassWrd(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const createUser = async(e)=>{
        e.preventDefault();
        if(passwrd===repaswrd){
            try{
            const res = await axios.post(
                `${API}/newuser`,
                formData,
                {withCredentials:true}
            )
            alert(res.data.message)
            navigate('/')
        }
        catch{
            console.log("Error in API calling")
        }
            
        }
        else{
            console.log("password invalid/mismatched")
        }
    }

  return (
    <>
    <Style>
        <div className="tht">
            <h4>Never forget a thing—enjoy stress-free grocery shopping with us.</h4>
        </div>
    <div className="page">
        <h3>Wlecome To Myhogra</h3>
        <label htmlFor="#" style={{color:"#152f2f"}}>New User Form</label>
        <form>
            <div className="cnt">
                <label htmlFor="username">Enter Your Name</label><br />
                <input type="text" name="username" placeholder='Ex : john wicky' onChange={hadleChange} required />
            </div>
            <div className="cnt">
                <label htmlFor="email">Enter Your Email</label><br />
                <input type="text" name='email' placeholder='Ex : John@gmail.com' onChange={hadleChange} required />
            </div>
            <div className="cnt">
                <label htmlFor="password">Enter New Password</label><br />
                <input type="password" name='password' placeholder='Ex : john@123' onChange={hadleChange} />
            </div>
            <div className="cnt">
                <label htmlFor="reEnter">Renter password</label><br />
                <input type="password" placeholder='Ex : john wicky' onChange={(e)=>setRePasWrd(e.target.value)} /><br/>
                {
                    passwrd ===''? <label></label>:passwrd===repaswrd ? <label style={{color:"#389c9a"}}>password Matched</label> :  <label style={{color:"red"}}>Password Mismatched</label>
                }
            </div>
            <button onClick={createUser} className='btn'>Submit</button>
        </form>
    </div>
    </Style>
    </>
  )
}

const Style = styled.div`
    min-height: 100vh;
    background-color: #bdeae9;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    .page{
        width: 90%;
        height: auto;
        background-color: white;
        position: absolute;
        top: 20%;
        left: 5%;
        padding:5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    .cnt{
        margin: 1rem 0 1rem 0;
        width: 100%;
    }
    form{
        width: 90%;
    }
    input{
        margin-top: 5px;
        width: 100%;
        padding: 3px;
        border-top:none;
        border-left: none;
        border-right: none;
    }
    h3{
        color: #389c9a;
    }
    .btn{
        font-size: 20px;
        padding: 2%;
        width: 50%;
        height: auto;
        background-color: #389c9a;
        outline: none;
        border: none;
        color: white;
        border-radius: 30px;
        margin: 5px;
    }
    .tht{
        width: 100%;
        padding: 5px;
        text-align: center;
        color: #152f2f;
    }
`
export default CreateNewUser
