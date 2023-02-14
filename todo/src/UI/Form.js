import '../UI/Task.css'
import React, { useState } from 'react';
import Todo from './Todo';

function Form(props) {

    const [enteredTitle, setTitle] = useState('');
    // const [updateTitle, setUpdateTitle] = useState('');


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
        if (taskdatainput.title.trim().length === 0) {
            return;
        }
        props.onSaveTaskData(taskdatainput);
        setTitle('');
        // props.setSwitch ? setTitle('') : setTitle(props.editTaskTitle.title)

    };
    console.log(props.setSwitch);
    // if (props.setSwitch === false) {
    //     console.log(props.setSwitch);
    //     setToggleAddIcon(false);
    // }

    if (props.setSwitch === false) {
        let a = props.editedTaskTitle.title
        console.log(a);
    }

    return (
        <form onSubmit={AddTask}>
            <input type="text" onChange={TaskInput} value={enteredTitle} placeholder="Enter a task: " />
            {
                props.setSwitch ? <button id="submit" type='submit'>Add</button> : <button id="submit" type='submit'>Edit</button>
            }

        </form>
    );

};

export default Form;
