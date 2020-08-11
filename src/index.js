import React,{ useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { reducer,initialState } from './state/reducer';
import App from './App';


export const Maincontext = React.createContext(initialState);

const Index = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Maincontext.Provider value={[state,dispatch]} >
      <App />
    </Maincontext.Provider>

  );
}

// ========================================

ReactDOM.render(<Index />, document.getElementById("root"));

