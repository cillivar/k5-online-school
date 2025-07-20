import { notFound } from "next/navigation";
import lessonData from "@/data/math.json";

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const { lessonId } = params;
  const lesson = lessonData.lessons.find((l) => l.id === lessonId);

  if (!lesson) return notFound();

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20, fontFamily: "'Comic Sans MS', cursive" }}>
      <h1 style={{ fontSize: 32, color: "#4caf50" }}>{lesson.title}</h1>

      {lesson.videoUrl && (
        <div style={{ margin: "20px 0" }}>
          <iframe
            width="100%"
            height="315"
            src={lesson.videoUrl}
            title="Lesson Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 12 }}
          />
        </div>
      )}

      {lesson.reading && (
        <div style={{ backgroundColor: "#f1f8e9", padding: 20, borderRadius: 12, marginBottom: 20 }}>
          <h2 style={{ marginBottom: 10 }}>Reading</h2>
          <p>{lesson.reading}</p>
        </div>
      )}

      {lesson.quiz && (
        <div style={{ backgroundColor: "#fff3e0", padding: 20, borderRadius: 12 }}>
          <h2>Quiz</h2>
          <ul>
            {lesson.quiz.map((q, index) => (
              <li key={index} style={{ marginBottom: 10 }}>
                <strong>Q{index + 1}:</strong> {q.question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
