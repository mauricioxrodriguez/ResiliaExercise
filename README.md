# ResiliaExercise
Resilia Exercise
This simple exercise calls a restful API endpoint namely serverHost/api/getNotifications from a SPA written in plain vanila JS to serve an array of objects containing notifications data
payload to be rendered in the FE.

node_modules folder is added to the .gitignore file as well as the package.lock.json as usual
nodemon was installed so the server restarts every time a change in the project is detected. Ensure you refresh your brownser for any changes to take effect.
to start server from command line do $run npm start:server---> you will get a console message indicating Express server listening on port 3030

Data rendered to the FE is parsed and added to a table.
This data is stored locally on the client and will available even if connection to the server is lost. Data will be static but will be refreshed once the server is backup.

The payload that is served to the client is as follows:


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
