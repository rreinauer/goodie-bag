const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  const candies = await Candy.findAll();
  res.json(candies);
});

router.get('/:id', async (req, res, next) => {
  const candy = await Candy.findById(req.params.id);
  res.json(candy);
});

router.put('/increase/:id', async (req, res, next) => {
  const candy = await Candy.findById(req.params.id);
  await candy.update(req.body);
  res.send();
});

router.put('/decrease/:id', async (req, res, next) => {
  const candy = await Candy.findById(req.params.id);
  await candy.update(req.body);
  res.send();
});

module.exports = router;
