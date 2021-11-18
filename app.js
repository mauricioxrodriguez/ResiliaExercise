var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));

/**
 * API
 */
app.get('/api/getNotifications', function (req, res, next) {
  var data = [
    {
        notificationId: 1,
        notificationMesssage: 'Your request for admission has been granted',
        notificationStatus: 'Granted',
        user: 'John Doe',
        requestDate: '10/10/2021',
        requestType: 'PTO'
    },
    {
        notificationId: 2,
        notificationMesssage: 'Your request for admission has been denied. Contact Customer Support for further assistance.',
        notificationStatus: 'Denied',
        user: 'Jane Doe',
        requestDate: '10/11/2021',
        requestType: 'Grievance'
    },{
        notificationId: 3,
        notificationMesssage: 'Your request for admission has been partially granted.',
        notificationStatus: 'Partially Granted',
        user: 'Mary Doe',
        requestDate: '10/12/2021',
        requestType: 'LOA'
    },{
        notificationId: 4,
        notificationMesssage: 'Your request for admission has been put on hold. Contact customer support for a detailed explanation of next steps.',
        notificationStatus: 'Hold',
        user: 'Tom Doe',
        requestDate: '10/13/2021',
        requestType: 'JURY DUTY'
    },{
        notificationId: 5,
        notificationMesssage: 'Your request for admission has been granted',
        notificationStatus: 'Granted',
        user: 'Timothy Jones',
        requestDate: '10/20/2021',
        requestType: 'Grievance'
    },{
        notificationId: 6,
        notificationMesssage: 'Your request for admission has been granted',
        notificationStatus: 'Granted',
        user: 'Ronald Smith',
        requestDate: '10/30/2021',
        requestType: 'PTO'
    },{
        notificationId: 7,
        notificationMesssage: 'Your request for admission has been partially granted',
        notificationStatus: 'Partially Granted',
        user: 'John Doe',
        requestDate: '10/10/2021',
        requestType: 'OTHER'
    },{
        notificationId: 8,
        notificationMesssage: 'Your request for admission has been granted',
        notificationStatus: 'Granted',
        user: 'Samuel Jackson',
        requestDate: '09/10/2021',
        requestType: 'LOA'
    },
  ];
  res.status(200).send(data);
});

app.post('/api/', function (req, res, next) {
  var data = req.body;
  // query a database and save data
  res.status(200).send(data);
});


module.exports = app;