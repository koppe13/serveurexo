const express = require('express');
const router = express.Router();
const auth = require ('../Middleware/auth');
const multer = require('../Middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');



router.get('/', auth, stuffCtrl.getAllThing);
router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);


  module.exports = router;