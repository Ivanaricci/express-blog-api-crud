// importo express
const express = require('express');

// importo la classe router
const router = express.Router();

// importo il controller
const postController = require('../controllers/postController.js');


// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);


// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

// esporto il router dei post
module.exports = router;