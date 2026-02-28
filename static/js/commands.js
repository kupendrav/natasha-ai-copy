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
  
    if (userText) {
      speak("Hmm, I'm not quite sure what you mean. Could you try rephrasing that?")
    }
  
  })