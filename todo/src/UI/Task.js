import './Task.css';
import './Todo.css';

function Task(props) {

    return (
        <div className='task'>
            <p className='left' className='complete'>{props.title}</p>
            <p className='right'>
                {/* <i className='fa fa-check-circle-o' aria-hidden='true'></i> */}
                <i className='fa fa-times-circle-o' onClick={() => props.onSelect(props.taskIdx)} aria-hidden='true'></i>
            </p>
        </div>
    );
};

export default Task;