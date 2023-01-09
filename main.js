prediction = "";

Webcam.set(
    { 
        width:350, 
        height:300, 
        imageFormat : 'png', 
        pngQuality:90 
    }); 
    
camera = document.getElementById("camera"); 
Webcam.attach('#camera');


function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("resultado").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/A-gv2SyvG/model.json', fotoTirada);

function fotoTirada()
{
    console.log("Foto Tirada com sucesso!");
}