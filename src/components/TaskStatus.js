import React from 'react';

function TaskStatus(props) {

    function handleStatusClick(event) {
        props.onStatus(event)
    }

    return (
        <>
            <div className="todo__status">
                <h2 className="todo__title">Current tasks status</h2>
                <select onChange={handleStatusClick} name="total" className="todo__dropdown">
                    <option value="all" className="todo__option">All</option>
                    <option value="complited" className="todo__option">Complited</option>
                    <option value="uncomplited" className="todo__option">Uncomplited</option>
                </select>
            </div>
        </>
    );
}

export default TaskStatus;