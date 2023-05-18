/** @format */

function Todo(props) {
  //completed
  return (
    <div className='todo'>
      <li className={props.className}>{props.text}</li>
      <button className='complete-btn' onClick={props.onClickCheck}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={props.onClickDelete}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}

export default Todo;
