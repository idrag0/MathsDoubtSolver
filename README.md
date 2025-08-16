# 🧮 Maths Doubt Solver

**Your AI math companion powered by Gemini Flash 2.0**

A beautiful, responsive web application that helps students and professionals solve mathematical problems with step-by-step explanations using Google's Gemini AI.

![Maths Doubt Solver – Demo 1](./assets/screenshots/demo.png)

![Maths Doubt Solver – Demo 2](./assets/screenshots/demo2.png)

## ✨ Features

### 🎯 **Dual Mode Interface**
- **Problem Solver Mode**: Structured mathematical problem solving
- **Chat Mode**: Conversational AI assistance for math queries

### 📚 **Comprehensive Math Categories**
- **Algebra**: Equations, polynomials, factoring
- **Calculus**: Derivatives, integrals, limits
- **Geometry**: Areas, volumes, geometric proofs
- **Statistics**: Probability, distributions, data analysis

### 🎨 **Modern UI/UX**
- Clean, mobile-first design inspired by modern app interfaces
- Responsive layout that works on all devices
- Purple gradient theme with glassmorphism effects
- Smooth animations and transitions

### 🔍 **Enhanced Solution Display**
- **Step-by-step breakdown** with clear explanations
- **Green highlighted answer boxes** for final results
- **Formatted mathematical expressions**
- **Educational explanations** for each step

### 💬 **Interactive Chat**
- Real-time conversation with AI math tutor
- Message bubbles interface
- Ask follow-up questions
- Get clarifications on solutions

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/maths-doubt-solver.git
   cd maths-doubt-solver
   ```

2. **Set up your API key**
   - Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/)
   - Replace the API key in the JavaScript code:
   ```javascript
   const GEMINI_API_KEY = 'your-api-key-here';
   ```

3. **Run the application**
   - Simply open `index.html` in your web browser
   - Or serve it using any local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

4. **Start solving math problems!**

## 📱 Usage

### Problem Solver Mode
1. Select a math category (Algebra, Calculus, etc.)
2. Enter your mathematical problem in the text area
3. Click "Solve Problem"
4. Get step-by-step solutions with highlighted answers

### Chat Mode
1. Switch to "Chat" tab
2. Ask any math-related question
3. Get conversational help and explanations
4. Follow up with additional questions

### Example Problems
Try these sample problems to get started:
- `Solve x² + 5x - 14 = 0`
- `Find derivative of x³ + 2x² - 5x + 1`
- `Calculate area of triangle with sides 3, 4, 5`
- `Integrate x² + 3x from 0 to 2`

## 🛠️ Technical Details

### Built With
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI Engine**: Google Gemini Flash 2.0
- **Styling**: Custom CSS with glassmorphism effects
- **API**: RESTful calls to Gemini API

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### API Integration
The app uses Google's Gemini Flash 2.0 model with:
- Temperature: 0.1 (for consistent math solutions)
- Max tokens: 2048
- Optimized prompts for mathematical problem solving

## 📂 Project Structure

```
maths-doubt-solver/
├── index.html              # Main application file
├── README.md              # Project documentation
├── assets/                # Static assets (if any)
├── screenshots/           # App screenshots
└── LICENSE               # License file
```

## 🎯 Key Features Breakdown

### Smart Problem Processing
- **Context-aware solving**: Adapts approach based on selected category
- **Step identification**: Automatically breaks down complex problems
- **Answer highlighting**: Final answers appear in green highlight boxes
- **Educational focus**: Explains methodology, not just results

### Responsive Design
- **Mobile-first approach**: Optimized for smartphones
- **Tablet-friendly**: Perfect for iPad and similar devices
- **Desktop compatible**: Scales beautifully on larger screens
- **Touch-optimized**: Large buttons and touch-friendly interface

### AI-Powered Assistance
- **Natural language processing**: Understands problem descriptions
- **Multiple solution methods**: Shows different approaches when applicable
- **Error handling**: Graceful handling of API failures
- **Real-time processing**: Fast response times

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Ideas
- 🎨 UI/UX improvements
- 📚 Additional math categories
- 🌐 Internationalization
- ♿ Accessibility enhancements
- 🧪 Unit tests
- 📖 Better documentation

## 📋 Roadmap

### Version 2.0
- [ ] **Math equation renderer** (LaTeX support)
- [ ] **Graph plotting** for functions
- [ ] **History system** for solved problems
- [ ] **Export solutions** as PDF
- [ ] **Offline mode** with cached responses

### Version 2.1
- [ ] **Multiple language support**
- [ ] **Voice input** for problems
- [ ] **Image recognition** for handwritten math
- [ ] **Progressive Web App** features

## 🔧 Configuration

### API Settings
You can customize the AI behavior by modifying these parameters:

```javascript
generationConfig: {
    temperature: 0.1,        // Lower = more consistent
    topK: 1,                // Limit vocabulary
    topP: 1,                // Nucleus sampling
    maxOutputTokens: 2048,   // Response length limit
}
```

### UI Customization
The app uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #8b82ff;
    --background: linear-gradient(135deg, #e8e6ff 0%, #d4d1ff 50%, #c5c1ff 100%);
    --border-radius: 20px;
}
```

## ⚠️ Important Notes

### API Key Security
- **Never commit your API key** to version control
- Use environment variables in production
- Consider implementing a backend proxy for production use

### Rate Limits
- Google Gemini API has rate limits
- Implement proper error handling for quota exceeded
- Consider adding request queuing for high usage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google AI** for the Gemini Flash 2.0 API
- **Modern CSS techniques** inspiration from various design systems
- **Mathematical notation** standards from educational institutions
- **Open source community** for inspiration and best practices

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues** tab on GitHub
2. **Create a new issue** with detailed information
3. **Join discussions** in the repository
4. **Contact**: [your-email@example.com]

## 🌟 Show Your Support

Give a ⭐️ if this project helped you with your math problems!

---

**Built with ❤️ for students and math enthusiasts worldwide**
