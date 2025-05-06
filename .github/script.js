document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const firstName = document.getElementById('first-name').value;
    const secondName = document.getElementById('second-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    document.getElementById('form-output').innerHTML = `
    <h3>Thank you for your message!</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Second Name:</strong> ${secondName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  