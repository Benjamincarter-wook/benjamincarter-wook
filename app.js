const form = document.querySelector('form')
let strings = [
    'images/EB-9.png',
    'images/EB-10.png',
    'images/EB-11.png',
    'images/EB-12.png',
    ]
let Names = [
  'Ernie Ball Super Slinky',
  'Enire Ball Regular Slinky',
  'Ernie Ball Power Slinky',
  'Ernie Ball Not Even Slinky',
  'Please Define Scale and Tension',
]

    const result = document.getElementById("result-img")
    let modalcontent = document.getElementsByClassName('modal-content')
    let gibson = document.getElementById('gibson');
    let fender = document.getElementById('fender');
    let loose = document.getElementById('btnradio3');
    let medium = document.getElementById('btnradio2');
    let tight = document.getElementById('btnradio1');
    const error = document.querySelector('#id');

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function(){
 
    
    if (gibson.checked == true && loose.checked ==true){
      result.setAttribute(`src`, strings[1]);
      document.getElementById('#wizard');
      wizard.innerHTML = "Ernie Ball Regular Slinky"
          }
          else if(fender.checked== true && loose.checked == true){    
            result.setAttribute(`src`, strings[0]);
            document.getElementById('#wizard');
            wizard.innerHTML = "Ernie Ball Super Slinky"
              }
                else if(gibson.checked== true && medium.checked == true){    
                  result.setAttribute(`src`, strings[2]);
                  document.getElementById('#wizard');
                  wizard.innerHTML = "Ernie Ball power Slinky"
                  }
                    else if(fender.checked== true && medium.checked == true){    
                      result.setAttribute(`src`, strings[1]);
                      document.getElementById('#wizard');
                      wizard.innerHTML = "Ernie Ball Regular Slinky"
                      }
                        else if(gibson.checked== true && tight.checked == true){    
                          result.setAttribute(`src`, strings[3]);
                          document.getElementById('#wizard');
                          wizard.innerHTML = "Ernie Ball Not Even Slinky"
                          }
                            else if(fender.checked== true && tight.checked == true){    
                              result.setAttribute(`src`, strings[2]);
                              document.getElementById('#wizard');
                              wizard.innerHTML = "Ernie Ball Power Slinky"
                              } 
                              else {document.getElementById('#wizard');
                              wizard.innerHTML = "Please select a tension  and scale length"}                              
                              
                               
                                
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
