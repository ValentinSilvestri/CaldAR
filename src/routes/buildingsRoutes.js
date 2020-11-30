const express = require('express');
const buildingController = require('../controllers/buildingsController');

const router = express.Router();

// GET ALL BUILDINGS
router.get('/', buildingController.getAllBuildings);

// GET BUILDINGS BY ID
router.get('/:id', buildingController.findById);

// CREATE BUILDING
router.post('/', buildingController.createBuilding);

// DELETE BUILDINGS BY ID
router.delete('/:id', buildingController.deleteBuilding);

module.exports = router;
