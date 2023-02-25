let reactButton = document.getElementById('react');
let hiddenReact = document.querySelector('.react');

let textInfo = document.querySelector('.infoText');
reactButton.addEventListener('click', function(){
    textInfo.textContent = 'This is some info about react.';
    textInfo.classList.remove('d-none');
    hiddenReact.classList.remove('d-none');
});

// function scrollFunction(){
//     document.querySelector('nav').classList.add('bg-black');
// }

// const checkpoint = 300;
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 0 + currentScroll / checkpoint;
//   } else {
//     opacity = 1;
//   }
//   document.querySelector("nav").style.opacity = opacity;
// });
//this works nice all I have to do tomorrow or later today is make sure the image displays also when the button is clicked
// I also want to start stylizing more of the site to make it look better because the temporary styles or disgusting
// good work though me keep it up and we can have this site completed before this weekend!!!