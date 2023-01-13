const hamburgerButton = document.querySelector('#hamburgerButton');
const navigationDrawer = document.querySelector('#navigationDrawer');
const content = document.querySelector('#mainContent');

hamburgerButton.addEventListener('click', (event)=>{
    navigationDrawer.classList.add('open');
});

content.addEventListener('click', (event) =>{
    navigationDrawer.classList.remove('open');
})