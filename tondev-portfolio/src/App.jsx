import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css"

function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Layout />} >

        <Route index  element={<Home /> } />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
       

        </Route>
      </Routes>
   
    </>
  );
}

export default App;
