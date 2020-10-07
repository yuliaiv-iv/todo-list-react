import React from 'react';

function TaskStatus(props) {

    return (
        <button type="button" className="button todos__submit-btn toggle-btn">
            {props.name}
        </button>
    );
}

export default TaskStatus;