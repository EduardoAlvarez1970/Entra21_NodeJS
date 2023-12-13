const express = require('express');

const router = express.Router();

const heroController = require('./controllers');

router.post('/heroi', heroController.cadastrarHeroi);
router.post('/vilao', heroController.cadastrarVilao);
router.post('/batalha', heroController.batalhar);

module.exports = router;
