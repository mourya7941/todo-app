
// import './App.css';
// import React, { useState } from 'react';


// function App() {
//   const [input, setInput] = useState("");
//   const [list, setList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };

//   const handleTask = () => {
//     if (isEditing) {
//       const updatedList = list.map((item, index) =>
//         index === editIndex ? input : item
//       );
//       setList(updatedList);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setList([...list, input]);
//     }
//     setInput("");
//   };

//   const handleDelete = (index) => {
//     const filterList = list.filter((_, i) => i !== index);
//     setList(filterList);
//   };

//   const handleEdit = (index) => {
//     setInput(list[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   return (
//     <div className="App">
//       <h2>Todo App</h2>
//       <div className="container">

// {/* input area */}
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Enter Your Task"
//             value={input}
//             onChange={handleInput}
//           />
//           <button onClick={handleTask}>
//             {isEditing ? "Update Task" : "Add Task"}
//           </button>
//         </div>


//         <div className="list">
//           <ul>
//             {list.map((item, i) => (
//               <li key={i}>
//                 {item}
//                 <button onClick={() => handleEdit(i)}>Edit</button>
//                 <button onClick={() => handleDelete(i)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter)
  const auth = useSelector((state)=> state?.auth)




  return (
    <div>

      {counter?.count}
      
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>

      <h1>{auth?.isAuth ? "is verified user" : "not verified user"}</h1>
         
      <button onClick={() => dispatch({ type: "login" })}>verified</button>
        <button onClick={()=>dispatch({type:"logout"})}>not verified</button>
    </div>
  )
}

export default App