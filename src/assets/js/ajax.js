'use strict';

import slideNotification from './slide-notif';

 function sendRequest ({userName, userMail, userSubj, userText}) {
    const payload = {
        name: userName,
        email: userMail,
        subject: userSubj,
        subjectText: userText
    }
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: payload,
        success: function(data) {
            slideNotification();
        },
        error:  function(){
            alert('Что-то пошло не по плану');
        }
    });
}

export default sendRequest;
 