import React from 'react';
import TodoItem from './TodoItem';
import { todos as todosList } from '../utils/todos.js';
import TaskStatus from './TaskStatus';




function Section() {

    const [todos, setTodos] = React.useState(todosList);
    const [inputValue, setInputValue] = React.useState('');
    const [buttonValue, setButtonValue] = React.useState('Add');
    const [selectedId, setSelectedId] = React.useState('');
    const [status, setStatus] = React.useState('All');
    const [filtered, setFiltered] = React.useState([]);

    React.useEffect(() => {
        handleFilter();
    }, [todos, status]);

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (buttonValue === 'Add') {
            setTodos([...todos, {
                id: Date.now(),
                text: inputValue,
                completed: false
            }]);
            setInputValue('');
        } else {
            const editedTodo = todos.map(todo => {
                if (selectedId === todo.id) {
                    return {
                        ...todo,
                        id: selectedId,
                        text: inputValue,
                        completed: false
                    }
                }
                return todo;
            });
            setTodos(editedTodo);
            setInputValue('');
            setButtonValue('Add')
        }
    }

    function handleDeleteTodo(todo) {
        const newTodo = todos.filter((t) => t.id !== todo.id);
        setTodos(newTodo);
    }
    function handleDuplicateTodo(text) {
        setTodos([...todos, {
            id: Date.now(),
            text: text,
            completed: false
        }]);
    }
    function handleEditTodo(text, id) {
        setInputValue(text)
        setButtonValue('');
        setSelectedId(id)
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = todos.map(todo => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        setTodos(updatedTasks);
    }

    function handleStatus(event) {
        setStatus(event.target.value)
    }

    function handleFilter() {
        switch (status) {
            case 'completed':
                setFiltered(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFiltered(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFiltered(todos);
                break;
        }
    };

    return (
        <section className="todos">
            <form name="todo-form" className="todos__form" onSubmit={handleSubmit}>
                <input type="text"
                    name="todo"
                    className="todos__input"
                    placeholder="Next task..."
                    onChange={handleInputChange}
                    value={inputValue}
                    required
                    minLength="1"
                    maxLength="30"
                />
                <button type="submit"
                    className="todos__submit-btn button">
                    {buttonValue}
                </button>
            </form>
            <TaskStatus
                onStatus={handleStatus}
                value={status}
                onChange={handleFilter}
            />
            <ul className="todos__list">
                {filtered.map(todo => <TodoItem {...todo}
                    key={todo.id}
                    id={todo.id}
                    todo={todo}
                    text={todo.text}
                    onDelete={handleDeleteTodo}
                    onDuplicate={handleDuplicateTodo}
                    onEdit={handleEditTodo}
                    onToggle={toggleTaskCompleted}
                    filtered={filtered}
                    isChecked={todo.completed}
                />)}
            </ul>
        </section>
    )
}

export default Section;