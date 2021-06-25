import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../services/firestore";
import Router from "../components/App/Router"; 

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((changedUser) => {
      setUser(changedUser);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

const RouterWrapper = () => {
    const user = useContext(UserContext); 
    return <Router user = {user}/>; 
}; 

export default UserContext;
export { UserProvider, RouterWrapper };