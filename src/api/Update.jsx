import axios from "axios";

// API for update db
// const API = "http://localhost:8000/api/V1/dbapi";
import {DB_API} from '../api/enpoints'
export const updateDB = async(product)=>{
   const addData = await axios.post(
        `${DB_API}/update`,
        {product:product},
        {withCredentials:true}
    );
    return addData.json();
};
// API for add product in database
export const addProduct = async(product) =>{
    const addPro = await axios.post(
        `${DB_API}/addproduct`,
        {product:product},
        {withCredentials:true}
    );
    return addPro;
}

// API for fetch the total product
export const productFetch = async(category)=>{
    const res = await fetch(`${DB_API}/fetchproduct`, {
        method:"POST",
        credentials:"include",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({category})
    })
    return res.json();
}
//API for reset a list
export const resetList = async() =>{
    const reset = await axios.post(
        `${DB_API}/reset`,
        {},
        {withCredentials:true}
    );
    return reset;
}