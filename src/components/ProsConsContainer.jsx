import React, {useContext} from 'react'
import ProsCons from './ProsCons';
import PropTypes from 'prop-types';
import {Maincontext} from '../index.js'
import { DELETE_PROS_AC, DELETE_CONS_AC,ADD_PROS_AC,ADD_CONS_AC } from '../state/ActionCreators';

const ProsConsContainer = (props) => {

    const type = props.type;
    const data = useContext(Maincontext)
    const items_data = data[0][type];

    const deleteItem = (id) => {
        if (type === 'pros'){
            data[1](DELETE_PROS_AC(id))
        }else if (type === 'cons'){
            data[1](DELETE_CONS_AC(id))
        }
    }

    const addItem = (item) => {
        if (type === 'pros'){
            data[1](ADD_PROS_AC(item))
        }else if (type === 'cons'){
            data[1](ADD_CONS_AC(item))
        }
    }

    return (
        <ProsCons title={props.title} items_data={items_data} addItem={addItem} deleteItem={deleteItem} />
    )
}


ProsConsContainer.propTypes = {
    deleteitem: PropTypes.func,
    additem: PropTypes.func,
    type: PropTypes.string
  };

export default ProsConsContainer