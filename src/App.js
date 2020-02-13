import React, { useState, useEffect } from "react";
import "./App.css";

function App(props) {
  const [list, setList] = useState([]);

  const addItem = item => {
    let listClone = [...list];
    listClone.push({ title: item, completed: false });
    setList(listClone);
  };

  const doneTask = id => {
    let listClone = [...list];
    listClone[id].completed = true;
    setList(listClone);
    document.getElementById("task" + id).style.textDecoration = "line-through";
    document.getElementById("task" + id).className = "Done";
    document.getElementById("done" + id).outerHTML = "";
    document.getElementById("delete" + id).style = "";
  };

  const deleteTask = id => {
    document.getElementById("task" + id).outerHTML = "";
  };

  const filterTask = () => {
    document.getElementById("filter").style.display = "none";
    document.getElementById("unfilter").style = "";
    let classes = document.getElementsByClassName("Done");
    Array.prototype.forEach.call(classes, function(Class) {
      Class.style.display = "none";
    });
  };

  const unfilterTask = () => {
    document.getElementById("unfilter").style.display = "none";
    document.getElementById("filter").style.display = "inline";
    let classes = document.getElementsByClassName("Done");
    Array.prototype.forEach.call(classes, function(Class) {
      Class.style.display = "block";
    });
  };

  let listDOM = [];
  list.forEach((item, index) => {
    listDOM.push(
      <li id={`task${index}`}>
        {item.title}{" "}
        <button id={`done${index}`} onClick={event => doneTask(index)}>
          done
        </button>
        <button
          id={`delete${index}`}
          style={{
            visibility: "hidden"
          }}
          onClick={event => deleteTask(index)}
        >
          delete
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <div>
        Add an Task...
        <br />
        <form
          onSubmit={event => {
            event.preventDefault();
            let data = new FormData(event.target);
            addItem(data.get("taskTitle"));
          }}
        >
          <input
            type="text"
            class="type-task"
            placeholder="Name your Task here..."
            name="taskTitle"
          />
          <button class="add-task">Add</button>
        </form>
        <br />
        <button
          id="filter"
          class="active-tasks"
          onClick={event => filterTask()}
        >
          Show Active Tasks Only
        </button>
        <button
          id="unfilter"
          class="all-tasks"
          style={{
            display: "none"
          }}
          onClick={event => unfilterTask()}
        >
          Show All Tasks
        </button>
        <br />
      </div>
      <br />
      <div>
        Tasks:
        <ul>{listDOM}</ul>
      </div>
    </div>
  );
}

export default App;
