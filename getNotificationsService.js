getNoficationsData = () => {
    const request = new XMLHttpRequest();
    const url = 'http://localhost:3030/api/getNotifications';
    let errMessage = 'Errors while fetching the data!';

    fetch(url)
    .then(data => data.json())
    .then((data) => {    
        localStorage.setItem('notifications', JSON.stringify(data));
        renderNotificationsData();
        console.log(data);
    }).catch(err => {    
        renderNotificationsData();
        console.log(`${errMessage}: ${err}`);
    });
};

getNoficationsData();

renderNotificationsData = () => {    
    let htmlTable = '';
    let row, rows = '';
    let headerRow = `<tr><th>Notification ID</th><th>User Name</th><th>Date Requested</th><th>Request Type</th><th>Request Status</th></tr>`;

    if (localStorage.getItem('notifications')) {
        const notifications = JSON.parse(localStorage.getItem('notifications') || []);

        for (let notification of notifications) {
            row = `<tr><td>${notification.notificationId}</td><td>${notification.user}</td><td>${notification.requestDate}</td><td>${notification.requestType}</td><td title="${notification.notificationMesssage}">${notification.notificationStatus}</td></tr>`;
            rows += row;
        }
        
        htmlTable = `<table id="notificationsTable">${headerRow}${rows}</table>`;
        document.getElementById('notifications').innerHTML = htmlTable;
    } else {
        document.getElementById('notifications').innerHTML = `<p>There are no notifications available</p>`;
    }
}