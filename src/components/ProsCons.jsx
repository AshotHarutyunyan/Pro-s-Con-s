import React from 'react'
import ProsConsItem from './ProsConsItem';
import ProsConsAddForm from './ProsConsForm';
const ProsCons = (props) => {
    let content = props.state.map(item => <ProsConsItem text={item.text} key={item.id} id={item.id} deleteitem={props.deleteitem}/>);
    return (
        <div className={'prosCons'}>
            <h2>{props.title}</h2>
            <div className="content">{content}</div>
            <ProsConsAddForm additem={props.additem} nextItemId={props.state.length}/>
        </div>
    )
}



export default ProsCons