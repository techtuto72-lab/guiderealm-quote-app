import { useState } from 'react'

const quotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
]

function App() {
  const [current, setCurrent] = useState(quotes[0])

  function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrent(quotes[randomIndex])
  }

  return (
    <div className="app">
      <h1>GuideRealm Quote Generator</h1>
      <p className="quote-text">"{current.text}"</p>
      <p className="quote-author">— {current.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  )
}

export default App
