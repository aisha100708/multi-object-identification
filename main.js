img = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

}
function draw() {
    image(img, 0, 0, 600, 400);
    fill("black");
    textSize(20);
    //textBounds(100, 70, 20);
    //background(1);
    text("dog", 100, 70);
    noFill();
    rect(80, 70, 220, 310)
}   