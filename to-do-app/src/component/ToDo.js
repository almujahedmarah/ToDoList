import React, { useState } from "react";
import "../App.css";

export default function ToDo(props) {
  const [task, setTask] = useState([]);
  const [counter, setCounter] = useState([]);

  function hundleAdd(e) {
    e.preventDefault();
    let newTask = e.target[0].value;
    setTask([...task, newTask]);
    setCounter([...counter, 0]);
  }

  function hundlePlusCounter(e) {
    let num = counter[e.target.id];
    console.log(num);
    counter.splice(e.target.id, 1, num + 1);
    setCounter((counter) => [...counter]);
  }
  function hundleSubCounter(e) {
    let num = counter[e.target.id];
    console.log(num);
    counter.splice(e.target.id, 1, num - 1);
    setCounter((counter) => [...counter]);
  }
  function hundleDelete(e) {
    let newCounter = counter.splice(e.target.id, 1);
    setCounter((newCounter) => [...newCounter]);
    let newTasks = task.splice(e.target.id, 1);
    console.log("sfsdf" + e.target.id);
    setTask((newTasks) => [...newTasks]);
  }
  return (
    <div className="main1">
      <h1>ToDo List</h1>
      <ul id="tasksUl">
        {task.map((tak, index) => (
          <li id={index} className="d-flex">
            {tak}

            <button id={index} onClick={hundleDelete}>
              delete
            </button>
            <div className="counter">
              <button id={index} onClick={hundlePlusCounter}>
                +
              </button>
              <p>{counter[index]}</p>
              <button id={index} onClick={hundleSubCounter}>
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={hundleAdd}>
        <div className="main">
          <label htmlFor="Task">What needs to be done?</label>
          <input type="text" id="Task" placeholder="Your Task" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
