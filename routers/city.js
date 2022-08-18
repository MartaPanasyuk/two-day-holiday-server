const { Router } = require('express');
const router = new Router();

//Model

const City = require('../models').city;

// Get all cities
router.get('/', async (req, res, next) => {
  try {
    const cities = await City.findAll();
    res.send(cities);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
