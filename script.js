//utility
function hideSection(element) {
  document.getElementById(element).classList.add("hidden");
}

function unhideSection(element) {
  document.getElementById(element).classList.remove("hidden");
}

function addingOrange(random) {
  document.getElementById(random).classList.add("bg-orange-600");
}

function removingOrange(random) {
  document.getElementById(random).classList.remove("bg-orange-600");
}


//generating random alphabets
function alphabetGenerate() {
  let gen = "abcdefghijklmnopqrstuvwxyz";
  let alpha = gen.split("");

  let ran = Math.random() * 26;
  let index = Math.floor(ran);

  let random = alpha[index];

  return random;
}



function alphabetsSelectingByID(elementId,thigsvalue){

  let p = document.getElementById(elementId);
  p.innerText = thigsvalue;
  //adding orage color in keyboards
}

//main part

document.getElementById("play-btn").addEventListener("click", function () {
  hideSection("start-window");
  unhideSection("play-ground");

  //adding random alphabets
  let random = alphabetGenerate();

  //selecting alphabetscreen

  alphabetsSelectingByID('alphabetsScreen',random);

//adding orange color 
    addingOrange(random);
  
  
});


//starting of  game making part

/*   step to do that  
    keyboard listen
    if keypress == screenvalue
   then console.log(right press)

   else{
   wrong press}*/

   document.addEventListener('keyup',function(event){

     let screenValue=document.getElementById('alphabetsScreen').innerText;
     let pressKey = event.key;
    //  removingOrange(random);
     
     
     
     if(pressKey == screenValue){
       console.log("press the right key ",screenValue);
       let random = alphabetGenerate();
      alphabetsSelectingByID('alphabetsScreen',random);
      addingOrange(random);

     }

     else{
      console.log('press wrong key');
     }





   })








//play-ground work

/*
1.keyboard listen
2.display alphabet select 
3.mach with key press 
4.if match score add
5.not life will deducts
6.if life is 0 game over 
7.playground hidden
8.socre board show
 


*/
