import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, markAsDone, deleteTask}) => {
    
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, i) => 
                    <Todo todo={todo} key={i} i={i} markAsDone={markAsDone} deleteTask={deleteTask} />
                )}
            </tbody>
        </table>
    );
}

export default TodoList;