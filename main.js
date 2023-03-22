var noseX = 0;
var noseY = 0;

var difference = 0;

var rightWristX = 0;
var leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50, 150)

    canvas = createCanvas(550, 550);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("O poseNet foi Inicializado!");
}

function gotPoses(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw()
{
    background('#469BD2');   

    document.getElementById("square_side").innerHTML = "Largura e altura serão: " + difference;
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}