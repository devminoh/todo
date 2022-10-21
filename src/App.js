import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import Todo from './Todo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

function App() {
  const Main = styled.main`
    background-color: #393e46;
    min-width: 80%;
    min-height: 550px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 3px 6px 40px #000;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
  `;

  const initialState = JSON.parse(localStorage.getItem('todo') || []);
  const [todo, setTodo] = useState(initialState);
  const [input, setInput] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [value, setValue] = useState(new Date());
  // useEffect(() => {
  //   localStorage.setItem('todo', JSON.stringify(todo));
  // }, []);

  console.log(value.getDate(), value.getMonth() + 1);
  return (
    <div className="container">
      <Main>
        {
          <Todo
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            value={value}
            setValue={setValue}
          />
        }
        <article className="datepicker">
          <DatePicker
            selected={value}
            onChange={date => setValue(date)}
            inline
          />
        </article>
      </Main>
    </div>
  );
}

export default App;
