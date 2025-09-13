import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [vowelsCount, setVowelsCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  const countVowels = (inputText) => {
    const matches = inputText.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
  };

  const countWords = (inputText) => {
    return inputText.trim() === ""
      ? 0
      : inputText.trim().split(/\s+/).length;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);
    setVowelsCount(countVowels(input));
    setWordsCount(countWords(input));
  };

  return (
    <div className="app-container">
      <h1>Text Analyzer</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows="6"
        className="text-input"
      />
      <div className="results">
        <p><strong>Number of vowels:</strong> {vowelsCount}</p>
        <p><strong>Number of words:</strong> {wordsCount}</p>
      </div>
    </div>
  );
}

export default App;
