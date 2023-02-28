// let headName = document.getElementById('heading-name').textContent;

// function loop(passed){
//     passed.addEventListener('mouseover',()=>{
//         console.log('hoverd')
//     })
// }
// for(let i=0; i<headName.length; i++){
//     // console.log(headName[i]);
//     // headName[i].addEventListener('click', ()=>{
//     //     // headName[i].style.color = 'red'
//     //     console.log(hover)
//     // })
//     let item = headName[i];
//     loop(item)
// }

// // console.log(headName.length)

$('#heading-name').hover(
  function () {
    $(this).css('background-color', 'yellow');
  },
  function () {
    $(this).css('background-color', 'pink');
  }
);