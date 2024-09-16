const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/usermodel");  
const router = express.Router();

 
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const userAdded = await User.create({ name, email, age });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

 
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
const singleuser = await User.findById({_id : id});
      res.status(200).json(singleuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });



  router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
const Delelteuser = await User.findByIdAndDelete({_id : id});
      res.status(200).json(Delelteuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });


  router.patch("/:id", async (req, res) => {
    const {id} = req.params;
    const {name,email,age} = req.body;
    try {
const Updateuser = await User.findByIdAndUpdate(id,req.body,{
    new:true,
});
      res.status(200).json(Updateuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;  
