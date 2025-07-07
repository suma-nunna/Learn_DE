import React from "react";
import { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import axios from "axios";
import InputField from "../components/InputField";
import ScoreDisplay from "../components/ScoreDisplay";
import DisplayButtons from "../components/DisplayButtons";

function VocabularyPractice() {
  const [germanWords, setGermanWords] = useState([]);
  const [word, setWord] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [score, setScore] = React.useState(0);

  const { speak, voices } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        setGermanWords(res.data.a1);
        let list = [...res.data.a1];
        if (list.length > 0) {
          setRandomGermanWord(list);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const germanVc = {
  //   default: false,
  //   lang: "de-DE",
  //   localService: true,
  //   name: "Microsoft Katja - German (Germany)",
  //   voiceURI: "Microsoft Katja - German (Germany)",
  // };

  // useEffect(() => {
  //   axios
  //     .get("/data.json")
  //     .then((res) => {
  //       setGermanWords(res.data.a1);
  //       console.log(germanWords);
  //       if (germanWords.length > 0) {
  //         console.log(
  //           germanWords[Math.floor(Math.random() * germanWords.length)]
  //         );
  //         setWord(germanWords[Math.floor(Math.random() * germanWords.length)]);
  //         console.log(word);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const germanVoice = voices.find((voice) => voice.lang.startsWith("de-"));
    setSelectedVoice(germanVoice || voices[0]); // Fallback to first available voice
  }, [voices]);

  const checkAnswer = () => {
    if (inputValue.toLowerCase() === word.traslation.toLowerCase()) {
      console.log(inputValue);
      setScore(score + 1);
      setInputValue("");

      if (germanWords.length > 0) {
        setRandomGermanWord(germanWords);
        console.log(word);
      }

      console.log("Correct Answer");
    } else {
      console.log("Try Again");
    }
  };

  const setRandomGermanWord = (word) => {
    setWord(word[Math.floor(Math.random() * word.length)]);
  };

  const handleHearWord = () => {
    if (selectedVoice) {
      speak({ text: word.germanWord, voice: selectedVoice });
    } else {
      speak({ text: word, lang: "de-DE" }); // Fallback without specific voice
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Learn DE with Vocabulary Practice
      </h1>
      <p className="text-left text-lg mb-2">
        Traslate: <b> {word.germanWord}</b>
      </p>
      <InputField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex space-x-4 mt-4">
        <DisplayButtons
          text="Check Answer"
          onClick={checkAnswer}
          color="blue"
        />
        <DisplayButtons
          text="Hear Word"
          onClick={handleHearWord}
          color="green"
        />

        <ScoreDisplay score={score} />
      </div>
    </div>
  );
}

export default VocabularyPractice;
