import React, { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";

const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return currentUser ? <h1>Welcome {currentUser.firstName}</h1> : <h1>Home</h1>
}

export default Home;