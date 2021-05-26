let Strings = [
    { text : "Ernie Ball 9's",
        imgSrc :'images/EB-9.png'},
    { text: "Ernie Ball 10's",   
       imgSrc: 'images/EB-10.png'},
    { text:"Ernie Ball 11's",
       imgSrc: 'images/EB-11.png'},
    {text: "Ernie Ball 12's",
    imgSrc:'images/EB-12.png'}]

// document.querySelector('input[name=scale-length]:checked').value
// document.querySelector('input[name=tension]:checked').value

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
// btn.onClick = function(){
//   modal.style.display = "block";
// }
btn.addEventListener ("click",() => {
    modal.style.display= "block"
})

// When the user clicks on <span> (x), close the modal
// span.onclick = function(){
//   modal.style.display = "none";
// }
// span,addEventListener('click', ()=> {
//     modal.style.display= "none"
// })

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

let results = function(){
    if('gibson'=='true' && 'loose'=='true') 
    console.log('Strings[1]')
}
//     else if($("scale-length"=="fender")) && ()
// }
// const submit = document.querySelector('#submit')
// addEventListener('click',() =>{

// }
// {
//  console.log('results') 
// })
