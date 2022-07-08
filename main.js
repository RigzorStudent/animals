function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TEWzBtWNJ/model.json', modelReady);
}


function modelReady() {
    console.log("modelReady")
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) 
        {
            console.log(error)
        }
else
        {
            console.log(results)
            r = Math.floor(Math.random() * 255) + 1;
            g = Math.floor(Math.random() * 255) + 1;
            b = Math.floor(Math.random() * 255) + 1;
        }

        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%"
        
     
       document.getElementById("result_label").style.color="rgb("+r+ "," +g+ "," +b+ ")"
      document.getElementById("result_confidence").style.color="rgb("+r+ "," +g+ "," +b+ ")"

      label=results[0].label

      img1=document.getElementById('cat')
      img2=document.getElementById('dog')
      img3=document.getElementById('ear')
      img4=document.getElementById('lion')

      
      }
    

      
