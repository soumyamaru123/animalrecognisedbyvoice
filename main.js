
var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XOGcSPeqp/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error) {
        console.error(error);
    }
    else{   
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_voices").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img=document.getElementById('animal_images');

       

        if (results[0].label == "Barking") {
            img.src = 'Dog.jpg';
            dog = dog+1;
          } else if (results[0].label == "Meowing") {
            img.src = 'Cat.webp';
            cat = cat + 1;
          } else{
            img.src = 'hear.jpg';
          }
       }
}