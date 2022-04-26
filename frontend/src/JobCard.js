import React, { useContext, useEffect, useState } from "react";
import "./JobCard.css";
import CurrentUserContext from "./CurrentUserContext";
import JoblyApi from "./api";
const JobCard = ({ id, title, equity, salary }) => {
  const { currentUser, getCurrentUser } = useContext(CurrentUserContext);




  const applyForJob = async () => {
    const res = await JoblyApi.submitApplication(currentUser.username, id);
    // we are getting the current user after application has been submitted
    console.log(res)
    if(res.applied) {
      getCurrentUser()
      // renderButton()
    }
  }

  const renderButton = () => {
    if(currentUser) {
      if(currentUser.applications.includes(id)) {
        return <p>Applied!!</p>
      } else {
        return <button onClick={applyForJob}>Apply</button>
      }
    }
  }


  return (
    <div className="JobCard">
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {renderButton()}
      
      
    </div>
  )
}

export default JobCard;