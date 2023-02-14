import './Task.css';
import './Todo.css';

function Task(props) {

    return (
        <div className='task'>
            <p className='left complete'>{props.title}</p>
            <p className='right'>
                <i className='fa fa-edit' onClick={() => props.onEdit(props.editkey)} aria-hidden='true'></i>
                <i className='fa fa-times-circle-o' onClick={() => props.onSelect(props.taskIdx)} aria-hidden='true'></i>
            </p>
        </div>
    );
};

export default Task;