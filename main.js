var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var background_image = "mars.jpg"
var rover_image = "rover.png"
var rover_width = 100
var rover_height = 100
var roverX = 75
var roverY = 75

function add(){
    background_image_add = new Image()
    background_image_add.onload = upload_background
    background_image_add.src = background_image 
    rover_image_add = new Image()
    rover_image_add.onload = upload_rover
    rover_image_add.src = rover_image 
}

function upload_background(){
    ctx.drawImage(background_image_add, 0, 0, 1000, 750)
}

function upload_rover(){
    ctx.drawImage(rover_image_add, roverX, roverY, 100, 100)
}
window.addEventListener("keydown" , mykeydown)
function mykeydown(e){
    keypress = e.keyCode;
    console.log(keypress)
    if (keypress == "37"){
        left()
}
if (keypress == "38"){
    up()
}
if (keypress == "39"){
    right()
}
if (keypress == "40"){
    down()
}
}
function left(){
    roverX = roverX - 10
    upload_background()
    upload_rover()
}
function right(){
    roverX = roverX + 10
    upload_background()
    upload_rover()
}
function up(){
    roverY = roverY - 10
    upload_background()
    upload_rover()
}
function down(){
    roverY = roverY + 10
    upload_background()
    upload_rover()
}