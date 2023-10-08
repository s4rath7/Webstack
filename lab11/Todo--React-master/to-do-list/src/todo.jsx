

export default function Todo({todo,delTodo,editTodo})
{

    return(
        <div className="todo">
            <p className="todo-text">{todo}</p>
            <div className="todo-tool">
                <button className="btn-edit" onClick={editTodo} ><i className="fa-solid fa-pen-to-square" style={{color: '#858585'}}></i></button>
                <button className="btn-del" onClick={delTodo}><i className="fa-solid fa-trash" style={{color: '#7a7a7a'}}></i></button>
            </div>
        </div>
    )
}