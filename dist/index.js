'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _serviceAccount = require('./service-account.json');

var serviceAccount = _interopRequireWildcard(_serviceAccount);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var admin = require("firebase-admin");

//var serviceAccount = require("path/to/serviceAccountKey.json");

var firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://demigod-3bd86.firebaseio.com"
});
console.log(firebase.name);
var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('homepage');
});

app.get('/test', function (req, res) {
  res.send('test page');
});

app.listen(3000, function () {
  return console.log('app is running on port :3000');
});