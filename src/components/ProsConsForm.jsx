import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const ProsConsAddForm = (props) => {
    const [inputval, setinputval] = useState('')

    const submit = (event) => {
        event.preventDefault();
        let item = {
            id: nanoid(),
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
            <input type='text' value={inputval} onChange={changeInputVal} />
            <input type={'submit'} value={'➕'} />
        </form>
    )
}

ProsConsAddForm.propTypes = {
    additem: PropTypes.func,
};

export default ProsConsAddForm