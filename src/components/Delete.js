
import React from "react"
import { Redirect, Route } from "react-router-dom";
import axios from "axios";


const delet = async(_id) => {
    await axios.delete(`http://localhost:3000/issues/delete/${_id}`)
    .then((res) => {
        console.log(res);
    })

}


class Delete extends React.Component {

    constructor(props){
        super();
        
        if(window.confirm("Are you sure want to delete?")) {

                delet(props.location.state._id);
          
        }

       
    }   
    render() {
        return (
            <div>
            <Route>
                <Redirect to="/issues"/>
            </Route>
        </div>
        )
    }
}

export default Delete;