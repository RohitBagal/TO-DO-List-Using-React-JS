import "./App.css";
import profilePicture from "./img/Profile_Picture.jpg";
import NAVBAR from "./components/navbar";
import CONTENT from "./components/content";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("clicked");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>TODO App</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {/* Content Starts from here */}

          <NAVBAR />
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
                      value={inputList}
                      placeholder="Enter Task Name"
                      className="add-task-textbox"
                      onChange={itemEvent}
                    ></input>
                  </div>
                  <div className="col-2">
                    <button className="done-icon btn" onClick={listOfItems}>
                      <span className="add-icon material-symbols-outlined">
                        note_add
                      </span>
                    </button>
                  </div>
                </div>
                <hr></hr>

                {/* Task List starts here  */}
                <ol>
                  {/* {inputList} */}
                  {Items.map((itemval, index) => {
                    // return <li>{itemval}</li>;
                    return (
                      <ToDoList
                        key={index}
                        id={index}
                        text={itemval}
                        onSelect={deleteItems}
                      />
                    );
                  })}
                </ol>

                {/* Task list ends here */}
              </div>
            </div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}

export default App;
