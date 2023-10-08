
import Todos from "./todos"

import { useState } from "react"
export default function Entry({todos,setTodos,todo,setTodo})
{
    
    
    // console.log(todo)
    const setTodovalue = ()=>{

                

                const getID  = ()=>{
                    if( todos.length === 0)
                    {
                        return 0
                    }
                    else{

                        return(todos[(todos.length)-1].id+1)
                    }
                }
                if(todo=== '')
                {
                    alert('Enter something')
                }
                else{
                const ID = getID()
                const newTodos = [...todos,{id:ID,text:todo}]
                setTodos(newTodos)
                }
                setTodo('')
                console.log(todo)

            }

  
    return(
        <>
            <div className="todo-entry">
                <input type="text" value={todo} onChange = {(event)=>{setTodo(event.target.value)}} placeholder="Enter your todos"/>
                <button onClick={setTodovalue}>Add<i className="fa-solid fa-circle-plus" style={{color: '#fafafa'}}></i></button>
            </div>
        </>

    )
}