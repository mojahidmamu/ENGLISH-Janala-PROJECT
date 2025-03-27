// export default Learn;

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const VocabularySection = () => {
  const [lessons, setLessons] = useState([]);
  const [words, setWords] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    // Fetch lessons from API on page load
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/levels/all"
        );
        const data = await response.json();
        setLessons(data.data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  const fetchWordsByLesson = async (lessonId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/level/${lessonId}`
      );
      const data = await response.json();
      setWords(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching words:", error);
      setLoading(false);
    }
  };

  const handleLessonClick = (lessonId) => {
    setActiveLesson(lessonId);
    fetchWordsByLesson(lessonId);
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handlePronunciation = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Center-aligned Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        📖 Vocabulary Section
      </h1>

      {/* Lesson Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <button
              key={lesson.level_no}
              className={`px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
                activeLesson === lesson.level_no
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => handleLessonClick(lesson.level_no)}
            >
              Lesson {lesson.level_no}
            </button>
          ))
        ) : (
          <p className="text-gray-700">Loading lessons...</p>
        )}
      </div>

      {/* Words Display */}
      <div className="w-full flex flex-col items-center">
        {loading ? (
          <p className="text-gray-700">Loading words...</p>
        ) : words.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {words.map((word) => (
              <div
                key={word._id}
                className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-blue-500 w-full"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {word.word}
                </h2>
                <p className="text-gray-600">{word.meaning}</p>
                <p className="italic text-sm mb-2">{word.pronunciation}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handlePronunciation(word.word)}
                  >
                    🔊 Pronounce
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleWordClick(word)}
                  >
                    ℹ️ Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No words found for this lesson.</p>
        )}
      </div>
      {/*  */}
      <LoadingSpinner></LoadingSpinner>

      {/* Word Details Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-2">{selectedWord.word}</h2>
            <p className="italic mb-2">{selectedWord.pronunciation}</p>
            <p className="mb-2">
              <strong>Example:</strong>{" "}
              {selectedWord.example || "No example available."}
            </p>
            <p className="mb-4">
              <strong>Synonyms:</strong>{" "}
              {selectedWord.synonyms?.join(", ") || "No synonyms available."}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setSelectedWord(null)}
            >
              Completing Learning
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularySection;
