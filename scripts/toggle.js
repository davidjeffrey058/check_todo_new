const loginLink = document.querySelector(".to-login");
const signUpLink = document.querySelector(".to-sign-up");

signUpLink.addEventListener('click', ()=>{
    document.querySelector('.sign-up-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.auth-title').innerHTML = 'Sign Up';
})

loginLink.addEventListener('click', ()=>{
    document.querySelector('.sign-up-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.auth-title').innerHTML = 'Login';
})