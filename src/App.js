import React, { useState, useEffect } from "react";
import "./App.css";

function App(props) {
  const [list, setList] = useState([]);

  const addItem = item => {
    let listClone = [...list];
    listClone.push({ title: item, completed: false });
    setList(listClone);
  };

  const setCompleted = itemIndex => {
    let listClone = [...list];
    listClone[itemIndex].completed = true;
    setList(listClone);
  };

  let listDOM = [];
  list.forEach((item, index) => {
    listDOM.push(
      <li key={index}>
        {item.title}{" "}
        <button onClick={event => setCompleted(index)}>done</button>
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
        <button id="filter" class="active-tasks">
          Show Active Tasks Only
        </button>
        <button
          id="unfilter"
          class="all-tasks"
          style={{
            display: "none"
          }}
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
// updateInput(id, value) {
//   //update react state
//   this.setState({
//     [id]: value
//   });
// }

// addTask() {
//   //create task with unique ID
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
//   const newTask = {
//     id: 1 * getRandomInt(99999),
//     value: this.state.newTask.slice(),
//     but1: 1 * getRandomInt(99999),
//     but2: 1 * getRandomInt(99999)
//   };

//   //copy of current list of tasks
//   const list = [...this.state.list];

//   //add new task to list
//   list.push(newTask);

//   console.log(list);
//   //update state with new list and reset newTask input
//   this.setState({
//     list,
//     newTask: ""
//   });
// }

// doneTask(taskID, taskBut1, taskBut2) {
//   document.getElementById(taskID).style.textDecoration = "line-through";
//   document.getElementById(taskID).className = "Done";
//   document.getElementById(taskBut1).outerHTML = "";
//   document.getElementById(taskBut2).style = "";
// }
// deleteTask(taskID) {
//   document.getElementById(taskID).outerHTML = "";
// }
// filterTask() {
//   let classes = document.getElementsByClassName("Done");

//   Array.prototype.forEach.call(classes, function(Class) {
//     Class.style.display = "none";
//   });
// }
// filterTask() {
//   document.getElementById("filter").style.display = "none";
//   document.getElementById("unfilter").style = "";
//   let classes = document.getElementsByClassName("Done");
//   Array.prototype.forEach.call(classes, function(Class) {
//     Class.style.display = "none";
//   });
// }
// unfilterTask() {
//   document.getElementById("unfilter").style.display = "none";
//   document.getElementById("filter").style.display = "inline";
//   let classes = document.getElementsByClassName("Done");
//   Array.prototype.forEach.call(classes, function(Class) {
//     Class.style.display = "block";
//   });
// }

export default App;
