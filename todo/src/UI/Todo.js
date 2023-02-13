import '../UI/Todo.css'
import Task from '../UI/Task';
import React, { useState } from 'react';
import Form from './Form';

function Todo(props) {

    const [tasks, setTasks] = useState([]);

    const saveTaskData = (newTaskData) => {
        const taskData = {
            ...newTaskData,
            id: Math.random().toString()
        };
        console.log(taskData);
        setTasks(prevTasks => {
            return [newTaskData, ...prevTasks];
        });

    };

    const deleteTask = (taskIdx) => {
        // console.log('deleted');
        // console.log(taskIdx);

        // setTasks((prevTasks) => {
        //     return ()
        // });
        // console.log(setTasks);

        setTasks((prevtasks) => {
            // console.log(prevtasks.splice(taskIdx, 1));
            let a = [...prevtasks]
            console.log(a.splice(taskIdx, 1));
            console.log(a);
            return [...a];
        });
    }

    return (
        <div className="container">
            <div id="todoList">
                <h1>todo</h1>
                <div className="controls">
                    <Form onSaveTaskData={saveTaskData} />
                </div>
                <div className='task-list'>
                    {tasks.map((tasks, taskIndex) => <Task title={tasks.title} key={taskIndex} taskIdx={taskIndex} onSelect={deleteTask} />)}
                </div>
            </div>
        </div >
    );
};

export default Todo;
