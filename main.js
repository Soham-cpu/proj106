function start() {
    navigator.getUserMedia({ audio: true });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/58U0BW4y3/model.json', ready);
}
function ready() {
    classifier.classify(getResults);
}

function getResults(error, results) {
    console.log("got results");
}
