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
      <h1>Text Analyzer</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        className="analyzer-textarea"
      />
      <div className="analyzer-stats">
        <div className="stat-item">
          <div className="stat-number">{charactersCount}</div>
          <div className="stat-label">Characters</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{charactersNoSpacesCount}</div>
          <div className="stat-label">No Spaces</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{wordsCount}</div>
          <div className="stat-label">Words</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{vowelsCount}</div>
          <div className="stat-label">Vowels</div>
        </div>
      </div>
    </div>
  );
}

export default App;
