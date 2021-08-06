import React, {useState} from 'react';

// onInsert를 props로 전달받음
const InsertForm = ( { onInsert } ) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // typeof : onInsert의 type을 알려줌
        if (typeof onInsert === "function") {
            onInsert(inputValue);
        }
        setInputValue("");
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input value = {inputValue} onChange = {(event) => {
                setInputValue(event.target.value)
            }} />
            <button type = "submit">등록</button>
        </form>
    )
}

export default InsertForm;