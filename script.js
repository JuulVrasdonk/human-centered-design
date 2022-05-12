const strongEl = document.getElementById('latest-word');
const recordButton = document.querySelector(".recordButton");
const micContainer = document.querySelector(".siri")
const node = document.querySelector('.string')
const string = node.innerHTML
const removeChar = string.replace(/[.,:']/g, "")
const arrayString = removeChar.split(' ')
const filteredString = arrayString.filter(String)
const tabs = document.querySelectorAll('.tabs li')
const text = document.querySelector(".string")
const table = document.querySelector(".tg")
const textarea = document.querySelector(".textarea")
const artikelTab = document.querySelector(".artikel")
const excelTab = document.querySelector(".excel")
const wordTab = document.querySelector(".word")
const body = document.querySelector('body')


// console.log(filteredString);

// if (matches === null)
// {
//     document.getElementById("demo").innerHTML = "No results"; // Any message or empty
//     return;
// }
// const stringArray = string.split(' ')

// const filteredStringArray = stringArray.filter(String)

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
    const resultsLength = event.results.length -1 ;
    const ArrayLength = event.results[resultsLength].length -1;
    let saidWord = event.results[resultsLength][ArrayLength].transcript;

    let splitString = saidWord.split(' ')

    let lastWord = splitString[splitString.length - 1]


    // console.log(filteredStringArray.indexOf(lastWord));
    strongEl.innerHTML = lastWord;

    if(saidWord.includes('kopiëren' || 'kopieer' || 'koppie')) {
        navigator.clipboard.writeText(window.getSelection())
    }

    if(saidWord.includes('plakken' || 'plak' || 'Plak')) {
        navigator.clipboard.readText()
        .then(clipText => textarea.value = clipText);
    }

    if(saidWord.includes('selecteer')) {
        let term = saidWord.substring(saidWord.indexOf("selecteer") + "selecteer".length + 1)
        console.log(term);

        var myPattern = new RegExp('(\\w*'+term+'\\w*)','gi');

        var matches = string.match(myPattern);

        // console.log(window.getSelection);
        // console.log(matches);
        // console.log(filteredString);
        // console.log(filteredString.indexOf(matches[1]));

    //     let regExp = new RegExp(term, 'gi');
    //     node.innerHTML = (node.textContent).replace(regExp, '<mark>$&</mark>')

    //     if(term.includes('tot')) {
    //         const slicedTerm = term.slice(0, -4)
    //         let regExp = new RegExp(slicedTerm, 'gi');
    //         node.innerHTML = (node.textContent).replace(regExp, '<mark>$&</mark>')
    //         console.log('lol');
    //     }
    }
    if(saidWord.includes('schrijf' || 'citeer')) {  
        if(event.results[0].isFinal) {
            let term = saidWord.substring(saidWord.indexOf("selecteer") + "selecteer".length + 1)
            console.log(term);
            textarea.value += term
        }
    }

    if(saidWord.includes('ga naar' || 'gaan naar')) {  
        if(event.results[0].isFinal) {
            let term = saidWord.substring(saidWord.indexOf("selecteer") + "selecteer".length + 1)

            if(saidWord.includes('artikel')) {
                text.classList.remove('remove')
                excelTab.classList.remove('active')
                wordTab.classList.remove('active')
                artikelTab.classList.add('active')
                table.classList.add('remove')
                textarea.classList.add('remove')
            }

            if(saidWord.includes('Excel' || 'xcel')) {
                table.classList.remove('remove')
                wordTab.classList.remove('active')
                artikelTab.classList.remove('active')
                excelTab.classList.add('active')
                console.log('tab 2');
                text.classList.add('remove')
                textarea.classList.add('remove')
            }

            if(saidWord.includes('Word' || 'ord')) {
                textarea.classList.remove('remove')
                excelTab.classList.remove('active')
                wordTab.classList.remove('active')
                artikelTab.classList.remove('active')
                wordTab.classList.add('active')
                table.classList.add('remove')
                text.classList.add('remove')
            }   
        }
    }

    if(saidWord.includes('dansje')) { 
        body.classList.add('dansje');
        setTimeout(() => {
            body.classList.remove('dansje');
        }, 5000)
    } 

    if(event.results[0].isFinal && !(saidWord.includes('kopiëren' || 'kopieer' || 'koppie' || 'plakken' || 'plak' || 'Plak' || 'selecteer' || 'ga naar' || 'gaan naar' || 'artikel' || 'Excel' || 'Word'))) {
        console.log('niet begrepen');
    }
}





recognition.addEventListener('speechend', function() {
    recordButton.classList.remove('recording')
    recordButton.classList.remove('recording')
    micContainer.classList.remove('centerMic')
    strongEl.style.opacity = 0
    strongEl.innerHTML = ''
    // console.log('Speech has stopped being detected');
});


// speech error handling
recognition.onerror = function(event){
  console.log('error?');
  console.log(event);
}


tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const oldActiveTab = document.querySelector('.active')
        // console.log(tab.innerHTML);

        switch(tab.innerHTML) {
            case 'Artikel': 
                text.classList.remove('remove')
                oldActiveTab.classList.remove('active')
                tab.classList.add('active')
                if(tab.classList.contains('active')) {
                    table.classList.add('remove')
                    textarea.classList.add('remove')
                }
                break;
            case 'Excel': 
                table.classList.remove('remove')
                oldActiveTab.classList.remove('active')
                tab.classList.add('active')
                console.log('tab 2');
                if(tab.classList.contains('active')) {
                    text.classList.add('remove')
                    textarea.classList.add('remove')
                }
                break;
            case 'Word': 
                textarea.classList.remove('remove')
                oldActiveTab.classList.remove('active')
                tab.classList.add('active')
                if(tab.classList.contains('active')) {
                    table.classList.add('remove')
                    text.classList.add('remove')
                }
        }
    })
})