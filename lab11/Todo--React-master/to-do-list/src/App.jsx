import { useEffect, useState } from 'react'
import Entry from './entryElement'
import Todos from './todos'

function getLocalData()
{
  const data = localStorage.getItem('TodoList')

  if(data)
  {
    return data
  }
  else{return []}
}
function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  
  useEffect(()=>{
    localStorage.setItem('TodoList',todos)
  },[todos])
  

  const del = (id)=>{
              const updatedList = todos.filter((todo)=>{
                if(todo.id !== id){
                  return todo
                }
              })
              setTodos(updatedList)
            }
  const edit = (id)=>{

    const to_be_edited = todos.find((currEle)=>{return currEle.id === id})
    console.log(to_be_edited.text)
    setTodo(to_be_edited.text)
    del(to_be_edited.id)
  }  
  
  return (
    <>
      <h1>Todo App</h1>
      <Entry todos = {todos} setTodos = {setTodos} todo = {todo} setTodo= {setTodo}/>
      <Todos todolist={todos} delTodo = {del} editTodo={edit} />
    </>
  )
}

export default App
