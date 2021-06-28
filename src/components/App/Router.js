import React from "react"; 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'; 
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import AuthHome from '../../auth/AuthHome'; 
import RecipeNavbar from "../recipe/RecipeNavbar"; 
import NewRecipe from "../recipe/NewRecipe"; 
import { render } from '@testing-library/react';
import RecipeList from "../recipe/RecipeList";
import Recipe from "../recipe/Recipe";
import EditRecipe from "../recipe/EditRecipe"; 
import RecipeNav from "../Navigation/Navigation";
import {Navbar, Nav, Container} from 'react-bootstrap';

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
              <RecipeNav/>
                <Switch>
                    {this.props.user ? (
                    <div>
                    <Route exact path = "/myrecipes">
                      <RecipeList/>
                    </Route>
                    <Route exact path = "/new">
                      <NewRecipe/>
                    </Route>
                    <Route path="/recipe/:id" component={Recipe} />
                    <Route path ="/edit/:id" component={EditRecipe}/>
                    <Route exact path="/"> 
                        <RecipeNavbar/>
                        <h1>Welcome to Adoumie Recipes!</h1>
                        <SearchBar searchYelp = {this.searchYelp}/>
                        <BusinessList bussList = {businesses}/>
                    </Route>
                    </div>
                    ) : (
                        <AuthHome/>
        )};
                </Switch>
            </BrowserRouter>  
        </div>
        ); 
      }
    };

export default Router; 