import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import {
  faCheckCircle,
  faEdit,
  faCircleMinus
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoList = ({ todo, setTodo, setEditTodo, value }) => {
  const handleComplete = onetodo => {
    setTodo(
      todo.map(item => {
        if (item.id === onetodo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find(onetodo => onetodo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    todo.filter(todo => todo.id !== id);
  };

  const selectedDateData = todo.filter(
    onetodo =>
      onetodo.day === value.getDate() && onetodo.month === value.getMonth() + 1
  );
  console.log(selectedDateData);
  return (
    <div>
      {selectedDateData.map(onetodo => (
        <li className="list-item" key={onetodo.id}>
          <button
            className="button-complete task-button"
            onClick={() => handleComplete(onetodo)}
          >
            <FontAwesomeIcon
              icon={onetodo.completed ? faCheckCircle : faCircle}
            />
          </button>
          <input
            type="text"
            value={onetodo.title}
            className={`list ${onetodo.completed ? 'complete' : ''}`}
            onChange={e => e.preventDefault()}
          />
          <div className="buttons">
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(onetodo)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(onetodo)}
            >
              <FontAwesomeIcon icon={faCircleMinus} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default TodoList;
