canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1w = 120;
car1h = 70;
car1_imgname = "car1.png";
car1x = 10;
car1y = 10;

car2w = 120;
car2h = 70;
car2_imgname = "car2.png";
car2x = 10;
car2y = 90;

background_image = "https://v0rzymsa2juz5oww66mokq-on.drv.tw/project-84/racing.jpg";

function add() {

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_img = new Image();
    car1_img.onload = draw_car1_img;
    car1_img.src = ("carPink.png");

    car2_img = new Image();
    car2_img.onload = draw_car2_img;
    car2_img.src = ("carPurple.png");

}

function draw_car1_img() {
    ctx.drawImage(car1_img, car1x, car1y, car1w, car1h);
}

function draw_car2_img() {
    ctx.drawImage(car2_img, car2x, car2y, car2w, car2h);
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
//Key Events//
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }

    if (keyPressed == '40') {
        car1_down();
        console.log("down arrow key");
    }

    if (keyPressed == '37') {
        car1_left();
        console.log("left arrow key");
    }

    if (keyPressed == '39') {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed == '87') {
        car2_up();
        console.log("kew W");
    }

    if (keyPressed == '83') {
        car2_down();
        console.log("key S");
    }

    if (keyPressed == '65') {
        car2_left();
        console.log("key A");
    }

    if (keyPressed == '68') {
        car2_right();
        console.log("key D");
    }

    if (car1x > 700) {
        console.log("car1 won");
        document.getElementById('game_status').innerHTML = "Car 1 Won!";
    }
    else if (car2x > 700) {
        console.log("car2 won");
        document.getElementById('game_status').innerHTML = "Car 2 Won!";
    }
}

//Movement Functions//
function car1_up() {
    if (car1y >= 0) {
        car1y -= 10;
        console.log("When up arrow is pressed, Car1 X = " + car1x + " Car1 Y = " + car1y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
        
    }
}

function car1_down() {
    if (car1y <= 500) {
        car1y += 10;
        console.log("When down arrow is pressed, Car1 X = " + car1x + " Car1 Y = " + car1y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
       
    }
}

function car1_left() {
    if (car1x >= 0) {
        car1x -= 10;
        console.log("When left arrow is pressed, Car1 X = " + car1x + " Car1 Y = " + car1y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
  
    }
}

function car1_right() {
    if (car1x <= 700) {
        car1x += 10;
        console.log("When right arrow is pressed, Car1 X = " + car1x + " Car1 Y = " + car1y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();

    }
}





function car2_up() {
    if (car2y >= 0) {
        car2y -= 10;
        console.log("When W is pressed, Car2 X = " + car2x + "Car2 Y = " + car2y);
        uploadBackground();
        raw_car1_img();
        draw_car2_img();
   
    }
}

function car2_down() {
    if (car2y <= 500) {
        car2y += 10;
        console.log("When S is pressed, Car2 X = " + car2x + " Car2 Y = " + car2y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
   
    }
}

function car2_left() {
    if (car2x >= 0) {
        car2x -= 10;
        console.log("When A is pressed, Car2 X = " + car2x + " Car2 Y = " + car2y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
       
    }
}

function car2_right() {
    if (car2x <= 700) {
        car2x += 10;
        console.log("When D is pressed, Car2 X = " + car2x + " Car2 Y = " + car2y);
        uploadBackground();
        draw_car1_img();
        draw_car2_img();
      
    }
}