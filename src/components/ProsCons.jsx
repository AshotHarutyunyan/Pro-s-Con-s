import React from 'react';
import ProsConsAddForm from './ProsConsForm';
import ProsConsItem from './ProsConsItem';
import PropTypes from 'prop-types';

const ProsCons = ({title,items_data,addItem,deleteItem}) => {

    let items = items_data.map(item => <ProsConsItem text={item.text} key={item.id} id={item.id} deleteitem={deleteItem}/>);

    return (
        <div className={'prosCons'}>
            <h2>{title}</h2>
            <div className="content">{items}</div>
            <ProsConsAddForm additem={addItem} />
        </div>
    )
}
ProsCons.propTypes = {
    deleteitem: PropTypes.func,
    additem: PropTypes.func,
    title: PropTypes.string,
    items_data: PropTypes.array
  };
  
export default ProsCons;