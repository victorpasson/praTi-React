import { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([])

    return(
        <>  
            <h1>To do List</h1>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <button onClick={() => {
                if (todo.trim() != ""){
                    setList([...list, todo]);
                    setTodo("")
                }
            }}>Enviar</button>
            <ul>
                {list.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </>
    )
}

export default TodoList;