import React,{useState} from 'react';
import {ListGroupItem,Form} from 'reactstrap'
import './Todo.css';


let Todo = ({text,id,deleteTodo,updateTodo})=>{
    let [value, setValue] = useState(text)
    let [valid, setValid] = useState(true)


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(valid){
            updateTodo(id,value)
        }
    }
    const handleChange=(e)=>{
        setValue(e.target.value)
        setValid(v=>e.target.value!=='')
    }

    return(
            <ListGroupItem color={!valid? 'danger':''}key={id} onSubmit={handleSubmit}>
                <div className='row'>
                    <Form data-testid='form'className='col-10'>
                        <input  className='todo-input'value={value} onChange={handleChange} id={id}>
                        </input>  
                    </Form>
                    <div className='col-2'>
                        <i data-testid='delete' onClick={()=>deleteTodo(id)}className="far fa-check-circle fa-lg"></i>
                    </div>
                </div>
            </ListGroupItem>
    )

}

export default Todo