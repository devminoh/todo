import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';

const Todo = ({
  input,
  setInput,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
  value,
  setValue
}) => {
  //let uncomplete = todo.filter(one=> !one.completed)
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, []);

  return (
    <div className="todo">
      <article className="todo-content">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            value={value}
            setValue={setValue}
          />
        </div>
        {/* <div className='uncompleted'>할 일 {uncomplete.length} 개 남음</div> */}
        <div>
          <TodoList
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            value={value}
            setValue={setValue}
          />
        </div>
      </article>
    </div>
  );
};

export default Todo;
