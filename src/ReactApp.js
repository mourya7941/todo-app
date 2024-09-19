import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  list: [],
  input: "",
  isEditing: false,
  editIndex: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        list: [...state.list, state.input],
        input: "",
      };
    case "UPDATE_TASK":
      const updatedList = state.list.map((item, index) =>
        index === state.editIndex ? state.input : item
      );
      return {
        ...state,
        list: updatedList,
        isEditing: false,
        editIndex: null,
        input: "",
      };
    case "SET_EDITING":
      return {
        ...state,
        input: state.list[action.payload],
        isEditing: true,
        editIndex: action.payload,
      };
    case "DELETE_TASK":
      const filteredList = state.list.filter((_, i) => i !== action.payload);
      return {
        ...state,
        list: filteredList,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  const handleTask = () => {
    if (state.isEditing) {
      dispatch({ type: "UPDATE_TASK" });
    } else {
      dispatch({ type: "ADD_TASK" });
    }
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  };

  const handleEdit = (index) => {
    dispatch({ type: "SET_EDITING", payload: index });
  };

  return (
    <>
      <h2>Todo App</h2>
      <div>
        
          <input
          type="text"
      
            placeholder="Enter Your Task"
            value={state.input}
            onChange={handleInput}
          />
          <button onClick={handleTask}>
            {state.isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
        <div className="list">
          <ul>
            {state.list.map((item, i) => (
              <li key={i}>
                {item}
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      
    </>
  );
}

export default App;
