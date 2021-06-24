import React from 'react'; 
import './App.css'; 
import Router from "./Router"; 
import { render } from '@testing-library/react';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router/>
    </div>
    ); 
  }
}

export default App;
