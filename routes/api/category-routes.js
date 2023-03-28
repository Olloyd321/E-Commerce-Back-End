const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll, findOne } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then((data) =>
    res.json(data)
  ).catch((errCatch) =>
    res.status(500).json(errCatch)
  )
});

router.get('/:id', (req, res) => {
  const userDatabyId = findOne({ 
    where: {
      id: req.params.id,
  } 
}); 
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
