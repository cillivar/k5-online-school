"use client";

import { useState } from "react";

interface QuizItem {
  question: string;
  answerType: "text" | "multipleChoice";
  options?: string[];
  correctAnswer: string;
}

interface ClassTabsProps {
  videoUrl: string;
  reading: string;
  quiz: QuizItem[];
}

export default function ClassTabs({ videoUrl, reading, quiz }: ClassTabsProps) {
  const [activeTab, setActiveTab] = useState<"video" | "reading" | "quiz">("video");
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  function handleChange(index: number, value: string) {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let correctCount = 0;

    quiz.forEach((q, i) => {
      if (answers[i]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        correctCount++;
      }
    });

    setScore(correctCount);
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-2xl shadow-xl bg-gradient-to-br from-pink-50 to-yellow-50">
      {/* Tabs */}
      <div className="flex space-x-4 mb-8 border-b pb-4">
        {["video", "reading", "quiz"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "video" | "reading" | "quiz")}
            className={`capitalize px-6 py-3 rounded-t-xl text-lg font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "bg-pink-400 text-white shadow-md"
                : "bg-yellow-100 text-gray-700 hover:bg-yellow-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video */}
      {activeTab === "video" && (
        <div className="aspect-video mb-4 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Class Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Reading */}
      {activeTab === "reading" && (
        <div className="prose max-w-none text-gray-800 bg-white p-6 rounded-xl shadow-inner">
          <h2>Today's Reading</h2>
          <p>{reading}</p>
        </div>
      )}

      {/* Quiz */}
      {activeTab === "quiz" && (
        <div className="bg-white p-6 rounded-2xl border-4 border-yellow-200 shadow-inner">
          <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">🎉 Fun Quiz!</h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            {quiz.map((q, index) => (
              <div
                key={index}
                className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8 shadow-lg space-y-4"
              >
                <label className="block text-xl font-semibold text-yellow-800">
                  Question {index + 1}: {q.question}
                </label>

                {q.answerType === "text" && (
                  <input
                    type="text"
                    value={answers[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-lg"
                    placeholder="Type your answer..."
                    disabled={score !== null}
                  />
                )}

                {q.answerType === "multipleChoice" && q.options && (
                  <div className="space-y-3">
                    {q.options.map((option, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all text-lg ${
                          answers[index] === option
                            ? "bg-green-100 border-green-300"
                            : "bg-white border-gray-200 hover:bg-yellow-100"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`quiz-${index}`}
                          value={option}
                          checked={answers[index] === option}
                          onChange={() => handleChange(index, option)}
                          disabled={score !== null}
                          className="w-5 h-5"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {score === null ? (
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition disabled:opacity-50"
                  disabled={Object.keys(answers).length !== quiz.length}
                >
                  🎯 Submit Quiz
                </button>
              </div>
            ) : (
              <div className="mt-6 text-2xl text-center font-bold text-purple-700 bg-purple-100 p-6 rounded-2xl border-2 border-purple-300 shadow-sm">
                🎊 You got {score} out of {quiz.length} correct!
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
