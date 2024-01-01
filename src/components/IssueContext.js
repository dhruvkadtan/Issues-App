import React from 'react';

export const IssueContext = React.createContext();

export class IssueProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
    }

    render() {
        return (
            <IssueContext.Provider value={{
                ...this.state,
                initIssues: (issues) => this.setState({issues: issues}),
                addIssue: (issue) => this.setState(prevState => ({issues: [...prevState.issues, issue]})),
            }}>
                {this.props.children}
            </IssueContext.Provider>
        )
    }
}

export const IssueConsumer = IssueContext.Consumer;
