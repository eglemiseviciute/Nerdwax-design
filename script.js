// desktop device
// to show right product then button is clicked
const nerdwaxbtn = document.querySelector('.nerdwaxs')
const magicbtn = document.querySelector('.magics')
const clipbtn = document.querySelector('.clips')
const clothbtn = document.querySelector('.cloths')

const nerdwaxinfo = document.querySelector('.product-details')
const magicinfo = document.querySelector('.magic-product-details')
const clipxinfo = document.querySelector('.clip-product-details')
const clothinfo = document.querySelector('.cloth-product-details')

// magic product button
magicbtn.addEventListener('click',()=>{
   magicinfo.classList.add('show-text')
   nerdwaxinfo.classList.add('remove')
 clipxinfo.classList.remove('show-text')
clothinfo.classList.remove('show-text')
   magicbtn.style.color =  'rgb(230, 196, 7)';
   clipbtn.style.color =  'black';
   clothbtn.style.color =  'black';
   nerdwaxbtn.style.color =  'black';
   magicinfo.style.transition = '20s ease-in-out'
})
// nerdwax product button
nerdwaxbtn.addEventListener('click',()=>{
   magicinfo.classList.remove('show-text')
   nerdwaxinfo.classList.remove('remove')
 clipxinfo.classList.remove('show-text')
clothinfo.classList.remove('show-text')

   nerdwaxbtn.style.color =  'rgb(230, 196, 7)';
   magicbtn.style.color =  'black';
   clipbtn.style.color =  'black';
   clothbtn.style.color =  'black';
})
// clip product button
clipbtn.addEventListener('click',()=>{
   magicinfo.classList.remove('show-text')
   nerdwaxinfo.classList.add('remove')
 clipxinfo.classList.add('show-text')
clothinfo.classList.remove('show-text')
clipbtn.style.color =  'rgb(230, 196, 7)';
   magicbtn.style.color =  'black';
   nerdwaxbtn.style.color ='black';
   clothbtn.style.color =  'black';

})
// cloth product button
clothbtn.addEventListener('click',()=>{
   magicinfo.classList.remove('show-text')
   nerdwaxinfo.classList.add('remove')
 clipxinfo.classList.remove('show-text')
clothinfo.classList.add('show-text')
clipbtn.style.color =  'black';
magicbtn.style.color =  'black';
nerdwaxbtn.style.color =  'black';
clothbtn.style.color =  'rgb(230, 196, 7)';
})


// mobile device iphone13/12 PRO
// to get toggle navbar
const navBtn = document.querySelector('.nav-btn')
const navTitle = document.querySelector('.nav-title')
// to change arrow
const up = document.querySelector('.up-arrow')
const down = document.querySelector('.down-arrow')

// to show different products then click button
const btnMagic = document.querySelector('.butns-magics')
const btnCloths = document.querySelector('.butns-cloths')
const btnClips = document.querySelector('.butns-clips')
const btnNerdwaxs = document.querySelector('.butns-nerdwaxs')


const smallNerdwaxInfo = document.querySelector('.small-product-details')
const smallMagicInfo = document.querySelector('.small-magic-product-details')
const smallClipxInfo = document.querySelector('.small-clip-product-details')
const smallClothInfo = document.querySelector('.small-cloth-product-details')
// to hide title
const nerd = document.querySelector('.nerdwa')
const mag = document.querySelector('.magic')
const cli = document.querySelector('.cli')
const clo = document.querySelector('.clot')

// toggle nav bar 
navBtn.addEventListener('click' , ()=>{

   if(!navTitle.classList.contains('show-title')){
      navTitle.classList.add('show-title');
      navBtn.classList.add('show-title');
    
   }else{
      navTitle.classList.remove('show-title')
      navBtn.classList.remove('show-title');
      
   }

   
})

// then magic product button is clicked
btnMagic.addEventListener('click',()=>{
   clo.classList.add('remove')
   cli.classList.add('remove')
   nerd.classList.add('remove')
   mag.classList.remove('remove')
   smallMagicInfo.classList.add('show-text')
   smallNerdwaxInfo.classList.add('remove')
 smallClipxInfo.classList.remove('show-text')
smallClothInfo.classList.remove('show-text')
btnMagic.style.color =  'rgb(230, 196, 7)';

navTitle.classList.remove('show-title')
btnNerdwaxs.style.color = 'black';
btnClips.style.color = 'black';
btnCloths.style.color = 'black';
})

// then Clips product button is clicked
btnClips.addEventListener('click',()=>{
   clo.classList.add('remove')
   mag.classList.add('remove')
   nerd.classList.add('remove')
   cli.classList.remove('remove')
      smallMagicInfo.classList.remove('show-text')
      smallNerdwaxInfo.classList.add('remove')
    smallClipxInfo.classList.add('show-text')
   smallClothInfo.classList.remove('show-text')
   btnClips.style.color =  'rgb(230, 196, 7)';
   
   navTitle.classList.remove('show-title')
   btnNerdwaxs.style.color = 'black';
   btnMagic.style.color ='black';
   btnCloths.style.color = 'black';
   })

// then cloths product button is clicked
   btnCloths.addEventListener('click',()=>{
      mag.classList.add('remove')
      clo.classList.remove('remove')
      nerd.classList.add('remove')
      cli.classList.add('remove')
      smallMagicInfo.classList.remove('show-text')
      smallNerdwaxInfo.classList.add('remove')
    smallClipxInfo.classList.remove('show-text')
   smallClothInfo.classList.add('show-text')
   btnCloths.style.color =  'rgb(230, 196, 7)';
   
   navTitle.classList.remove('show-title')
   btnNerdwaxs.style.color = 'black';
   btnMagic.style.color ='black';
   btnClips.style.color = 'black';
   })
// then nerdwax product button is clicked
   btnNerdwaxs.addEventListener('click',()=>{
      nerd.classList.remove('remove')
      clo.classList.add('remove')
      mag.classList.add('remove')
      cli.classList.add('remove')
      smallMagicInfo.classList.remove('show-text')
      smallNerdwaxInfo.classList.remove('remove')
    smallClipxInfo.classList.remove('show-text')
   smallClothInfo.classList.remove('show-text')
   btnNerdwaxs.style.color =  'rgb(230, 196, 7)';
   
   navTitle.classList.remove('show-title')
   btnCloths.style.color = 'black';
   btnMagic.style.color ='black';
   btnClips.style.color = 'black';
   })