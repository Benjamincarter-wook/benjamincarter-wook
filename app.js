const form = document.querySelector('form')
let Strings = [
    { text : "Ernie Ball 9's",
        imgSrc :'images/EB-9.png'},
    { text: "Ernie Ball 10's",   
       imgSrc: 'images/EB-10.png'},
    { text:"Ernie Ball 11's",
       imgSrc: 'images/EB-11.png'},
    {text: "Ernie Ball 12's",
    imgSrc:'images/EB-12.png'}]
    

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function(){
    let gibson = document.getElementById('gibson');
    let fender = document.getElementById('fender');
    let loose = document.getElementById('btnradio3');
    let medium = document.getElementById('btnradio2');
    let tight = document.getElementById('btnradio1');
    if (gibson.checked == true && loose.checked ==true){
             console.log("test")}
             
    else if(fender.checked== true && loose.checked == true){    
                console.log("test 2")}
                else if(gibson.checked== true && medium.checked == true){    
                    console.log("test 3")}
                    else if(fender.checked== true && medium.checked == true){    
                        console.log("test 4")}
                        else if(gibson.checked== true && tight.checked == true){    
                            console.log("test 5")}
                            else if(fender.checked== true && tight.checked == true){    
                                console.log("test 6")}
                                
   modal.style.display = "block";
  
}
// btn.addEventListener ("click",() => {
//     modal.style.display= "block";
// })

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
}
// span,addEventListener('click', ()=> {
//     modal.style.display= "none"
// })

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// form.addEventListener('submit', function(event){

// })

function results(){
    
    }


// document.getElementById("myBtn").addEventListener = ('submit', (event) => {
//     let results = function(){
//         if('scale'=='gibson' && 'tension'=='loose') ;
//          console.log("test")
//     }
// }
// )






// //     else if($("scale-length"=="fender")) && ()
// // }
// // const submit = document.querySelector('#submit')
// // addEventListener('click',() =>{

// // }
// // {
// //  console.log('results') 
