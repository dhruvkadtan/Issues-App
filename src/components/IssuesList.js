import React from "react"; 
import Issues from "./issues";
import "../App.css"

export default class IssueList extends React.Component{

    constructor(props) {
        super();
       
    }
    render() {
        let issueNodes = this.props.issues.map(issue => (
            <Issues key={issue._id} _id ={issue._id} Description = {issue.Description}
             Severity = {issue.Severity} Status = {issue.Status} CreatedDate={issue.CreatedDate}
                ResolvedDate={issue.ResolvedDate}  
                statusCheck={this.props.statusCheck} sevCheck={this.props.sevCheck}
                creCheck={this.props.creCheck}  resCheck={this.props.resCheck}/>
        ))
        return (
        <>      <div className="card mt-3 mb-3  bg-secondary"> 
                    <div className="row text-center fw-bold">                                                     
                        <div className="col text-white">Desciption</div>
                        {this.props.sevCheck === true ? <div className="col text-white">Severity</div> :<></> }
                        {this.props.statusCheck === true ? <div className="col text-white">Status</div> :<></> }
                        {this.props.creCheck === true ? <div className="col text-white">CreatedDate</div> :<></> }
                        {this.props.resCheck === true ? <div className="col text-white">ResolvedDate</div> :<></> }
                        <div className="col text-white">Update</div>
                        <div className="col text-white">Delete</div>
                    </div>
                </div>   
                {issueNodes}
        </>

        )
    }
}