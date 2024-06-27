// Define arrays of truths and dares suitable for college friends
var truths = [
    "What is the most embarrassing thing that has happened to you?",
    "Have you ever cheated in a test?",
    "What is your biggest pet peeve?",
    "What is your dream job?",
    "If you could travel anywhere in the world, where would you go and why?",
    "What is your go-to karaoke song?",
    "Who is your celebrity crush?",
    "What is the worst date you've ever been on?",
    "If you could be a character in any TV show, who would you be?",
    "What is your favorite binge-watch TV series?",
    "What's the most spontaneous thing you've ever done?",
    "What's your most prized possession and why?",
    "Have you ever had a paranormal experience?",
    "What's your weirdest dream you've ever had?",
    "What's the most adventurous thing you've ever done?",
    "If you could meet any historical figure, who would it be and why?",
    "What's your most embarrassing nickname?",
    "If you could switch lives with someone for a day, who would it be and why?",
    "What's the craziest thing you've done for love?",
    "What's the worst hairstyle you've ever had?",
    "What's the most embarrassing thing your parents have caught you doing?",
    "What's your most irrational fear?"
];

var dares = [
    "Take a selfie with a random stranger.",
    "Do your best impression of a Disney character.",
    "Act like a chicken until your next turn.",
    "Sing everything you say for the next 10 minutes.",
    "Send a text to your crush professing your love (no backspace allowed).",
    "Eat a spoonful of a condiment chosen by the group.",
    "Do your best belly dance.",
    "Let someone draw a mustache on your face with a marker.",
    "Speak in a British accent for the rest of the game.",
    "Post an embarrassing photo of yourself on social media.",
    "Wear your clothes backward for the next hour.",
    "Do a cartwheel.",
    "Try to lick your elbow for one minute.",
    "Call your crush and tell them a joke.",
    "Let someone tickle you for 30 seconds.",
    "Sing a song in a foreign language you don't speak.",
    "Do a handstand for one minute.",
    "Wear socks on your hands for the next 10 minutes.",
    "Try to juggle three items of the group's choice.",
    "Do your best impression of a baby being born."
];
 
 

// Function to add name to the list
function addNameToList() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value.trim();

    if (name !== "") {
        var nameList = document.getElementById("nameList");
        var listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
        nameInput.value = "";
    }
}

// Function to get a random truth or dare
function getRandomTruthOrDare() {
    var randomIndex = Math.floor(Math.random() * 2); // 0 for truth, 1 for dare

    if (randomIndex === 0) {
        return "Truth: " + truths[Math.floor(Math.random() * truths.length)];
    } else {
        return "Dare: " + dares[Math.floor(Math.random() * dares.length)];
    }
}

// Function to get a random truth or dare for a selected person
function spinTheBottle() {
    var bottle = document.getElementById("spinButton");
    var nameItems = document.getElementById("nameList").getElementsByTagName("li");
    var randomName = nameItems[Math.floor(Math.random() * nameItems.length)].textContent;
    var resultElement = document.getElementById("result");

    if (nameItems.length === 0) {
        resultElement.textContent = "Add names first!";
        resultElement.style.color = "red";
        resultElement.style.display = "block";
        return;
    }

    // Disable button during animation
    bottle.disabled = true;

    // Add spin animation class
    bottle.classList.add("spin-animation");

    // After 2 seconds, remove spin animation and display result
    setTimeout(function() {
        bottle.classList.remove("spin-animation");
        var truthOrDare = getRandomTruthOrDare();
        resultElement.textContent = randomName + ": " + truthOrDare;
        resultElement.style.color = "#1f305e"; /* Dark blue text */
        resultElement.style.display = "block";
        bottle.disabled = false;
    }, 2000);
}