window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
function submitForm() {
    var fullName = document.getElementById('Full Name').value;
    var emailAddress = document.getElementById('Email Address').value;
    var phoneNumber = document.getElementById('Phone Number').value;
    var emailSubject = document.getElementById('Email Subject').value;
    var message = document.getElementById('Your Message').value;

    var mailtoLink = `mailto:maknimedamin8@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=Full%20Name:%20${encodeURIComponent(fullName)}%0AEmail%20Address:%20${encodeURIComponent(emailAddress)}%0APhone%20Number:%20${encodeURIComponent(phoneNumber)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    console.log('mail sent');
}
