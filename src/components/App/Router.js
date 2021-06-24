import React from "react"; 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'; 
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import { render } from '@testing-library/react';

const business = { 
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };

  const businesses = [
    business,
    business,
    business,
    business,
    business,
    business
  ]

class Router extends React.Component {
    searchYelp(term,location, sortBy) {
        alert(`Searching Yelp with ${term}, ${location}, ${sortBy}`); 
      }
      render() {
        return (
          <div className="App">
              <BrowserRouter>
                <Switch>
                    <Route exact path="/home"> 
                        <h1>Welcome to Adoumie Recipes!</h1>
                        <SearchBar searchYelp = {this.searchYelp}/>
                        <BusinessList bussList = {businesses}/>
                    </Route>
                    <Route exact path ="/guestlogin">
                        Home
                    </Route>
                </Switch>
            </BrowserRouter>  
        </div>
        ); 
      }
    };

export default Router; 