import React from 'react'; 
import './App.css'; 
import Router from "./Router"; 
import { render } from '@testing-library/react';
import { UserProvider, RouterWrapper} from '../../context/UserContext';
import Recipe from '../recipe/Recipe';
import RecipeNav from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <RouterWrapper/>
        </UserProvider>
      </div>
    ); 
  }
}

export default App;
