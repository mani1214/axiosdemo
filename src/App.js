import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{useState,useEffect} from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts/5";



function App() {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  
  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h1>{post.id}</h1>
    </div>
  );
}

export default App;
