
import Todo from "./todo"

export default function Todos({todolist,delTodo,editTodo})
{
   
   return(
    <>
    <div className="todos">
        {
            todolist.map((todoEle)=>
            
              {return(<Todo key={todoEle.id} todo={todoEle.text} delTodo = {()=>{delTodo(todoEle.id)}} editTodo = {()=>{editTodo(todoEle.id)}}/>)}
            )
            
        }
    </div>
</>
   )
}