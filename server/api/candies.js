const router = require('express').Router();
const { db, Candy } = require('../db');

router.get('/', async (req, res, next) => {
  const candies = await Candy.findAll();
  res.json(candies);
});
