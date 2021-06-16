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
  size: String,
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
    contact: req.body.contact,
    size: req.body.size
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
    let properties = await Property.find({
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


router.get("/all", async (req, res) => {
    try {
        let properties = await Property.find().sort({
            created: -1
        }).populate('user');
        return res.send(properties);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let property = await Property.findOne({
            _id: req.params.id
        }).populate('user');
        return res.send(property);
    } catch(error) {
        console.log(error);
        return res.sendstatus(500);
    }
});

router.delete("/:id", validUser, async (req, res) => {
    try {
        await Property.deleteOne({
            _id: req.params.id
        });

        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = {
    model: Property,
    routes: router
}
