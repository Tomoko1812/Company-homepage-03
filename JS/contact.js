document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

document.querySelector('.live-chat').addEventListener('click', () => {
    alert('Our live chat service will be available soon. Thank you for your patience!');
});
