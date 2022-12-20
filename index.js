


let mainContent = document.querySelector('#main_content');
let secondaryContent = document.querySelector('#secondary_content');
let titleArt = document.querySelector('#toggle-title-art');
let titleDev = document.querySelector('#toggle-title-dev');
let toggleBtn = document.querySelector('.switch input');

titleArt.style.border = 'yellow solid 1px';
    titleArt.style.boxShadow = 'black 0 0 10px 5px';
    titleArt.style.borderRadius = '20px';

    

toggleBtn.addEventListener('change', e => { 
  mainContent.style.display = e.target.checked ? 'none' : 'block';
  
  secondaryContent.style.display = e.target.checked ? 'block' : 'none';
  if(mainContent.style.display == 'block'){
    titleArt.style.border = 'yellow solid 1px';
    titleArt.style.boxShadow = 'black 0 0 10px 5px';
    titleArt.style.borderRadius = '20px';
    titleDev.style.border = 'none';
    titleDev.style.boxShadow = 'none';
}
if(secondaryContent.style.display == 'block'){
    titleDev.style.border = 'yellow solid 1px';
    titleDev.style.boxShadow = 'black 0 0 10px 5px';
    titleDev.style.borderRadius = '20px';
    titleArt.style.border = 'none';
    titleArt.style.boxShadow = 'none';
}
  
});



//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById('background-video').playbackRate = 0.6;