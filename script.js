// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyBEdrYbRfrIGbtvsyanLlHs_eHGhDgjG6c';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// DOM Elements
const modeTabs = document.querySelectorAll('.mode-tab');
const solverMode = document.getElementById('solverMode');
const chatMode = document.getElementById('chatMode');
const problemTypes = document.querySelectorAll('.problem-type');
const problemInput = document.getElementById('problemInput');
const solveBtn = document.getElementById('solveBtn');
const loading = document.getElementById('loading');
const resultSection = document.getElementById('resultSection');
const resultContent = document.getElementById('resultContent');
const exampleItems = document.querySelectorAll('.example-item');
const chatContainer = document.getElementById('chatContainer');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

let selectedType = '';

// Mode switching
modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        modeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const mode = tab.dataset.mode;
        if (mode === 'solver') {
            solverMode.classList.add('active');
            chatMode.classList.remove('active');
        } else {
            solverMode.classList.remove('active');
            chatMode.classList.add('active');
        }
    });
});

// Problem type selection
problemTypes.forEach(type => {
    type.addEventListener('click', () => {
        problemTypes.forEach(t => t.classList.remove('active'));
        type.classList.add('active');
        selectedType = type.dataset.type;
    });
});

// Example problem clicks
exampleItems.forEach(item => {
    item.addEventListener('click', () => {
        problemInput.value = item.dataset.problem;
        problemInput.focus();
    });
});

// Solve button click
solveBtn.addEventListener('click', async () => {
    const problem = problemInput.value.trim();
    if (!problem) return;
    await solveProblem(problem);
});

// Chat functionality
chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
});

// Auto-resize chat input
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});

// Send chat message
async function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    chatInput.style.height = 'auto';

    // Get AI response
    try {
        chatSendBtn.disabled = true;
        const response = await callGeminiAPI(createChatPrompt(message));
        addChatMessage(response, 'ai');
    } catch (error) {
        addChatMessage('Sorry, I had trouble processing that. Please try again.', 'ai');
    } finally {
        chatSendBtn.disabled = false;
    }
}

// Add chat message to container
function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message message-${sender}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(bubble);
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Main solve function
async function solveProblem(problem) {
    showLoading(true);
    hideResult();

    try {
        const prompt = createSolverPrompt(problem, selectedType);
        const response = await callGeminiAPI(prompt);
        showFormattedResult(response);
    } catch (error) {
        console.error('Error:', error);
        showError('Sorry, there was an error solving the problem. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Create solver prompt
function createSolverPrompt(problem, type) {
    return `You are an expert math tutor. Solve this step by step:

Problem: ${problem}
${type ? `Type: ${type}` : ''}

Please format your response with:
1. Clear step-by-step solution
2. Mark each step with "STEP:" at the beginning
3. Mark the final answer with "ANSWER:" at the beginning
4. Show all calculations clearly

Provide educational explanations for each step.`;
}

// Create chat prompt
function createChatPrompt(message) {
    return `You are a friendly math tutor. Help with this math question or conversation:

${message}

Provide a helpful, concise response. If it's a math problem, solve it step by step. If it's a general question, provide a clear explanation.`;
}

// Call Gemini API
async function callGeminiAPI(prompt) {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.1,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            }
        })
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Show formatted result with steps and highlighted answer
function showFormattedResult(content) {
    const lines = content.split('\n');
    let formattedContent = '';
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('STEP:')) {
            formattedContent += `<div class="step">${line.replace('STEP:', '').trim()}</div>`;
        } else if (line.startsWith('ANSWER:')) {
            formattedContent += `<div class="answer-highlight">Final Answer: ${line.replace('ANSWER:', '').trim()}</div>`;
        } else if (line) {
            formattedContent += `<p>${line}</p>`;
        }
    });
    
    resultContent.innerHTML = formattedContent || content;
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// UI Helper Functions
function showLoading(show) {
    loading.style.display = show ? 'block' : 'none';
    solveBtn.disabled = show;
}

function showError(message) {
    resultContent.innerHTML = `<p style="color: #ff4757;">${message}</p>`;
    resultSection.style.display = 'block';
}

function hideResult() {
    resultSection.style.display = 'none';
}