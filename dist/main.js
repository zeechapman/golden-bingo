var quotes = [
    "You should do voice overs",
    "You sound like Morgan Freeman",
    "Oh my god, that voice is amazing",
    "Keep talking",
    "Can you say my name?",
    "Is that your real voice?",
    "What voice changer is that?",
    "What kind of mic is that?",
    "Do you work on the radio?",
    "You DO have a golden voice!",
    "Can you do impressions?",
    "Are you Markiplier?",
    "*Starts swearing about his voice*",
    "*Adult sounds*",
    "Do you stream?",
    "Can you narrate my life?",
    "Where are you from?",
    "You got a sexy voice",
    "*plays along with impressions*",
    "How old are you?",
    "Do you have a YouTube?",
    "You should play with [famous streamer]",
    "Are you THE Golden Voice?",
    "I've seen your videos",
    "What's your day job?"
];

function ran(n) {
    return Math.floor(Math.random() * n);
}

function pickQuote(i) {
    return quotes[i];
}

// Shamelessly copied-pasta'd from Stack Overflow.  More due to time constrain
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function generateBoard() {
    var r = document.getElementById('root');
    // Clear the page and add the class to make everything appear
    r.classList.remove('disapear');
    r.classList.add('appear');
    r.innerHTML = '<div id="board"></div>';


    var board = document.getElementById('board');
    var len = quotes.length;


    // Shuffle the array
    shuffle(quotes);

    for (var i = 0; i < len - 1; i++) {
        if (i === 12) {
            board.innerHTML += '<label class="item freespace"></label>';
        }
        board.innerHTML += '<label class="item"><input type="checkbox"><div>' + pickQuote(i); + '</div></label>';
    }

    r.innerHTML += '<button id="btn_clear">Clear Board?</button>';
    document.getElementById('btn_clear').addEventListener('click' || 'touchend', () => {
        generateBoard();
    })
}

// Most of the app stuff happens here
var btn = document.getElementById('btn');
btn.addEventListener('click' || 'touchend', () =>  {
    document.getElementById('root').classList.add('disapear');
    setTimeout(() => {
        generateBoard();
    }, 500);
})