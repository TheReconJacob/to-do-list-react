import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      list: []
    };
  }
  updateInput(id, value) {
    //update react state
    this.setState({
      [id]: value
    });
  }

  addTask() {
    //create task with unique ID
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const newTask = {
      id: 1 * getRandomInt(99999),
      value: this.state.newTask.slice(),
      but1: 1 * getRandomInt(99999),
      but2: 1 * getRandomInt(99999)
    };

    //copy of current list of tasks
    const list = [...this.state.list];

    //add new task to list
    list.push(newTask);

    console.log(list);
    //update state with new list and reset newTask input
    this.setState({
      list,
      newTask: ""
    });
  }

  doneTask(taskID, taskBut1, taskBut2) {
    document.getElementById(taskID).style.textDecoration = "line-through";
    document.getElementById(taskID).className = "Done";
    document.getElementById(taskBut1).outerHTML = "";
    document.getElementById(taskBut2).style = "";
  }
  deleteTask(taskID) {
    document.getElementById(taskID).outerHTML = "";
  }
  filterTask() {
    let classes = document.getElementsByClassName("Done");

    Array.prototype.forEach.call(classes, function(Class) {
      Class.style.display = "none";
    });
  }
  filterTask() {
    document.getElementById("filter").style.display = "none";
    document.getElementById("unfilter").style = "";
    let classes = document.getElementsByClassName("Done");
    Array.prototype.forEach.call(classes, function(Class) {
      Class.style.display = "none";
    });
  }
  unfilterTask() {
    document.getElementById("unfilter").style.display = "none";
    document.getElementById("filter").style.display = "inline";
    let classes = document.getElementsByClassName("Done");
    Array.prototype.forEach.call(classes, function(Class) {
      Class.style.display = "block";
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          Add an Task...
          <br />
          <input
            type="text"
            class="type-task"
            placeholder="Name your Task here..."
            value={this.state.newTask}
            onChange={newTask =>
              this.updateInput("newTask", newTask.target.value)
            }
          />
          <button class="add-task" onClick={() => this.addTask()}>
            Add
          </button>
          <br />
          <button
            id="filter"
            class="active-tasks"
            onClick={() => this.filterTask()}
          >
            Show Active Tasks Only
          </button>
          <button
            id="unfilter"
            class="all-tasks"
            style={{
              display: "none"
            }}
            onClick={() => this.unfilterTask()}
          >
            Show All Tasks
          </button>
          <br />
        </div>
        <br />
        <div>
          Tasks:
          <ul>
            {this.state.list.map(task => {
              return (
                <li class="task" id={task.id} key={task.id}>
                  {task.value}

                  <button
                    id={task.but1}
                    onClick={() => this.doneTask(task.id, task.but1, task.but2)}
                  >
                    done
                  </button>
                  <button
                    id={task.but2}
                    style={{
                      visibility: "hidden"
                    }}
                    onClick={() => this.deleteTask(task.id)}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
