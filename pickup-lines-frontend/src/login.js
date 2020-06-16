const loginForm = document.querySelector('.login-container form')
console.log(loginForm)
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('click')

  const username = document.querySelector("input[name='username']").value
  const password = document.querySelector("input[name='password']").value

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username, 
      password: password
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log(json)
    if (json.message === "success") {
      window.location.href = './index.html'
    } else {
      alert('incorrect username or password');
      form.reset();
    }
  })
})

const createAccount = document.querySelector('.create-account')
createAccount.addEventListener('click', () => {
  window.location.href = './createAccount.html'
})