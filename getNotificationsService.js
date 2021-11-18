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
    let headerRow = `<tr><th>Notification From</th><th>Notification To</th><th>Notification Cc</th><th>Notification Subject</th><th>Notification Message</th></tr>`;

    if (localStorage.getItem('notifications')) {
        const notifications = JSON.parse(localStorage.getItem('notifications') || []);

        for (let notification of notifications) {
            row = `<tr><td>${notification.notificationFrom}</td><td>${notification.notifictionTo}</td><td>${notification.notificationCC}</td><td>${notification.notificationSubject}</td><td title="Notification Type: ${notification.notificationType}">${notification.notificationMesssage}</td></tr>`;
            rows += row;
        }
        
        htmlTable = `<table id="notificationsTable">${headerRow}${rows}</table>`;
        document.getElementById('notifications').innerHTML = htmlTable;
    } else {
        document.getElementById('notifications').innerHTML = `<p>There are no notifications available</p>`;
    }
}