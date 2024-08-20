let signUp = document.querySelector('.signUpBtn');
let signIn = document.querySelector('.signInBtn');
let namE = document.querySelector('.name');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signIn.addEventListener('click', () => {
    namE.style.maxHeight ='0';
    title.innerHTML ='Sign In';
    text.innerHTML ='Forgotten Password';
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
})

signUp.addEventListener('click', () => {
    namE.style.maxHeight ='60px';
    title.innerHTML ='Sign Up';
    text.innerHTML ='Password Suggestions';
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
})