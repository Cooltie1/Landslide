const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const propertySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  title: String,
  description: String,
  address: String,
  price: String,
  contact: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Property = mongoose.model('Property', propertySchema);

// upload property
router.post("/", validUser, upload.single('photo'), async (req, res) => {
  // check parameters
  if (!req.file)
    return res.status(400).send({
      message: "Must upload a file."
    });

  const property = new Property({
    user: req.user,
    path: "/images/" + req.file.filename,
    title: req.body.title,
    description: req.body.description,
    address: req.body.address,
    price: req.body.price,
    contact: req.body.contact
  });
  try {
    await property.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get my properties
router.get("/", validUser, async (req, res) => {
  // return properties
  try {
    let prperties = await Property.find({
      user: req.user
    }).sort({
      created: -1
    }).populate('user');
    return res.send(properties);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
    model: Property,
    routes: router
}
