
import express from "express";
import { getIssues, deleteIssue, addIssue,issueDetails,updateIssue} from "../controller/controller.js";

const router  = express.Router();

router.get("/",getIssues);
router.get("/issueDetails/:id",issueDetails);
router.delete("/delete/:id",deleteIssue);
router.put("/update/:id",updateIssue);
router.post("/addIssue",addIssue);

export default router; 


















/*

let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  

let issueSchema = require("../models/model")
  

router.post("/addIssues", (req, res, next) => {
  issueSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.get("/", (req, res) => {
    issueSchema.find((error, data) => {
      if (error) {
        return error;
      } else {
        res.json(data);
      }
    });
  });
    
/*
  router
    .route("/update-student/:id")
    // Get Single Student
    .get((req, res) => {
      studentSchema.findById(
          req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    })

    // Update Student Data
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Student updated successfully !");
        }
      }
    );
  });
  // Delete Student
router.delete("/delete-student/:id", 
(req, res, next) => {
  studentSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
}); 
  
module.exports = router;
*/
