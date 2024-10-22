;(function () {
  emailjs.init('bcvfasKi4yNlKXlK0')
})()

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()

  const firstName = document.getElementById('first-name').value
  const lastName = document.getElementById('last-name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const projectDetails = document.getElementById('project-details').value

  const interestElements = document.querySelectorAll(
    'input[name="interest"]:checked'
  )
  const interests =
    Array.from(interestElements)
      .map((checkbox) => checkbox.value)
      .join(', ') || 'Tidak ada minat yang dipilih.'

  const templateParams = {
    first_name: firstName || 'N/A',
    last_name: lastName || 'N/A',
    email: email || 'N/A',
    interests: interests,
    project_details: projectDetails || 'Tidak ada detail proyek.',
    message: message || 'Tidak ada pesan.',
  }

  const emailResponElement = document.querySelector('.email-respon')

  const form = document.querySelector('form')

  emailjs.send('service_8t0e3y2', 'template_68yvm5n', templateParams).then(
    function (response) {
      emailResponElement.innerHTML = `<p>Pesan berhasil dikirim!</p>`

      form.reset()
    },
    function (error) {
      emailResponElement.innerHTML = `<p>Gagal mengirim pesan. Silakan coba lagi.</p>`

      form.reset()
    }
  )
})
