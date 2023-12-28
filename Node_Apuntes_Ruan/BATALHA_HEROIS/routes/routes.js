//const express = require('express');
import express from 'express'

const router = express.Router();

//const heroController = require('../controllers');
import { cadastrarHeroi, cadastrarVilao, batalhar } from '../controllers/controllers.js'

router.post('/heroi', cadastrarHeroi);
router.post('/vilao', cadastrarVilao);
router.post('/batalha', batalhar);

export default router;
