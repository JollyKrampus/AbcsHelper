let correctLetters = [];
let wrongLetters = [];
// let allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
//9/6/2023 Leonardo
let allLetters = 'FGHKMPVWZbdefghklmnprvwz'.split('');
let startTime;
let endTime;

function generateRandomLetter() {
    if (allLetters.length === 0) {
        endTime = new Date();
        finishQuiz();
        return;
    }
    
    const index = Math.floor(Math.random() * allLetters.length);
    const randomLetter = allLetters[index];
    document.getElementById('random-letter').textContent = randomLetter;

    // Remove the displayed letter from allLetters
    allLetters.splice(index, 1);
}

function markCorrect() {
    const letter = document.getElementById('random-letter').textContent;
    correctLetters.push(letter);
    document.getElementById('correct-letters').textContent = correctLetters.join(', ');
    generateRandomLetter();
}

function markWrong() {
    const letter = document.getElementById('random-letter').textContent;
    wrongLetters.push(letter);
    document.getElementById('wrong-letters').textContent = wrongLetters.join(', ');
    generateRandomLetter();
}

function disableButtons() {
    document.getElementById('btn-correct').disabled = true;
    document.getElementById('btn-wrong').disabled = true;
}

function finishQuiz() {
    disableButtons();
    
    const total = correctLetters.length + wrongLetters.length;
    const percentage = ((correctLetters.length / total) * 100).toFixed(2);
    document.getElementById('percentage-correct').textContent = `${percentage}%`;

    const timeDiff = (endTime - startTime) / 1000;  // Convert to seconds
    document.getElementById('time-taken').textContent = `${timeDiff} seconds`;

    // Sort and display the letters
    document.getElementById('correct-letters').textContent = correctLetters.sort().join(', ');
    document.getElementById('wrong-letters').textContent = wrongLetters.sort().join(', ');

    // Update the final counts
    document.getElementById('correct-count-final').textContent = correctLetters.length;
    document.getElementById('wrong-count-final').textContent = wrongLetters.length;

    // Show the results div
    document.getElementById('results').style.display = 'block';
}

// Initialize with the first random letter
startTime = new Date();
generateRandomLetter();
