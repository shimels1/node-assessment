const express = require("express");
const route = express.Router();
const Users = require("../models/user");

// list of user
route.get("/user", async(req, res) => {

    await Users.findAll().then((data)=>{
        return res.status(200).send(data);
    }).catch((err)=> {
        return res.status(200).send("there is an error in the database");
    });

});

// one user
route.get("/user/:id", async(req, res) => {
    Users.findAll({
        where: {
          id: req.params.id
        }
    }).then((data)=>{
        return res.status(200).send(data);
    }).catch((err)=> {
        return res.status(200).send("there is an error in the database");
    });

});

module.exports = route;