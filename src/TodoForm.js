import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


let TodoForm = ({createTodo})=>{
    let [value, setValue] = useState('')
    let [valid,setValid] = useState(false)
    let [touched, setTouched] = useState(false)
    let updateVal=(e)=>{
        setValue(e.target.value)
        if(e.target.value===''){
            setValid(false);
        }
        else{
            setValid(true);
        }
        setTouched(true)
    }
    let resetValue= ()=>{setValue('')}
    let handleSubmit =(e)=>{
        e.preventDefault()
        if(valid){
            createTodo(value)
            resetValue()
            setValid(false)
            setTouched(false)
        }
        else{
            setTouched(true)
        }
    }
        

    return(
        <Form className='mt-4' onSubmit={(e)=>{handleSubmit(e)}}>
        <FormGroup>
            <Label className='mb-2'for="todo">Create Todo</Label>
            <Input valid={valid} type="text" onChange={updateVal}name="todo" id="todo" value={value} placeholder="What to do..." />
            {!valid && touched &&
            <small className='text-danger'>Todo cannot be empty!</small>
            }   
        </FormGroup>
        <Button color='primary'className='mt-2'>Create</Button>
    </Form>
        
    )
}

export default TodoForm;