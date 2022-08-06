import { API } from "../config";

// for post user data
export const postUser = async (user) => {
    const response = await fetch(`${API}/signin`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user) 
    })
    const data = await response.json();
    return data;
    }
// for update user
export const addUsercontent = async (user) => {
    const url = `${API}/addcontent`;
    console.log(url);
    const response =await fetch(url,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    const data = await response.json();
    console.log(data)
    return data;
}

// to get content from database
export const getContent = async(req) => {
    const id = req.params.id
    console.log("here is id",id)
    const url = `${API}/getcontent/${req.params.id}`;
    console.log(url);
    const response = await fetch(url,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    })
    const data = await response.json();
    console.log(data)
    return data;
}