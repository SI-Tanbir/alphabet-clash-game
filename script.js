document.getElementById('play-btn').addEventListener('click', function() {



    // Hide start window, show playground
    let window = document.getElementById('start-window');
    window.classList.add('hidden');
   
    let playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    // Generate a random alphabet and display it
    let random = genAlphabet();
    let p = document.getElementById('alphabetsScreen');
    p.innerText = random;

    // Set keyboard key color
    addKeyPressColor(random);

    // Set up keyboard listening and compare user input with the random alphabet
    document.addEventListener('keyup', function keyboardListening(event) {
        let userPressedKey = event.key.toLowerCase();  // Convert to lowercase to match random alphabet
        

        //initialization of score
        score=0;

        


        if (userPressedKey === random) {
            console.log("Correct key pressed:", userPressedKey);
            

            //now i am gonna update ing score;

           
            let score=document.getElementById('live-score').innerHTML;
            let scoreNumber=Number(score);
            console.log(scoreNumber=scoreNumber+1);
            document.getElementById('live-score').innerText=scoreNumber;
            
            
            
            
            
            
            
            
            
            
            removeKeyPressColor(userPressedKey);
            // Generate a new random alphabet and update display
            random = genAlphabet();  // Update `random` with the new alphabet
            p.innerText = random;
            
            // Update key color for the new random alphabet
            addKeyPressColor(random);
            
            
            return scoreNumber;

        } else {
            console.log("Wrong key pressed");
            
            let currentlifevalue=document.getElementById('current-life')
            let currentLife=currentlifevalue.innerText;
            let currentHealth=parseInt(currentLife);

            let updateLife=currentHealth-1;

            currentlifevalue.innerHTML=updateLife;


            if ( updateLife == 0 ){

                let playGround = document.getElementById('play-ground');
                playGround.classList.add('hidden');

                let scoreBoard = document.getElementById('socreboard');
                scoreBoard.classList.remove('hidden');

                let lastScore=document.getElementById('live-score');
                let lastScoreUpdate= lastScore.innerText;

                // finnal-score

                let settingScore=document.getElementById('finnal-score');
                settingScore.innerText=lastScoreUpdate;






            }



           




            // document.getElementById('play-ground').classList.add('hidden');


            // document.getElementById('socreboard').classList.remove('hidden');

        

            
        }
    });
});

// Function to change key color
function addKeyPressColor(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('bg-orange-400');
    }
}
function removeKeyPressColor(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('bg-orange-400');
    }
}


// Function to generate a random alphabet
function genAlphabet() {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let list = alpha.split('');
    let random = Math.floor(Math.random() * 26); // 26 letters in the alphabet
    return list[random];
}

//special function to reset life and score;
function reset(elementId,reset_value){
    let reset= document.getElementById(elementId);
    reset.innerText=reset_value;
}



//making play againg interection;

function play_again(){
    let window = document.getElementById('start-window');
    window.classList.add('hidden');
   
    let playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    let scoreboard = document.getElementById('socreboard');
    scoreboard.classList.add('hidden');


    reset('current-life',5); //reset life to 5
    reset('live-score',0);//reset score to 0

   









}