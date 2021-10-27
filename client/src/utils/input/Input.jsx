import "./input.css"

function Input(props) {
  return (
    <div >
        <input className="input" onChange={(event)=> props.setValue(event.target.value)} 
        value={props.value} 
        type={props.type} 
        placeholder={props.placeholder} />
   
    </div>
  );
}

export default Input;
