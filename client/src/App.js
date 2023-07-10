import React from "react";
import "./App.css";
import PostList from "./Components/PostList";
import { PostForm } from "./Components/PostForm"; 
import { BrowserRouter } from "react-router-dom";
import { PostSearch } from "./Components/PostSearch";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <PostForm />
        <PostSearch />
        <PostList />
    </div>
    </BrowserRouter>
  );
}

export default App;