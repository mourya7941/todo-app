import React, { useReducer } from 'react';
import './App.css';

const initialState = {
   
};



const reducer = (state, action) => {
  switch (action.type) {     
    case "set-input":
      return {
        ...state,
        input: action.payload,
      };
    
    
    case "add-task": 
      return {
        ...state,
        list: [...state.list, state.input],
        input: "",
      };
    
    
    case "update-task":
      const updatedList = [...state.list];
      updatedList[state.editIndex] = state.input;
      return {
        ...state,
        list: updatedList,
        input: "",
        isEditing: false,
        editIndex: null,
      };
    
    
    case "set-editing":
      return {
        ...state,
        input: state.list[action.payload],
        isEditing: true,
        editIndex: action.payload,
      };
    default:
      return state;
  }
};




function PracticeApp() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleInput = (e) => {
    dispatch({ type: "set-input", payload: e.target.value });
  };



  const handleTask = () => {

    if (state.isEditing) {
      dispatch({ type: "update-task" });
    } else {
      dispatch({ type: "add-task" });
    }
  };



  const handleEdit = (index) => {
    dispatch({ type: "set-editing", payload: index });
  };



  return (
    <>
      <div className="App">
        <h2>To Do App</h2>

        <div className="input">
          <input
            type="text"
            placeholder="Enter your Task"
            value={state.input}
            onChange={handleInput}
          />
          <button onClick={handleTask}>
            {state.isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>

        <div>
          <ul>
            {state.list.map((item, i) => (
              <li key={i}>
                {item}
                <button onClick={() => handleEdit(i)}>Edit</button>
              
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PracticeApp;
