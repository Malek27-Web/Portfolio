const mainMenu =document.querySelector('.mainMenu');
const openMenu=document.querySelector('.openMenu');
const closeMenu=document.querySelector('.closeMenu');
const faTimes=document.querySelector('.fa-times');
const faBars=document.querySelector('.fa-bars');
const main=document.querySelector('.main');
const footer=document.querySelector('footer');
const stackBtn=document.querySelector('.stack-btn');
const aboutBtn=document.querySelector('.about-btn');
const projectBtn=document.querySelector('.Project-btn');
const contactBtn=document.querySelector('.contact-btn');
const homeBtn=document.querySelector('.home-btn');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
stackBtn.addEventListener('click',gotostacktech);
aboutBtn.addEventListener('click',gotoabout);
projectBtn.addEventListener('click',gotoprojects);
contactBtn.addEventListener('click',gotocontact);
homeBtn.addEventListener('click',gotohome);

function show(){
    mainMenu.style.display ='flex';
    mainMenu.style.top ='0';
    faBars.style.visibility='hidden';
    main.style.visibility='hidden';
    footer.style.visibility='hidden';
}
function close(){
    faBars.style.visibility='visible';
    mainMenu.style.top='-100%';
    main.style.visibility='visible';
    footer.style.visibility='visible';
}
 function gotostacktech(){
 main.style.visibility='visible';
 faBars.style.visibility='visible';
 mainMenu.style.top='-100%';
 footer.style.visibility='visible';
 }
 function gotoabout(){
    main.style.visibility='visible';
    faBars.style.visibility='visible';
    mainMenu.style.top='-100%';
    footer.style.visibility='visible'; 
 }
 function gotoprojects(){
    main.style.visibility='visible';
    faBars.style.visibility='visible';
    mainMenu.style.top='-100%';
    footer.style.visibility='visible'; 
 }
 function gotocontact(){
    main.style.visibility='visible';
    faBars.style.visibility='visible';
    mainMenu.style.top='-100%';
    footer.style.visibility='visible'; 
 }
 function gotohome(){
    main.style.visibility='visible';
    faBars.style.visibility='visible';
    mainMenu.style.top='-100%';
    footer.style.visibility='visible'; 
 }
 
 document.addEventListener('DOMContentLoaded', () => {
   const checkbox = document.getElementById("checkbox");

   checkbox.addEventListener("change", () => {
       if (checkbox.checked) {
           document.documentElement.setAttribute('data-theme', 'dark');
       } else {
           document.documentElement.setAttribute('data-theme', 'light');
       }
   });
});

const $percent=document.querySelector('.percent');
const $circle=document.querySelector('.circle');
let load =0;

function update(){
    load+=load<100;
    $percent.innerHTML=load;
    $circle.style.background=`conic-gradient(from 0deg at 50%
        50%,
        #6f7bf7 0%,
        #9bf8f4 ${load}%,
        #101012 ${load}%)`;
}
setInterval(update,100);

window.addEventListener('DOMContentLoaded', () => {
    // Utiliser setTimeout pour retarder l'exécution du code à l'intérieur
    setTimeout(() => {
      const loader = document.querySelector('.loader');
      loader.classList.add('fondu-out');
      loader.addEventListener('transitionend', () => {
        loader.style.display = 'none'; // Ceci masquera le loader après l'animation
      });
    }, 11000); // 10 secondes
  });
  


  
