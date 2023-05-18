/** @format */

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className='todo-input'
    />
  );
}

export default Input;
