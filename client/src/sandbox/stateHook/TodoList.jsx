import { Button, List, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function TodoList() {

    const [todoList, setTodoList] = useState([
        
    ]);

    const [newTask, setNewTask] = useState('');

    const updateNewTask = (e)=> {
        setNewTask(e.target.value);
        // console.log(newTask);
    }

    const addToList = () => {
        setTodoList([...todoList, {id:todoList.length, name:newTask}]);
        setNewTask('');
    }

    return (
        <>
            <TextField label='New Task' variant='outlined' value={newTask} onChange={updateNewTask}></TextField>
            <Button variant='contained' onClick={addToList} disabled={newTask == ''}>+</Button>
            <List>{todoList.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}</List>
        </>
    )
}
