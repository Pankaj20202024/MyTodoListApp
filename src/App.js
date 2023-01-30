import "./App.css";
import { useState } from "react";
import Todolist from "./component/Todolist";

function App() {
  const { userlist, push, pull } = Todolist();
  const [usertodo, setuserTodo] = useState("");

  const AddItemHandler = (event) => {
    event.preventDefault();
    if (usertodo !== "") {
      push(usertodo);
      setuserTodo("");
    }
    else{
      alert("Please type something to add")
    }
  };
  return (
    <div className="MainContainer">
      <h2 className="AppHeading">My Todo List App </h2>
      <div className="InputFieldContainer">
        <form>
          <input
            className="InputField"
            type="text"
            placeholder="Enter Todo Item"
            value={usertodo}
            onChange={(e) => {
              setuserTodo(e.target.value);
            }}
          />
          <button
            className="AddingButton"
            onClick={(event) => {
              AddItemHandler(event);
            }}
          >
            Add Item
          </button>
        </form>
      </div>
      <div className="MainContainer2">
        <h3 className="DisplayTodoHeading">Your Todo Items </h3>
        <div className="TodoItemDisplayContainer">
          {userlist.map((todo_item, todoitemindex) => {
            return (
              <>
                <div className="displayTodoItem">
                  <h4 className="UserName" key={todoitemindex}>
                    {todo_item}
                  </h4>
                  <button
                    className="DeleteButton"
                    onClick={() => {
                      pull(todoitemindex);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
