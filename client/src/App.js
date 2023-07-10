import React from "react";
import "./App.css";
import PostList from "./Components/PostList";
import { PostForm } from "./Components/PostForm"; 
import { BrowserRouter } from "react-router-dom";
import { PostSearch } from "./Components/PostSearch";
import ApplicationViews from "./Components/ApplicationViews";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <ApplicationViews />
    </BrowserRouter>
    </div>
  );
}

export default App;