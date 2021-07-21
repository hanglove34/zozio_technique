var express = require('express');
var clientCtrl = require('./routes/client');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/getClientsInfos').get(clientCtrl.getClientInfos);

    return apiRouter;
})();