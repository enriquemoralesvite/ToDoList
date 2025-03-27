import { useState, useEffect } from 'react'
import List from './components/list.jsx'
import ItemList from './components/itemList.jsx'
import './App.css'
import { getPostWithAxios } from "./services/api.js"

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaInput, setTareaInput] = useState("");
  const agregarTarea = (tareaNueva)=> {
    setTareas ([...tareas, tareaNueva])
  }
   
useEffect (()=> {
  getPostWithAxios().then((post)=>console.log(post));
}, []);



  return (
    <>
      <h1>TO DO List</h1>
      <input type="text" placeholder="Agregar tarea" 
      value={tareaInput} 
      onChange={(e) => setTareaInput(e.target.value)} />
      <button onClick={()=>agregarTarea(tareaInput)}>Agregar</button>
      <List>
        {tareas.map((tarea, index) => (
          <ItemList key={index}>{tarea}</ItemList>
        ))}
      </List>
    </>
  )
}

export default App
