const wrapper2=document.querySelector('.wrapper2');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');

registerlink.addEventListener('click', ()=>{
    wrapper2.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper2.classList.remove('active');
});


