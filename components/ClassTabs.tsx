"use client";

import { useState } from "react";

interface Quiz {
  question: string;
  answerType: "text" | "multipleChoice"; // extend as needed
  options?: string[]; // for multiple choice
}

interface ClassTabsProps {
  videoUrl: string;
  reading: string;
  quiz: Quiz;
}

export default function ClassTabs({ videoUrl, reading, quiz }: ClassTabsProps) {
  const [activeTab, setActiveTab] = useState<"video" | "reading" | "quiz">("video");

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded-xl shadow-lg bg-white">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b pb-2">
        {["video", "reading", "quiz"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "video" | "reading" | "quiz")}
            className={`capitalize px-4 py-2 rounded-t ${
              activeTab === tab
                ? "bg-indigo-600 text-white font-semibold"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "video" && (
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={videoUrl}
            title="Class Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {activeTab === "reading" && (
        <div className="prose max-w-none text-gray-800">
          <h2>Today's Reading</h2>
          <p>{reading}</p>
        </div>
      )}

      {activeTab === "quiz" && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Quiz</h2>
          <form className="space-y-4">
            <div>
              <label className="block">{quiz.question}</label>
              {quiz.answerType === "text" && (
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Your answer..."
                />
              )}
              {quiz.answerType === "multipleChoice" && quiz.options && (
                <div className="space-y-2 mt-2">
                  {quiz.options.map((option, idx) => (
                    <label key={idx} className="block">
                      <input type="radio" name="quiz" value={option} /> {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
