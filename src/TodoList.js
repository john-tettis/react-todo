import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuid } from 'uuid';

import {ListGroup } from 'reactstrap';


let TodoList = ()=>{
    let local = localStorage.getItem('todos');
    let [todos,setTodos] = useState(JSON.parse(local) || [])
    

    let createTodo=(text)=>{
        let newTodos=[...todos,{text, id:uuid()}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    let deleteTodo=(id)=>{
        let newTodos=todos.filter(todo=>todo.id!==id)
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    let updateTodo=(id,text)=>{
        console.log(id,text);
        let newTodos =todos.map(todo=>todo.id===id? {...todo,text:text}:todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
        
    console.log(todos)

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                <TodoForm createTodo={createTodo}/>
                </div>
                <div className='col-8'>
                    <h2 className='text-center'>Todos:</h2>
                    <hr/>
                <ListGroup className='mt-4'>
                    {todos.map(todo=>(<Todo deleteTodo={deleteTodo} updateTodo={updateTodo} text={todo.text} id ={todo.id}key={todo.id}/>))}
                
                </ListGroup>

                </div>
            </div>
        </div>
    )


}


export default TodoList