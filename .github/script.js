document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  const output = document.getElementById('formDataDisplay')

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    output.innerHTML = `
    <h3>Thank you for contacting me!</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `

    form.reset()
  })
})
