//listen for authentication state change
auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = './home.html'
  // }else if(user && !user.emailVerified){
  //   alert("Verify your email to continue")
  }
});

//signup
const signupForm = document.querySelector('.sign-up-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // const spinner = document.querySelector(".spinner1");
  // spinner.style.display = "block";

  //get the user information
  const fullname = document.querySelector('#sign-up-name').value;
  const email = signupForm['sign-up-email'].value;
  const password = signupForm['sign-up-password'].value;

  console.log(fullname);
  // signup a new user  
  auth.createUserWithEmailAndPassword(email, password).then(Credential =>{
    Credential.user.updateProfile({
      displayName : fullname
    }).catch(error => {
      alert(error.message);
    });

    //Credential.user.sendEmailVerification();
    // spinner.style.display = "none";
    // signupForm.reset();

  })
    .catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
      spinner.style.display = "none";
    });

    // auth.currentUser.sendEmailVerification()
    // .then(() => {
    //   alert("Email verification sent")
    // })
    // .catch((error) => {
    //   alert(error.message);
    // });
  
});


//login
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // const spinner = document.querySelector(".spinner");
  // spinner.style.display = "block";

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  //login the user
  const thatEmail = '';
  auth.signInWithEmailAndPassword(email, password).then(credential => {
    console.log(credential.user);

    // spinner.style.display = "none";

    loginForm.reset();
  })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);

      // spinner.style.display = "none";

      console.log(errorCode);
    });
})

