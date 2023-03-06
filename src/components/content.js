import React, { useState } from 'react'
import profilePicture from "./img/Profile_Picture.jpg";

import addicon from "./img/add.png";
import deleteicon from "./img/delete.png";
export default function content() {

  // List item rendering 
  const [inputList,setInputList]=useState;
 
  return (
    <>
    <div className="container-fluid">
            <div className="whole-content-row row">
              <div className="col-3" id="navigations">
                <div className="row">
                  <div className="col-3" id="profile-image">
                
                    <img src={profilePicture} id="profilePicture" /> 
                  </div>
                  <div className="col-9" id="profile-name">
                    <p className="profile-name-content">Rohit Bagal</p>
                    <p className="profile-name-content">
                      rohitbagal.algoexpert
                    </p>
                  </div>
                  <hr id="profile-hr"></hr>

                  {/* My day */}
                  <div className="row navigation-content">
                    <div className="col-2" id="navigation-content-image">
                      {/* google images */}
                      <span class="material-symbols-outlined">light_mode</span>
                    </div>
                    <div className="col-10" id="navigation-content-name">
                      <p className="navigation-content-name">My Day</p>
                    </div>
                  </div>

                  {/* Importants */}
                  <div className="row navigation-content">
                    <div className="col-2" id="navigation-content-image">
                      {/* google images */}
                      <span class="material-symbols-outlined">stars</span>
                    </div>
                    <div className="col-10" id="navigation-content-name">
                      <p className="navigation-content-name">Importants</p>
                    </div>
                  </div>

                  {/* planned */}

                  <div className="row navigation-content">
                    <div className="col-2" id="navigation-content-image">
                      {/* Google Imgage */}
                      <span class="material-symbols-outlined">list_alt</span>
                    </div>
                    <div className="col-10" id="navigation-content-name">
                      <p className="navigation-content-name">Planned</p>
                    </div>
                  </div>

                  {/* All Tasks */}
                  <div className="row navigation-content">
                    <div className="col-2" id="navigation-content-image">
                      {/* Google Fonts */}
                      <span class="material-symbols-outlined">task</span>
                    </div>
                    <div className="col-10" id="navigation-content-name">
                      <p className="navigation-content-name">All Tasks</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Content starts here */}
              <div className="col-9" id="mainContent">
                <h1 id="main-content-heading">Add Task in To Do List</h1>

                <div className="row justify-content-evenly add-task-row">
                  <div className="col-7">
                    <input
                      type="text"
                      placeholder="Enter Task Name"
                      className="add-task-textbox"
                      
                    ></input>
                  </div>
                  <div className="col-2">
                    <button>Add</button>
                  </div>
                </div>
                <hr></hr>

{/* Task List starts here  */}
                <ol>
                  <li>
{/* {inputList} */}
                  </li>
                </ol>

                {/* Task list ends here */}
              </div>
            </div>
          </div>
    </>
  )
}
