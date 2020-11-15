import React, {Component} from 'react';

/**
 * The top-level React component which hosts the entire React application.
 */
class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <React.Fragment>
       <h1>Application</h1>
       <p>This is some sample text!</p>
      </React.Fragment>
    );
  }
}

export {
  App as default,
};