import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'

export const TaskItem = (props) => {
    const {name, isChecked} = props.task;

    return (
        <div className="task-item">
            <div className={`task-name ${isChecked && 'done'}`}>
                {name}
            </div>
            <input
                type="checkbox"
                className={`mark-done`}
                checked={isChecked} onChange={props.changeStatus}>
            </input>
            <button className="delete" onClick={props.deleteTask}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </div>
    );
}