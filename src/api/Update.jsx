import axios from "axios";

// API for update db
const API = "http://localhost:8000/api/V1/dbapi";

export const updateDB = async(product)=>{
   const addData = await axios.post(
        `${API}/update`,
        {product:product},
        {withCredentials:true}
    );
    return res.json();
};
// API for add product in database
export const addProduct = async(product) =>{
    const addData = await axios.post(
        `${API}/addproduct`,
        {product:product},
        {withCredentials:true}
    );
    console.log("mesfrom api call : "+addData);
    return addData;
}

// API for fetch the total product
export const productFetch = async(category)=>{
    const res = await fetch(`${API}/fetchproduct`, {
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
        `${API}/reset`,
        {},
        {withCredentials:true}
    );
    return addData;
}