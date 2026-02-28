const text_Btn = document.querySelector("#input")

const Chartsubmit_Btn = document.querySelector("#chart")

const chart_Area = document.querySelector(".final-chat-container")

let userInput;

const createChatBubble = (message, type) => {
  const bubble = document.createElement("div")
  bubble.classList.add(type === 'user' ? 'chat-user' : 'chat-ai')
  bubble.textContent = message;
  return bubble;
}

// Legacy fallback
const createDiv = (message, ClassName) => {
  const para = document.createElement("p")
  para.classList.add("ai-question", ClassName)
  let para_content = `  ${message}`
  para.innerHTML = para_content;
  return para;
}

const generateResponse = async (incomingBubble) => {
  const messageElement = incomingBubble;

  const request_options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userInput,
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  }
  try {
    const response = await (await fetch(API_URL, request_options)).json();
    messageElement.textContent = response.choices[0].text;
  } catch (error) {
    messageElement.textContent = "Oops! Something went wrong. Please try again.";
  }
}

const handleincoming = () => {
  userInput = text_Btn.value.trim();
  console.log(userInput)
  if (!userInput) return

  // User message - left aligned (white)
  chart_Area.appendChild(createChatBubble(userInput, 'user'))

  // Scroll to bottom
  chart_Area.scrollTop = chart_Area.scrollHeight;

  text_Btn.value = '';

  setTimeout(() => {
    // AI message - right aligned (purple)
    const aiBubble = createChatBubble("Thinking...", 'ai')
    chart_Area.appendChild(aiBubble);
    chart_Area.scrollTop = chart_Area.scrollHeight;
    generateResponse(aiBubble);
  }, 600)
}

Chartsubmit_Btn.addEventListener("click", handleincoming)

