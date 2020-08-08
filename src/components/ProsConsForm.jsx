import React, {useState} from 'react'
const ProsConsAddForm = (props) => {
    const [inputval, setinputval] = useState('')
    const submit = (event) => {
        event.preventDefault();
        let item = {
            id: props.nextItemId,
            text: inputval
        }
        props.additem(item)
        setinputval('')
    }
    const changeInputVal = (event) => {
        let text = event.target.value;
        setinputval(text)
    };
    return (
        <form onSubmit={submit} className="addProsConsForm">
            <input type={'text'} value={inputval} onChange={changeInputVal}></input>
            <input type={'submit'} value={'➕'}></input>
        </form>
    )
}

export default ProsConsAddForm