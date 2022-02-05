img = "";
status1 = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() {
    image(img, 0, 0, 600, 400);
    textSize(20);
    fill("blue");
    text("dog", 100, 70);
    noFill();
    stroke("black");
    rect(80, 70, 220, 310);
    fill("red");
    text("cat", 300, 90);
    noFill();
    stroke("red");
    rect(280, 90, 220, 270);
}
function modelLoaded() {
    console.log("model loaded!");
    status1 = true;
    object_detector.detect(img, getResults);
}
function getResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        
    }
}