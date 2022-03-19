var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()
function start() {
    document.getElementById("voice_here").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("voice_here").innerHTML = content
    if (content=="take my selfie") {
        speak()
        
    }
    
}
function speak(){
    Webcam.attach("#camera")
    var synth = window.speechSynthesis
    speakdata = "taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    setTimeout(function(){
        take_snapshot();
        save()

    },5000)
    
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
})
function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); } function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ; link.href = image; link.click(); }
