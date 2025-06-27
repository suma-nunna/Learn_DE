import React from "react";

function VocabularyPractice() {
  const word = "Haus";
  const [inputValue, setInputValue] = React.useState("");
  const [score, setScore] = React.useState(0);

  const checkAnswer = () => {
    if (inputValue.toLowerCase() === 'house') {
        console.log(inputValue);
        setScore(score + 1);
        setInputValue('');
        console.log('Correct Answer');
    } else {
        console.log('Try Again');
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Learn DE with Vocabulary Practice
      </h1>
      <p className="text-left text-lg mb-2">
        Traslate: <b> {word}</b>
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter English traslation."
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={checkAnswer}
        >
          Submit
        </button>
        <button className="px-4 py-2 rounded bg-green-500 text-white">
          Hear Word
        </button>
        <p className="text-right">
          Score: <b>{score}</b>
        </p>
      </div>
    </div>
  );
}

export default VocabularyPractice;
