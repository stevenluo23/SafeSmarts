"use client";
import React, { useState } from "react";
import "./TTSButton.css";

const TTSButton = ({ lessonModule, lessonId }) => {
  const [isTTSPlaying, setIsTTSPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const safeSetItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Failed to set item in localStorage:", e);
    }
  };

  const handleTextToSpeechToggle = async () => {
    const cacheKey = `lesson-${lessonId}-tts`;

    if (audio) {
      if (isTTSPlaying) {
        console.log("Pausing audio");
        audio.pause();
        setIsTTSPlaying(false);
      } else {
        console.log("Resuming audio");
        audio.play();
        setIsTTSPlaying(true);
      }
      return;
    }

    let audioUrl = localStorage.getItem(cacheKey);

    // If the audio URL is not in localStorage, fetch a new one from the server
    // Note: localStorage will only work for the first audio request from OpenAI.
    // Subsequent requests will not be stored in localStorage due to space limitations.
    // Therefore, every time you navigate off the module, a new request will be made,
    // which incurs a cost.
    if (!audioUrl) {
      try {
        const response = await fetch("http://localhost:8080/tts/translate-and-speak", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lessonModule }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        audioUrl = data.audioUrl;
        safeSetItem(cacheKey, audioUrl);
      } catch (error) {
        console.error("Error generating speech:", error);
        return;
      }
    }

    console.log("Playing audio");
    const audioElement = new Audio(audioUrl);
    audioElement.play();
    setAudio(audioElement);
    setIsTTSPlaying(true);

    audioElement.onended = () => {
      setIsTTSPlaying(false);
      audioElement.currentTime = 0;
    };
  };

  return (
    <div className="title-icon-wrapper" onClick={handleTextToSpeechToggle}>
      <span>Español</span>
      <img src="/tts.svg" alt="Title Icon" />
    </div>
  );
};

export default TTSButton;
