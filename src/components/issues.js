
import { Link} from "react-router-dom";


const Issues = ({_id,Description,Severity,Status,CreatedDate,ResolvedDate,statusCheck,sevCheck,creCheck,resCheck}) => {
    const updateCond = {pathname: `/issues/update/${_id}`, state: {_id}};
    const delCond = {pathname: `/issues/delete/${_id}`, state: {_id}};
    const detailsCond = {pathname: `/issues/issueDetails/${_id} `,state:{_id}};

    
        return (
            <div className="card mt-3 mb-3 bg-secondary "> 
            <div className="row mt-3 text-center">   
                
                        <div className="col"><Link className="text-white" to={detailsCond}>
                            {Description}
                            </Link></div>
                        {sevCheck === true ? <div className="col text-white">{Severity}</div> :<></> }
                        {statusCheck === true ? <div className="col text-white">{Status}</div> :<></> }
                        {creCheck === true ? <div className="col text-white">{CreatedDate}</div> :<></> }
                        {resCheck === true ? <div className="col text-white">{ResolvedDate}</div> :<></> }
                        <div className="col"><Link className="text-white" to={updateCond}>Update</Link></div>
                        <div className="col"><Link className="text-white" to={delCond}>Delete</Link></div>
                
            </div>
            </div>
        )
    
}   

export default Issues;