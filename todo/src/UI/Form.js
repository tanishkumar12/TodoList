import '../UI/Task.css'
import React, { useState } from 'react';
import Todo from './Todo';

function Form(props) {

    const [enteredTitle, setTitle] = useState('');

    const TaskInput = (event) => {
        setTitle(event.target.value);
        // console.log('title changed');
    }
    const AddTask = (event) => {
        event.preventDefault();

        const taskdatainput = {
            title: enteredTitle,
            // id: props.id,
        };
        // console.log(taskdatainput);
        props.onSaveTaskData(taskdatainput);
        setTitle('');

    };

    return (
        <form onSubmit={AddTask}>
            <input type="text" onChange={TaskInput} value={enteredTitle} placeholder="Enter a task: " />
            <button id="submit" type='submit'>Add</button>
        </form>
    );

};

export default Form;
