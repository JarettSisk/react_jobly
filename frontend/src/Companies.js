import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
// API
import JoblyApi from "./api";

const Companies = () => {

  // Company state
  const [companies, setCompanies] = useState(null); 
  // get and set comanies
  useEffect(() => {
    const getCompanies = async () => {
      const res = await JoblyApi.getAllCompanies();
      setCompanies(res);
    }
    getCompanies()

  }, [])
  

  const renderCompanies = () => {
    return companies.map((c, idx) => {
      return <CompanyCard 
      key={idx}
      handle={c.handle} 
      name={c.name} 
      description={c.description} 
      logoUrl={c.logoUrl} 
      numEmployees={c.numEmployees}
      />
    })
  }

    return (
    <div className="Companies">
      {companies ? renderCompanies() : <h2>Loading</h2>}
    </div>
    )
  }

export default Companies;