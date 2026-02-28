// Handling user input.

// function proceedGo(){
  btn.addEventListener('click', function () {

    // To stop listening when something is executing(go button is pressed)
    recognition.stop()
  
    console.log('Button clicked');
  
    // userText.value = 'hi';
    userText = userTextInp.value.toLowerCase()
  
  
    console.log(userText)
  
  
    if (userText.includes('instagram')) {
      speak('Sure thing! Opening your Instagram now.')
      window.open('https://instagram.com/mohdfaizan_5')
    }
  
    // Clearing input from voice command
    if (userText.includes('clear input')) {
      console.log(`before clearing user input ${userText}`)
      userText = '';
      speak('Done! I\'ve cleared that for you.')
      document.querySelector('.prompt-input').value = userText
      console.log(`after clearing user input ${userText}`)
      return;
    } 
  

  
    // OTher interactive questions
    if (userText.includes('open dashboard')) {
      console.log(userText.value)
      speak('Absolutely! Let me pull up your dashboard right away.')
      window.open('./other-applications/dashboard/index.html')
      return;
      
    }
  
    if (userText.includes('suggest me some meals for') || userText.includes('meals for')) {
      let meal = '';
      
      if (userText.includes('dinner')) {
        meal = 'dinner'
      }
      else if (userText.includes('lunch')) {
        meal = 'lunch'
      }
      else if (userText.includes('breakfast')) {
        meal = 'breakfast'
      }
      else {
        meal = 'snacks'
      }
  
      window.open(`https://www.google.com/search?q=meals+for+${meal}/`)
      speak(`Great choice! Here are some delicious ${meal} ideas I found for you.`)
      return
    }
    if (userText.includes('how do i use you') || userText.includes('how should i use you')) {
      speak(`Great question! You can ask me to search anything on YouTube or Google.`)
      speak(`I can also play songs for you, or open apps like Pomodoro, Forgetting Curve, To-do, and your productivity dashboard.`)
      speak('Let me show you the full guide to get the most out of me!')
      window.open('./static/about.html#useagesection')
      return
    }
  
  
  
    if (userText.includes('sad')) {
      speak('Hey, I hear you. Everyone has tough days. Just remember, you\'re not alone, and things will get better. Take a deep breath!')
      return;
    }
    if(userText.includes('hello')){
      speak("Hey there! How's your day going? I'm here to help!")
      return;
    }
    if(userText.includes('motivational')){
      speak("Remember, you only fail when you stop trying. Keep pushing forward, you've got this!")
      return;
      }
      if(userText.includes('drive')){
        speak("Opening your Google Drive now. Let's get organized!")
      window.open("https://drive.google.com/drive/my-drive");
        return;
        }
        if(userText.includes('mails')){
          speak("Let me check your inbox for you!")
        window.open("https://mail.google.com/mail/u/0/#inbox");
          return;
          }
          if(userText.includes('amazon')){
            speak("Opening Amazon for you. Happy shopping!")
          window.open("https://www.amazon.in/");
            return;
            }
            if(userText.includes('find my device') ){
              speak("On it! Let me help you locate your device right away.")
            window.open("https://www.google.com/android/find/");
            return;
          
              }
    if (userText.includes('forgetting curve') || userText.includes('for getting curve')) {
      window.location = ('./other-applications/forgetting-curve/')
      speak('Sure! What topic would you like me to create a forgetting curve for?');
      console.log('What should I create a forgetting curve for,');
      createForgettingCurve();
      return;
    }
  
    if(userText.includes('weather today') || (userText.includes('todays weather report'))){
      speak("Let me pull up today's weather for you!")
      window.open("https://www.accuweather.com/en/in/bengaluru/204108/weather-forecast/204108");
      return;
    }
    if(userText.includes('stocks today') || (userText.includes('stocks to buy today'))){
      speak("Here are today's most active stocks. Let's see what looks good!")
      window.open("https://in.investing.com/equities/most-active-stocks");
     return; 
    }
    if (userText.includes('pomodoro')) {
      console.log(userText.value)
      speak('Starting Pomodoro for you. Time to focus and be productive!')
      window.open('./other-applications/pomodoro/')
      return;
    }
    if (userText.includes('open to do')) {
      console.log(userText.value)
      speak('Opening your to-do list. Let\'s get things done!')
      window.open('./other-applications/todo/index.html')
      return;
    }
    if (userText.includes('meditation')) {
      console.log(userText.value)
      speak('Great choice! Let\'s take a moment to relax and recharge.')
      window.open('./other-applications/meditation/index.html')
      return;
    }
  
    if (userText.includes('who are you') || userText.includes('tell me something about you')) {
      speak(`I'm Natasha, your personal AI assistant and productivity mentor. I'm here to help you stay organized, focused, and make the most of your day!`)
      return;
    }
  
  
  
    if (userText.includes('open whatsapp')) {
      speak('Opening WhatsApp for you!')
      window.open('https://web.whatsapp.com/')
      return;
    }
  
  
    if (userText.includes("open youtube")) {
      speak("Opening YouTube! Enjoy watching.");
      window.open("https://www.youtube.com/")
      return;
    }
  
    if (userText.includes("open google")) {
      speak("Opening Google for you!");
      window.open("https://www.google.com/");
      return;
    }
  
    // google search
    if (userText.includes("search for")) {
      let input = userText.split("search for").at(-1)
      console.log(input);
      speak(`Let me look that up for you. Searching for ${input}`)
      window.open(`https://www.google.com/search?q=${input}`)
      return;
    }
  
  
    // play spotify
    if (userText.includes('play the song')) {
      let input = userText.split("play the song").at(-1)
      speak(`Great taste! Playing ${input} on Spotify for you.`)
      input = input.replace(' ', '%20')
      console.log(input)
      window.open(`https://open.spotify.com/search/${input}`)
      return;
    }
  
  
    // Maps
  
    // locate kormangala
    if (userText.includes('locate')) {
      let input = userText.split("locate").at(-1)
      speak(`Sure! Let me find ${input} on the map for you.`)
      input = input.replace(' ', '+')
      console.log(input)
      window.open(`https://www.google.com/maps/search/${input}/`)
      return;
    }
  
  
    // youtube search
    if (userText.includes("play")) {
      let input = userText.split("play").at(-1)
      console.log(input);
      speak(`Playing ${input} from YouTube. Enjoy!`)
      window.open(`https://www.youtube.com/results?search_query=${input}`);
      return;
    }
  
    if (userText.includes("open my github") || userText.includes('open my coding profile')) {
      speak('Opening your GitHub profile!')
      window.open('https://github.com/mohdfaizan5')
      return;
    }
    if(userText.includes('twitter profile') ){
      speak("Opening your Twitter profile now!")
    window.open("https://github.com/kupendrav");
      return;
      }

    // ----- NEW COMMANDS -----

    // Tell a joke
    if (userText.includes('joke') || userText.includes('make me laugh')) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
        "A SQL query walks into a bar, sees two tables and asks... Can I join you?",
        "Why do Java developers wear glasses? Because they don't C sharp!",
        "There are only 10 types of people in the world: those who understand binary and those who don't."
      ];
      speak(jokes[Math.floor(Math.random() * jokes.length)]);
      return;
    }

    // What's the time
    if (userText.includes('time') && (userText.includes('what') || userText.includes('current') || userText.includes('tell me'))) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      speak(`It's currently ${timeStr}. Make every minute count!`);
      return;
    }

    // What's the date
    if (userText.includes('date') && (userText.includes('what') || userText.includes('today'))) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      speak(`Today is ${dateStr}.`);
      return;
    }

    // Set reminder (simulated with alert)
    if (userText.includes('remind me') || userText.includes('set reminder') || userText.includes('set a reminder')) {
      speak("Sure! I'll remind you. How many minutes from now?");
      const mins = prompt("Remind in how many minutes?");
      const message = prompt("What should I remind you about?");
      if (mins && message) {
        setTimeout(() => {
          alert(`⏰ Reminder: ${message}`);
          speak(`Hey! Just a reminder: ${message}`);
        }, parseInt(mins) * 60000);
        speak(`Got it! I'll remind you about "${message}" in ${mins} minutes.`);
      }
      return;
    }

    // Wikipedia search
    if (userText.includes('wikipedia') || userText.includes('wiki')) {
      let input = userText.replace('wikipedia', '').replace('wiki', '').trim();
      if (input) {
        speak(`Let me look that up on Wikipedia for you.`);
        window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${input}`);
      } else {
        speak("What would you like me to search on Wikipedia?");
      }
      return;
    }

    // News
    if (userText.includes('news') || userText.includes('headlines')) {
      speak("Here are the latest news headlines for you!");
      window.open("https://news.google.com/");
      return;
    }

    // Calculator
    if (userText.includes('calculate') || userText.includes('what is') && (userText.includes('+') || userText.includes('-') || userText.includes('*') || userText.includes('/'))) {
      try {
        let expr = userText.replace('calculate', '').replace('what is', '').trim();
        // Basic sanitize - only allow numbers and operators
        if (/^[\d\s\+\-\*\/\.\(\)]+$/.test(expr)) {
          let result = Function('"use strict"; return (' + expr + ')')();
          speak(`The answer is ${result}`);
        } else {
          speak("I can only calculate basic math expressions with numbers and operators.");
        }
      } catch(e) {
        speak("Hmm, I couldn't calculate that. Could you try again?");
      }
      return;
    }

    // Translate
    if (userText.includes('translate')) {
      let input = userText.split('translate').at(-1).trim();
      speak(`Opening Google Translate for you.`);
      window.open(`https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(input)}`);
      return;
    }

    // Open timer
    if (userText.includes('start timer') || userText.includes('open timer')) {
      speak("Opening the Pomodoro Timer for you. Let's stay focused!");
      window.open('./other-applications/pomodoro-timer/index.html');
      return;
    }

    // Good morning/night greetings
    if (userText.includes('good morning')) {
      speak("Good morning! Rise and shine! Today is a fresh start, make it count!");
      return;
    }
    if (userText.includes('good night')) {
      speak("Good night! Get some rest. Tomorrow is another chance to be amazing!");
      return;
    }

    // Thank you
    if (userText.includes('thank you') || userText.includes('thanks')) {
      speak("You're welcome! I'm always here to help. Just ask anytime!");
      return;
    }

    // Bored
    if (userText.includes('bored') || userText.includes('boring')) {
      speak("Feeling bored? How about trying a Pomodoro session, or let me play some music for you!");
      return;
    }

    // Stressed
    if (userText.includes('stressed') || userText.includes('anxious') || userText.includes('overwhelmed')) {
      speak("I'm sorry you're feeling that way. Take a deep breath. Would you like to try a meditation session? It really helps!");
      return;
    }
  
    if (userText) {
      speak("Hmm, I'm not quite sure what you mean. Could you try rephrasing that?")
    }
  
  })