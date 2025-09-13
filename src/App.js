import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [vowelsCount, setVowelsCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [charactersCount, setCharactersCount] = useState(0);
  const [charactersNoSpacesCount, setCharactersNoSpacesCount] = useState(0);

  const countVowels = (inputText) => {
    const matches = inputText.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
  };

  const countWords = (inputText) => {
    return inputText.trim() === ""
      ? 0
      : inputText.trim().split(/\s+/).length;
  };

  const countCharacters = (inputText) => {
    return inputText.length;
  };

  const countCharactersNoSpaces = (inputText) => {
    return inputText.replace(/\s/g, '').length;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);
    setVowelsCount(countVowels(input));
    setWordsCount(countWords(input));
    setCharactersCount(countCharacters(input));
    setCharactersNoSpacesCount(countCharactersNoSpaces(input));
  };

  return (
    <div className="analyzer-container">
      <div className="analyzer-header">
        <h1>Text Analyzer</h1>
        <div className="analyzer-subtitle">
          A minimal tool for analyzing your text
        </div>
      </div>
      
      <div className="analyzer-input-section">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Begin typing here..."
          className="analyzer-textarea"
        />
      </div>
      
      <div className="analyzer-stats">
        <div className="stat-item">
          <span className="stat-number">{charactersCount}</span>
          <span className="stat-label">Characters</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{charactersNoSpacesCount}</span>
          <span className="stat-label">Characters (no spaces)</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{wordsCount}</span>
          <span className="stat-label">Words</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{vowelsCount}</span>
          <span className="stat-label">Vowels</span>
        </div>
      </div>
      
      {text.length > 0 && (
        <div className="analyzer-footer">
          <div className="reading-time">
            Estimated reading time: {Math.ceil(wordsCount / 200)} min
          </div>
        </div>
      )}
    </div>
  );
}

export default App;