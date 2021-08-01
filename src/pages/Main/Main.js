import React, {useState} from "react";
import {TaskItem} from "../../components/TaskItem";

export const BuildMarkup = () => {
    const initialState = {
        value: '',
        items: [],
        error: '',
        done: 0
    };

    const [state, setState] = useState(initialState);

    const onInputChange = (e) => setState({...state, value: e.target.value})

    const addTask = () => {
        if (!state.value) {
            return setState({...state, error: 'Cannot add empty task'})
        }

        if (!state.items.some(item => item.name === state.value)) {
            setState({
                ...state,
                value: '',
                items: [
                    ...state.items,
                    {name: state.value, isChecked: false}
                ],
                error: ''
            })
        }
        else {
            setState({...state, error: 'Task already exists'})
        }

    }

    const deleteTask = (key) => setState({
            ...state,
            items: state.items.filter(item => item.name !== key)
        }
    );

    const changeStatus = (key) => {
        setState({
            ...state,
            items: state.items.map(item => {
                    if (item.name === key) item.isChecked = !item.isChecked;
                    return item;
                }
            ),
            done: state.items.filter(item => item.isChecked).length
        })
    }

    return (
        <>
            <div className="task-input">
                <input onChange={onInputChange} value={state.value}
                       type="text" className="task-input" placeholder={"Task"}/>
                <button className="add-task" onClick={addTask}>
                    Add task
                </button>
                <span className="error">{state.error}</span>
            </div>
            <div className="tasks">
                {
                    state.items.map(task => <TaskItem
                        deleteTask={() => deleteTask(task.name)}
                        changeStatus={() => changeStatus(task.name)}
                        key={task.name} task={task}/>)
                }
            </div>
            <div className="progress">{state.done} of {state.items.length} tasks completed</div>
        </>
    );
}
