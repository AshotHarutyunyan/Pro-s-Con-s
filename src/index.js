import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ProsCons from './components/ProsCons';

const Index = (props) => {
  const initialState = {
    pros: [],
    cons: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'addpros':
        return {
          ...state,
          pros: [...state.pros, action.pros]
        };
      case 'addcons':
        return {
          ...state,
          cons: [...state.cons, action.cons]
        };
      case 'deletepros':
        return {
          ...state,
          pros: state.pros.filter(item => item.id !== action.id),
        };
      case 'deletecons':
        return {
          ...state,
          cons: state.cons.filter(item => item.id !== action.id),
        };
      default:
        throw new Error();
    }
  }
  let [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div className="container">
      <div className="prosconsContainer">
        <h1>Should I ... ?</h1>
        <div className="dFlex">
          <ProsCons title={`Pro's`} state={state.pros} 
            additem={(pros) => dispatch({ type: 'addpros', pros })}
            deleteitem={(id) => dispatch({ type: 'deletepros', id })} />
          <ProsCons title={"Con's"} state={state.cons}
            additem={(cons) => dispatch({ type: 'addcons', cons })}
            deleteitem={(id) => dispatch({ type: 'deletecons', id })}  />
        </div>
      </div>
    </div>
  );
}



// ========================================

ReactDOM.render(<Index />, document.getElementById("root"));

