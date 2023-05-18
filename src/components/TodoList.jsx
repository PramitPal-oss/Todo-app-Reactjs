/** @format */

import Todo from './Todo';

function TodoList({ formData, setFormData, filterData, setFilerData }) {
  const checkHandler = function (e) {
    setFormData(
      formData.map((el) => {
        if (el.id === e) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  const deletHandler = function (e) {
    setFilerData(filterData.filter((el) => el.id !== e));
    setFormData(formData.filter((el) => el.id !== e));
  };

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterData.map((el) => {
          return (
            <Todo
              text={el.text}
              key={el.id}
              onClickCheck={() => checkHandler(el.id)}
              onClickDelete={() => deletHandler(el.id)}
              className={el.completed ? 'completed' : ''}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
