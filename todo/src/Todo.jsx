import React from "react";
import "./App.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoAddOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[editid,setEditId] = useState(0)
  const addTodo = () => {
    if (todo !== "") {
       if(editid!==0){
        const edit=todos.map((data)=>
          data.id==editid?{...data,text:todo}:data

        );
        setTodos(edit);
        setTodo("")
        setEditId(0)

       }else{
      setTodos([...todos, { text: todo, id: Date.now(),status:false }]);
      console.log(todos);
      setTodo("");
       }
    }
  };
  function sentence(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const OnDelete = (id) => {
    setTodos(todos.filter((dat) => dat.id !== id));
  };

  const onComplete = (id) =>{
    const complete=todos.map((dat)=>{
      if(dat.id==id){
        return({...dat,status: !dat.status})
      }
      return(dat)
    })
    setTodos(complete)
  }

  const onEdit =(id) =>{
      const edit= todos.find((dat)=>dat.id==id)
      setTodo(edit.text)
      setEditId(edit.id)
  }
  return (
    <div className="container">
      <h1>TODOLIST</h1>
      <form className="form-group" onSubmit={handleSubmit}>
       
        <input
          type="todo"
          value={todo}
          className="form-control"
          placeholder="Enter task"
          onChange={sentence}
        />
        <button onClick={addTodo} className="btnadd">{editid?<LuFileEdit className="btnedit1"/>:<IoAddOutline />}</button>
      </form>
      <p>{todo}</p>
     
        <ul>
          {todos.map((data) => (
            <li className="list" id={data.status?"listitems":""}>
              {data.text}
              <div className="btn">
                <button className="btncomplete" onClick={() =>onComplete(data.id)}>
                  <TiTick />
                </button>
                <button className="btnedit" onClick={()=>onEdit(data.id)}><LuFileEdit /></button>
                <button className="btndelete" onClick={() => OnDelete(data.id)}>
                <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    
  );
}

export default Todo;
