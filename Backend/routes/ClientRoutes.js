/* const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>  res.status(200).send({
    message:"Client"
}));

module.exports = router; */

const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { ClientController } = require('./../controllers');

router.get('/', ClientController.getClients);

module.exports = router;


