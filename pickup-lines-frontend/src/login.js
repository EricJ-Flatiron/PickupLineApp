const createAccount = `
  <div class="create-account-container">
    <div class="please-login">New Account</div>
    <form id="new-account-form">
      
      <label for="username"><b>Username:</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>
      <br><br><br>
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>
      <br><br>
      <button type="submit">Create Account</button>
    </form>
  </div>
`

const createAccountBtn = document.querySelector('#create'); 
const authContainer = document.querySelector('.auth-container');
createAccountBtn.addEventListener('click', () => {
  authContainer.textContent = ''
  authContainer.innerHTML = createAccount

  const createUser = document.querySelector('#new-account-form')
  createUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector("input[name='username']").value
    const password = document.querySelector("input[name='password']").value
  
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username, 
        password: password,
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      window.location.href = './index.html'
    })
  })
})

const loginForm = document.querySelector('.login-container form')
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
    window.location.href = './index.html'
    
  })
})

