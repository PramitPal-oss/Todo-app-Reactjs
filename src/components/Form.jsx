/** @format */
import { useState } from 'react';
import Input from './Input';
import '../index.css';

function Form({ formData, setFormData, setFilter }) {
  const [input, setInput] = useState('');

  const submitHandler = function (e) {
    e.preventDefault();
    if (input.length === 0) return;
    setFormData([
      ...formData,
      {
        text: input,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInput('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        type='text'
        className='todo-input'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select
          name='todos'
          className='filter-todo'
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
