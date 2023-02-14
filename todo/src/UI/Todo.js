import "../UI/Todo.css";
import Task from "../UI/Task";
import React, { useState } from "react";
import Form from "./Form";

function Todo(props) {
    const [tasks, setTasks] = useState([]);
    const [isEditTasks, setIsEditTasks] = useState(null);
    const [toggleAdd, setToggleAdd] = useState(true);
    const [newTaskTitle, setNewTaskTitle] = useState(null);
    const [getTaskTitle, setGetTaskTitle] = useState(false);

    const saveTaskData = (newTaskData) => {
        if (!newTaskData) {
            alert('Please add data');
        }
        else if (newTaskData && !toggleAdd) {
            setTasks(
                tasks.map((elem) => {
                    if (elem.id === isEditTasks) {
                        return { ...elem, title: newTaskData.title }
                    }
                    return elem;
                })
            )
            setToggleAdd(true);
            setIsEditTasks(null);
            // setNewTaskTitle('');
        }
        else {
            const taskData = {
                id: new Date().getTime().toString(),
                ...newTaskData,
            };
            setTasks((prevTasks) => {
                return [...prevTasks, taskData];
            });
        }
        // console.log(taskData);
        // setTasks((prevTasks) => {
        //     return [...prevTasks, taskData];
        // });
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
            let a = [...prevtasks];
            a.splice(taskIdx, 1);
            // console.log(a);
            return [...a];
        });
    };


    const editTask = (editedKey) => {
        setNewTaskTitle(tasks.find((elem) => {
            return elem.id === editedKey;
        }));
        console.log(newTaskTitle);
        setToggleAdd(false);

        setIsEditTasks(editedKey);
        setGetTaskTitle(true);

    };

    console.log(toggleAdd);
    return (
        <div className="container">
            <div id="todoList">
                <h1>todo</h1>
                <div className="controls">
                    <Form onSaveTaskData={saveTaskData} setSwitch={toggleAdd} editedTaskTitle={newTaskTitle} changeTitle={getTaskTitle} />
                </div>
                <div className="task-list">
                    {tasks.length === 0 && <p>No tasks</p>}
                    {tasks.length > 0 &&
                        tasks.map((tasks, taskIndex) => (
                            <Task
                                title={tasks.title}
                                key={taskIndex}
                                editkey={tasks.id}
                                taskIdx={taskIndex}
                                onSelect={deleteTask}
                                onEdit={editTask}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;
