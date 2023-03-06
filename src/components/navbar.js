import React from 'react'
import logo from "./img/todo logo.png";

export default function navbar() {
  return (
    <>
     <div className="container-fluid" id="navbar">
            <img src={logo} className="logo"></img>
            <h1>Rohit's To Do</h1>
          </div>
    </>
  )
}
