import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from '../components/form.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" />
            <h1> Pushabutton, MakeZeeGrps </h1>
            <Form/>        
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;