import React, { useState } from "react";


function TodoForm(props){

    const[text, setText] = useState("");
    // const[items, setItems] = useState([]);

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();//o preventDefault previne o comportamento default do botão (ele faz com que a página não seja atualizada de forma que perdemos o que digitamos no input da lista).
        if (text){
            // setItems([...items, text]);

            props.onAddItem(text);
            setText("");
        }
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}


export default TodoForm;