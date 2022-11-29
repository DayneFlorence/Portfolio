


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


