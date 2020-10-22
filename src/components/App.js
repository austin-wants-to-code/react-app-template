import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <React.Fragment>
       <h1>Application</h1>
       <p>Text</p>
      </React.Fragment>
    );
  }
}

export {
  App as default,
};