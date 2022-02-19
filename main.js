img = "";
status1 = "";
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("model loaded!");
    status1 = true;
    object_detector.detect(img, getResults);
}

function getResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        objects = results;
        console.log(results);

    }
}

function draw() {
    image(img, 0, 0, 600, 400);
    if (status1 != false) {
        for (i = 0; i < objects.length; i++) {
            textSize(20);
            fill("blue");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("black");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        document.getElementById("status").innerHTML = "Status: Objects Detected!";
    }
}