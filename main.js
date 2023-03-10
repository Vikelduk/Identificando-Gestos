var noseX = 0;
var noseY = 0;

var difference = 0;

var rightWristX = 0;
var leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(75, 50);

    canvas = createCanvas(600, 450);
    canvas.position(675, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("O poseNet foi Inicializado com Sucesso!");
}

function gotPoses(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#87CEEB');   
}