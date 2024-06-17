const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('', function(req, res, next) {
    return res.json({ items: Item.findAll() });
});

router.post('', function(req, res, next) {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({item: newItem});
});

router.get('/:name', function(req, res, next) {
    let foundItem = Item.find(req.params.name);
    return res.json({item:foundItem});
});

router.patch('/:name', function(req, res, next) {
      let foundItem = Item.update(req.params.name, req.body);
      return res.json({ item: foundItem });
});
  
router.delete('/:name', function(req, res, next) {
      Item.remove(req.params.name);
      return res.json({message:'Item Deleted'});
});

module.exports = router;
