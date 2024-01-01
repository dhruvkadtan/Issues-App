import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";





const IssueDetails = ({match}) => {

    const [issue,setIssue] = useState({})

    const fetchDetails = async() =>{
       const response= await axios.get(`http://localhost:3000/issues/issueDetails/${match.params.id}`);

        setIssue(response.data[0]);
    }   
    
    useState(() => {
        fetchDetails();
    },[])
    
        return(
            <div className="container-xxl">
            <div className="container">
                <div className="text-center mx-auto mb-5 mt-3">
                    <h3 className="text-secondary">Issue Detail</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                        <div className="row">
                            <div className="col-12 mb-2 text-secondary fw-bold">
                                <div className="row border border-2 border-secondary">
                                    <div className="col-md-6"><h4>Issue Description :</h4></div>
                                        <div className="col-md-6"><h4>{issue.Description}</h4></div>   
                                </div>
                            </div>
                            <div className="col-12 mb-2 text-secondary fw-bold">
                                <div className="row border border-2 border-secondary">
                                    <div className="col-md-6"><h4>Issue Status :</h4></div>
                                        <div className="col-md-6"><h4>{issue.Status}</h4></div>   
                                </div>
                            </div>
                            <div className="col-12 mb-2 text-secondary fw-bold">
                                <div className="row border border-2 border-secondary">
                                    <div className="col-md-6"><h4>Issue Severity :</h4></div>
                                        <div className="col-md-6"><h4>{issue.Severity}</h4></div>   
                                </div>
                            </div>
                            <div className="col-12 mb-2 text-secondary fw-bold">
                                <div className="row border border-2 border-secondary">
                                    <div className="col-md-6"><h4>Issue CreatedDate :</h4></div>
                                        <div className="col-md-6"><h4>{issue.CreatedDate}</h4></div>   
                                </div>
                            </div>
                            <div className="col-12 mb-2 text-secondary fw-bold">
                                <div className="row border border-2 border-secondary">
                                    <div className="col-md-6"><h4>Issue ResolvedDate :</h4></div>
                                        <div className="col-md-6"><h4>{issue.CreatedDate}</h4></div>   
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <NavLink className="form-control btn btn-secondary rounded-pill fw-bold" to="/issues">Back</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    
}

export default IssueDetails;