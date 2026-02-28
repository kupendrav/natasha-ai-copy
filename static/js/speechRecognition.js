function speak(text){
  
  // Create a new speechSynthesisUtterance
  let utterance = new SpeechSynthesisUtterance();

  // Wait for voices to load, prefer a natural female voice
  const voices = window.speechSynthesis.getVoices();
  // Try to find Google UK English Female, fall back to any female, then default
  let selectedVoice = voices.find(v => v.name.includes('Google UK English Female'));
  if (!selectedVoice) selectedVoice = voices.find(v => v.name.includes('Female'));
  if (!selectedVoice) selectedVoice = voices[6] || voices[0];
  utterance.voice = selectedVoice;

  // Make it sound more human - natural pace, warm pitch
  utterance.rate = 0.95;    // Slightly slower for natural feel
  utterance.pitch = 1.15;   // Slightly higher for warmth
  utterance.volume = 0.9;   // Comfortable volume

  // speak what arg is passed to it.
  utterance.text = text;

  // Finally speaking
  window.speechSynthesis.speak(utterance);

  utterance.onstart = (event)=> {
    console.log('started speaking');
  }

}

// Load voices when they become available
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

  // listening 
  let recognition = new webkitSpeechRecognition();
  let final_transcript = "";

  // this will continously listen to the user
  recognition.continuous = true;

  // setting lang en-Global
  recognition.lang = 'en-IN';

  // This event does when object starts 
  recognition.onstart = () => {
    console.log('Started Listening...')  
    document.querySelector('.waveContainer').style.display = 'flex';
    document.querySelector('nav').style.display = 'flex';

  }

  // This event will trigger when listneing is stopped
  recognition.onend = () => {   
    console.log("Stopped Listening")
    document.querySelector('.waveContainer').style.display = 'none'
    final_transcript += '. '
  }

  // For continous listning:
  recognition.continuous = true;

  // This is the final text that is been displayed when everything is processed
  recognition.onresult = (event) => {

    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    document.querySelector(".prompt-input").value = final_transcript;
    // document.querySelector(".user-speech-interim").innerHTML = interim_transcript;

  }  

// THis part is not required since we can call for recognition by 
// function listen(){
  
//   // Some browsers may not support, backup webkit for those
//   const SpeechRecognition1 = window.SpeechRecognition || window.webkitSpeechRecognition;
  
//   // Create a SpeechRecognition instance
//   const recognition = new SpeechRecognition1(); // Prefix for Chrome
  
  
//   // const recognition = new SpeechRecognition()
//   const speechRecognitionList = new SpeechGrammarList();
//   speechRecognitionList.addFromString(grammar, 1);
//   recognition.grammars = speechRecognitionList;

//   // Configure recognition
//   recognition.lang = 'en-IN';
//   recognition.continuous = true;
//   recognition.interimResults = true;

//   // Event handlers
//   recognition.onresult = (event) => {
//     const transcript = event.results[event.results.length - 1][0].transcript;
//     console.log('Recognized:', transcript);
//   };

//   recognition.onend = () => {
//     recognition.start(); // Restart recognition
//   };

//   // Start recognition
//   recognition.start();

// }
