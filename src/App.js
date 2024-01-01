import React from "react";
import AllIssuePage from "./components/AllIssuesPage";
import { BrowserRouter, Route,Switch ,NavLink} from 'react-router-dom';
import NotFound from "./components/NotFound";
import AddIssue from "./components/AddIssue";
import IssueDetails from "./components/IssueDetails";
import { IssueProvider } from "./components/IssueContext";
import Delete from "./components/Delete";
import Update from "./components/Update";


export default class App extends React.Component {

  render() {
    return (
      <IssueProvider>
      <BrowserRouter>
      <nav className="navbar bg-secondary">
        <div className="container"> 
        <div></div>
          <div className="nav-elements">
          <ul>
            <li>
              <NavLink to = "/" style={{paddingRight : "2rem"}}>About</NavLink>
            </li>
            <li>
            <NavLink to = "/issues">issues</NavLink>
            </li>
          </ul>
          </div>
          <div></div>
        </div>
      </nav>

        <div>
            <Switch>
              <Route exact  path = "/"   render={() => <h3>About: This application is used to track of issues raised</h3> }/>
              <Route exact path = "/issues"  component={AllIssuePage}/>
              <Route exact path= "/addIssues" component={AddIssue} />
              <Route exact path= '/issues/issueDetails/:id'  component = {IssueDetails}/>
              <Route exact path= '/issues/delete/:id'  component = {Delete}/>
              <Route exact path= '/issues/update/:id'  component = {Update}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </BrowserRouter>
      </IssueProvider>
    
    )
  }
}
