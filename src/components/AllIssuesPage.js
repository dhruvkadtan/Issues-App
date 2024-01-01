import React from "react";
import issueApi from "../data/issueApi";
import IssueList from "./IssuesList";
import { NavLink} from "react-router-dom";
import { IssueContext } from "./IssueContext";
import "../App.css";

export default class AllIssuePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search : "",
            filtered : [],
            statusCheck : true,
            sevCheck : true,
            creCheck : true,
            resCheck : true,
        }
    }

    issues = [];
    static contextType = IssueContext;
    handleChange = (e) => {
        this.setState({search : e.target.value})
        if(this.state.search !== '') {
            const temp = this.issues.filter (
                (issue) => {
                    return Object.values(issue).join('').toLowerCase().includes(this.state.search.toLowerCase());
                }
            )
            this.setState({filtered:temp});
        } else {
            this.setState({filtered : this.issues});
        }
    }

    getAll = async () => {
        const initialIssues = await issueApi.getAllIssues();
        this.context.initIssues(initialIssues);
        this.issues = initialIssues;
    }

    async componentDidMount() {
        
        this.getAll();
        
    }
    render() {
        return(
            <div className="container-fluid">
                <div>
                    <h2 className="h2 mt-3 mb-3 text-secondary">Issues List</h2>
                <div className="row ">
                    <div className="col-md-4 mb-2">
                        <input  type="text" onChange={this.handleChange} placeholder="Search Here..."/> 
                    </div>
                    <div className="col-md-4 mb-2"></div>
                    <div className="col-md-2 mb-2">
                        <NavLink className="btn bg-secondary fw-bold text-white" exact to = "/addIssues" >Add Issues</NavLink>
                    </div>
                    <div className="col-md-2 mb-2">
                        <button className="btn dropdown-toggle bg-secondary text-white fw-bold"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdownMenuLink"> 
                            Custom Fields
                        </button>
                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                            
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        id="status"
                                        checked={this.state.statusCheck}
                                        onChange={(e) => this.setState({statusCheck:e.target.checked})}
                                    />
                                    <label className="form-check-label" htmlFor="status">
                                        Status
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        id="severity"
                                        checked={this.state.sevCheck}
                                        onChange={(e) => this.setState({sevCheck:e.target.checked})}
                                    />
                                    <label className="form-check-label" htmlFor="severity">
                                        Severity
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        id="createdDate"
                                        checked={this.state.creCheck}
                                        onChange={(e) => this.setState({creCheck:e.target.checked})}
                                    />
                                    <label className="form-check-label" htmlFor="createdDate">
                                        Created Date
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        id="resolvedDate"
                                        checked={this.state.resCheck}
                                        onChange={(e) => this.setState({resCheck:e.target.checked})}
                                    />
                                    <label className="form-check-label" htmlFor="resolvedDate">
                                        Resolved Date
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.state.search.length > 1 ? (<IssueList issues={this.state.filtered}
                                                            statusCheck={this.state.statusCheck}
                                                            sevCheck={this.state.sevCheck}
                                                            creCheck={this.state.creCheck}
                                                            resCheck={this.state.resCheck}/>)
                                             : (<IssueList issues={this.issues}
                                                statusCheck={this.state.statusCheck}
                                                sevCheck={this.state.sevCheck}
                                                creCheck={this.state.creCheck}
                                                resCheck={this.state.resCheck}/>)}
                
                </div>
            </div>
        )   
    }

}
