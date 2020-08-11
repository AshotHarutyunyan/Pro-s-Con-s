import React from 'react';
import ProsConsContainer from './components/ProsConsContainer';

const App = (props) => {
    return(
        <div className="container">
        <div className="prosconsContainer">
          <h1>Should I ... ?</h1>
          <div className="dFlex">
            <ProsConsContainer title={"Pro's"} type={'pros'} />
            <ProsConsContainer title={"Con's"} type={'cons'} />
          </div>
        </div>
      </div>
    )
}

export default App