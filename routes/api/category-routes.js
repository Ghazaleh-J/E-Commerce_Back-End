const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: { model: Product },
  }).then(r => {
    res.status(200).json(r)
  })
  .catch(e => res.status(500).json(e))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: { model: Product }
  })
  .then(r => res.status(200).json(r))
  .catch(e => res.status(500).json(e))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      // TODO
    })
    .catch((err) => {
      console.log("ERROR!!!!!!!", err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: {id: req.params.id}})
  .then(data => res.json(data))
  .catch(err => res.status(400).json(err))
});

module.exports = router;
