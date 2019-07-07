import React, { Component } from 'react';
// import logo from './logo.svg';
import Layout from './components/layout';

class App extends Component {
  state = {
    corps: []
  };
  render() {

    console.log("In render:");
    console.log(this.state.corps);
    return (
      <div>
        <Layout>  </Layout>
          <p>Hello World</p>
       
      </div>
    );
  }
}

export default App;
