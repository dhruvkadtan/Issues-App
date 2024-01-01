
import Issue from "../models/model.js";

 var issues = []

export const getIssues = async(req,res) => {
    issues = await Issue.find();
    res.send(issues);
}

export const deleteIssue = async(req,res) => {
    const id = req.params.id;
    Issue.deleteOne({_id:id})
        .then(() => {
            res.send("Deleted Successfully")})
        .catch((err) => {
            console.log(err);
            res.send({error : err,msg :"something Went Wrong"});
        })
}

export const issueDetails = async(req,res) => {
    const id  = req.params.id;
    
    Issue.findOne({_id:id})
        .then((data) => {
            
            res.send([data]);
        })
        .catch((err) => {
            console.log(err);
            res.send({error : err,msg :"something Went Wrong"});
        })
    
   
    
   
   
}
export const addIssue = async(req,res) => {
    
    await Issue.create(req.body)
        .then(async (data) => {
            res.send("Added Successfully")
        })
        .catch((err) => {
            console.log(err)
            res.send({error : err, msg : "Something Went Wrong"})
        })
    
}

export const updateIssue = async(req,res) => {
    
    await Issue.findByIdAndUpdate(req.body._id,req.body)
                .then(() => {

                    res.send("Updated Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    res.send({error : err, msg : "Something Went Wrong"})
                })
}