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
// scoring-secting function
function addScoringId(element) {
  let score = document.getElementById(element);
  let newscore = score.innerText;
  let updateScore = parseInt(newscore);
  return updateScore;
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

function alphabetsSelectingByID(elementId, thigsvalue) {
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

  alphabetsSelectingByID("alphabetsScreen", random);

  //adding orange color
  addingOrange(random);

  document.addEventListener("keyup", function (event) {
    let screenValue = document.getElementById("alphabetsScreen").innerText;
    let pressKey = event.key;

    removingOrange(pressKey); //removing the orange color after press

    if (pressKey == screenValue) {
      console.log("press the right key ", screenValue);
      let random = alphabetGenerate();
      removingOrange(random);
      alphabetsSelectingByID("alphabetsScreen", random);
      addingOrange(random);

      let score = document.getElementById("live-score");
      let newscore = score.innerText;
      let updateScore = parseInt(newscore);

      updateScore += 1; // Increment score

      score.innerText = updateScore; // Update the displayed score in the HTML

      console.log(updateScore, "hello test"); // Check the new score in the console
    } else {
      console.log("press wrong key");
      // current-life
      let score = document.getElementById("current-life");
      let newscore = score.innerText;
      let updateScore = parseInt(newscore);

      updateScore -= 1; // Increment score

      score.innerText = updateScore;

      if (updateScore == 0) {
        hideSection("play-ground");
        unhideSection("socreboard");

        // Get the score from the "live-score" element
        let score = addScoringId("live-score"); // This returns the score as a number
        console.log(score, "live score");

        // Get the final score element directly
        let finnal = document.getElementById("finnal-score");

        if (finnal) {
          // Check if the element exists
          finnal.innerText = score; // Set innerText to the retrieved score
          console.log(finnal.innerText, "Final score displayed");
        } else {
          console.warn("Element with id 'finnal-score' not found.");
        }

        // finnal-score
      }
    }
  });
});

//starting of  game making part

/*   step to do that  
    keyboard listen
    if keypress == screenvalue
   then console.log(right press)

   else{
   wrong press}*/

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
