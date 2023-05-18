/** @format */
import { useState, useEffect } from 'react';
import './index.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const getData = function () {
  const data = localStorage.getItem('todos');

  if (data) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState(getData());
  const [filter, setFilter] = useState('all');
  const [filterData, setFilerData] = useState(getData());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(formData));
    if (filter === 'all') {
      setFilerData(formData);
    }
  }, [formData]);

  const filterHandler = function () {
    let arr = [];
    for (let i = 0; i < formData.length; i++) {
      if (filter === 'all') {
        arr.push(formData[i]);
      } else if (filter === 'completed') {
        formData[i].completed && arr.push(formData[i]);
      } else if (filter === 'uncompleted') {
        !formData[i].completed && arr.push(formData[i]);
      }
    }
    return arr;
  };

  useEffect(() => {
    setFilerData(filterHandler());
  }, [filter]);

  return (
    <div className='App'>
      <header>
        <h1> PP&apos;s Todo List</h1>
      </header>
      <Form
        formData={formData}
        setFormData={setFormData}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        formData={formData}
        setFormData={setFormData}
        filterData={filterData}
        setFilerData={setFilerData}
      />
    </div>
  );
}

export default App;
