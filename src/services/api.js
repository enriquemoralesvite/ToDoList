export const getPosts = async ()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
   return response.json ();
  }


import axios from 'axios';  
export const getPostWithAxios = async ()=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    return response.data;
    }