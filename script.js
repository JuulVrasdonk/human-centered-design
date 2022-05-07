const strongEl = document.getElementById('latest-word');
const recordButton = document.querySelector(".recordButton");
const pasteText = document.querySelector(".pasteText")
const micContainer = document.querySelector(".siri")

// new instance of speech recognition
let recognition = new webkitSpeechRecognition();
// set params
recognition.continuous = true;
recognition.interimResults = true;

micContainer.addEventListener("click", () => {
    if(recordButton.classList.contains('recording')) {
        recognition.stop()
        recordButton.classList.remove('recording')
        micContainer.classList.remove('centerMic')
        strongEl.style.opacity = 0
        strongEl.innerHTML = ''
    } else {    
        recognition.start()
        recordButton.classList.add('recording')
        micContainer.classList.add('centerMic')
        setTimeout(() => strongEl.style.opacity = 1, 500)
        
    }
});

recognition.onresult = function(event){
  
    // delve into words detected results & get the latest
    // total results detected
    const resultsLength = event.results.length -1 ;
    // get length of latest results
    const ArrayLength = event.results[resultsLength].length -1;
    // get last word detected
    const saidWord = event.results[resultsLength][ArrayLength].transcript;



    if(saidWord.includes('kopiëren' || 'kopieer' || 'koppie')) {
        navigator.clipboard.writeText(window.getSelection())
    }

    if(saidWord.includes('plakken' || 'plak' || 'Plak')) {
        navigator.clipboard.readText()
        .then(clipText => pasteText.innerText = clipText);
    }

    if(saidWord.includes('vind' || 'zoek')) {
        window.find(saidWord)
        // console.log(window.find('broccoli'));
    }

    console.log(saidWord);
    
    // append the last word to the bottom sentence
    strongEl.innerHTML = saidWord;
}

// speech error handling
recognition.onerror = function(event){
  console.log('error?');
  console.log(event);
}

