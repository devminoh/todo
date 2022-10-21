import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;

  const updateTodo = (title, id, completed, day, month) => {
    const data = { title, day, month, completed };
    const newTodo = todo.map(onetodo => (onetodo.id === id ? data : onetodo));
    setTodo(newTodo);
    setEditTodo('');
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onInputChange = e => {
    setInput(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([
        ...todo,
        { title: input, completed: false, day: day, month: month }
      ]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form className="input-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="할 일을 적어주세요!"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        <FontAwesomeIcon icon={editTodo ? faEdit : faPaperPlane} />
      </button>
    </form>
  );
};

export default Form;
