function preload() {
}

function setup() {
    canvas = createCanvas(740, 560);
    canvas.position(380, 200);
}

function draw() {
    rect(50, 105, 25, 350);
    rect(665, 105, 25, 350);
    rect(115, 495, 525, 25);
    rect(115, 40, 525, 25);
    circle(80, 70, 100);
    circle(660, 70, 100);
    circle(80, 490, 100);
    circle(660, 490, 100);
    image(video, 0, 0, 640, 480);
}

function take_snapshot() {
    save('student_name.png');
}