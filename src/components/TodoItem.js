import React from 'react';
import { DeleteButton } from '../images';
import { EditButton } from '../images';
import { DuplicateButton } from '../images';

function TodoItem(props) {


    function handleDeleteClick() {
        props.onDelete(props.todo)
    }

    function handleDuplicateClick() {
        props.onDuplicate(props.todo.text)
    }

    function handleEditClick() {
        props.onEdit(props.todo.text, props.todo.id)
    }

    function handleToggle() {
        props.onToggle(props.id)
    }

    return (
        <li className="todo" id={props.id}>
            <input type="checkbox" 
                    className="todo__checkbox" 
                    onChange={handleToggle}/>
            <p className="todo__text">{props.todo.text}</p>
            <button className="todo__btn todo__btn_type_edit button"
                    title="Добавить"
                    onClick={handleEditClick}>
                <EditButton />
            </button>
            <button className="todo__btn todo__btn_type_duplicate button"
                    onClick={handleDuplicateClick}
                    title="Копировать">
                <DuplicateButton />
            </button>
            <button className="todo__btn todo__btn_type_delete button"
                    onClick={handleDeleteClick}
                    title="Удалить">
                <DeleteButton />
            </button>
        </li>
    )
}

export default TodoItem;