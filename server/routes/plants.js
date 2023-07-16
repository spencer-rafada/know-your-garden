var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Plant = require("../models/plants");

router.get("/", (req, res, next) => {
  Plant.find()
    .then((plant) => {
      res
        .status(200)
        .json({ message: `Plants fetched successfully`, data: plant });
    })
    .catch((e) => {
      res.status(500).json({ error: error });
    });
});

router.post("/", (req, res, next) => {
  const plant = new Plant(req.body);
  plant
    .save()
    .then((createdPlant) => {
      res
        .status(201)
        .json({ message: `Plant added successfully`, data: createdPlant });
    })
    .catch((error) => {
      res.status(500).json({ message: `An error occured.`, error: error });
    });
});

router.put("/:id", (req, res, next) => {
  const objectId = new mongoose.Types.ObjectId(req.params.id);
  Plant.findOne({ _id: objectId }).then((plant) => {
    plant.name = req.body.name
    plant.scientificName = req.body.scientificName
    plant.family = req.body.family
    plant.kingdom = req.body.kingdom
    plant?.imgUrl = req.body?.imgUrl

    Plant.updateOne({ _id: objectId }, plant).then((result) => {
      res.status(204).json({message: `Plant updated successfully`})
    }).catch((error) => {
      res.status(500).json({message: `An error occured`, error: error})
    })
  }).catch((error) => {
    res.status(500).json({message: 'Plant not found'})
  })
});

router.delete();

module.exports = router