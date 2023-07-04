const openButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.fa-xmark');
const logoutButton = document.querySelector('.logout-btn');
const emailField = document.querySelector('.useremail');
const nameField = document.querySelector('.username');

openButton.addEventListener('click', ()=>{
    document.querySelector(".nav-drawer").style.left = "0";
});

closeButton.addEventListener('click', ()=>{
    document.querySelector(".nav-drawer").style.left = "-280px";
})

auth.onAuthStateChanged(async user =>{
    if(user){
        emailField.innerHTML = user.email;
        nameField.innerHTML = user.displayName;

        var userRef = db.collection('users').doc(user.uid).collection('task');

        userRef.onSnapshot((snapshot) =>{
            buildLayout(snapshot);
        }, (error) => {
            console.log(error);
            console.log("Couldn't retrieve data");
        })


    }else{
        window.location.href = './index.html'
    }
})

function logout(e){
    e.preventDefault();
    auth.signOut();
}
