import axios from "axios";

// API for update db
const API = "http://localhost:8000/api/V1/dbapi";

export const updateDB = async(userID, username, product)=>{
    const res = await fetch(`${API}/update`, {
        method:"POST",
        credentials:"include",
        headers :{"Content-Type":"application/json"},
        body : JSON.stringify({userID, username, product})
    })
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