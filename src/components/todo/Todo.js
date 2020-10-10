import React from 'react';
import './Todo.css';

const Todo = ({todo, i, markAsDone, deleteTask}) => {
    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) => {
        deleteTask(index);
    }
   

    return (
        <tr className={todo.status}>
            <td>#{i}</td>
            <td>{todo.description}</td>
            <td>
                {todo.status === 'pending' && (
                    <input type="button" value="Terminar" onClick={(event) => handleMarkAsDone(event, i)}/>
                )}
                <input type="button" value="Eliminar" onClick={(event) => handleDelete(event, i)}/>
            </td>
        </tr>
    );
}

export default Todo;