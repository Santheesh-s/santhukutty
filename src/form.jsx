import { useRef} from 'react'
function Form() {
const inputRef=useRef();

const handleSubmit=(e)=>{
  e.preventDefault();
  alert(`Submitted Name: ${inputRef.current.value}`);

};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;