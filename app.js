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
  const fromAddress = 'hrAdmin@resilia.com';
  const mgrEmailAddress = 'emma.smith@resilia.com';

  var notificationsData = [
    {
        notificationId: 1,
        notificationFrom: fromAddress,
        notifictionTo: 'john.doe@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for PTO has been granted',
        notificationSubject: 'PTO Request',    
        notificationDate: '10/10/2021',
        notificationType: 'PTO'
    },
    {
        notificationId: 2,
        notificationFrom: fromAddress,
        notifictionTo: 'jane.doe@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for grievance has been denied. Contact Customer Support for further assistance.',
        notificationSubject: 'Grievance Submission',   
        notificationDate: '10/11/2021',
        notificationType: 'G'
    },{
        notificationId: 3,
        notificationFrom: fromAddress,
        notifictionTo: 'mary.doe@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for admission has been partially granted.',
        notificationSubject: 'Request Admission',    
        notificationDate: '10/12/2021',
        notificationType: 'RA'
    },{
        notificationId: 4,
        notificationFrom: fromAddress,
        notifictionTo: 'tom.doe@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for Jury Duty has been put on hold. Contact customer support for a detailed explanation of next steps.',
        notificationSubject: 'Request Jury Dury',    
        notificationDate: '10/13/2021',
        notificationType: 'JD'
    },{
        notificationId: 5,
        notificationFrom: fromAddress,
        notifictionTo: 'timothy.jones@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for grievance has been granted',
        notificationSubject: 'Grievance Submission',        
        notificationDate: '10/20/2021',
        notificationType: 'G'
    },{
        notificationId: 6,
        notificationFrom: fromAddress,
        notifictionTo: 'ronald.smith@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for admission has been granted',
        notificationSubject: 'Request Admission',        
        notificationDate: '10/30/2021',
        notificationType: 'RA'
    },{
        notificationId: 7,
        notificationFrom: fromAddress,
        notifictionTo: 'jackeline.moore@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for admission has been partially granted',
        notificationSubject: 'Request Admission',    
        notificationDate: '10/10/2021',
        notificationType: 'RA'
    },{
        notificationId: 8,
        notificationFrom: fromAddress,
        notifictionTo: 'samuel.jackson@resilia.com',
        notificationCC: mgrEmailAddress,
        notificationMesssage: 'Your request for admission has been granted',
        notificationSubject: 'Request Admission',
        user: 'Samuel Jackson',
        notificationDate: '09/10/2021',
        notificationType: 'RA'
    },
  ];
  res.status(200).send(notificationsData);
});

app.post('/api/', function (req, res, next) {
  var data = req.body;
  // query a database and save data
  res.status(200).send(data);
});


module.exports = app;