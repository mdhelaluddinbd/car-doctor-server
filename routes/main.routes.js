const express=require('express');
const router=express.Router();
const serviceController=require('../controllers/controller.services/controller.service');

const getService=serviceController.serviceGetRequest;


router.get('/services',getService);


module.exports =router;