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
    fotoTirada();
}

function fotoTirada()
{
    console.log("Foto Tirada com sucesso!");
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/A-gv2SyvG/model.json', modeloCarregado);

function modeloCarregado()
{
    console.log("Modelo carregado!")
}

function speak()
{
    var synth = window.speechSynthesis;
    speakData1 = "A previsão é " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis);

}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classif(img, gotResults);
}

function gotResults (error, results)
{
    if (error)
    {
        console.error(error)
    }
    else
    {
        console.log(results);

        document.getElementById("resultadoEmocao").innerHTML = results[0].label;
        prediction = results[0].label;
        
        speak();

        if (results[0].label == "like")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128077;";
        }

        if (results[0].label == "dislike")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128078;";
        }

        if (results[0].label == "ok")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128076;";
        }

        if (results[0].label == "paz")
        {
            document.getElementById("updateEmoji").innerHTML = "&#9996;&#65039;";
        }

        if (results[0].label == "soco")
        {
            document.getElementById("updateEmoji").innerHTML = "&#9994;";
        }

        if (results[0].label == "ola")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128075;";
        }
    }
}



    
        