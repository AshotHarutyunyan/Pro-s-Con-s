import React from 'react';
import PropTypes from 'prop-types';

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

ProsConsItem.propTypes = {
    deleteitem: PropTypes.func,
    id: PropTypes.string
};

export default ProsConsItem