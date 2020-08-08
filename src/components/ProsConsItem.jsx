import React from 'react'

 const ProsConsItem = (props) => {
    const deletItem = () => {
        props.deleteitem(props.id)
    }
    return (
        <div className="prosConsItem">
            <p>{props.text}</p>
            <button onClick={deletItem}><span role="img" aria-label="minus">➖</span></button>
        </div>
    )
}
export default ProsConsItem