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

        if (userPressedKey === random) {
            console.log("Correct key pressed:", userPressedKey);

            removeKeyPressColor(userPressedKey);
            // Generate a new random alphabet and update display
            random = genAlphabet();  // Update `random` with the new alphabet
            p.innerText = random;

            // Update key color for the new random alphabet
            addKeyPressColor(random);

        } else {
            console.log("Wrong key pressed");
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
