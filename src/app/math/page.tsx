"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ClassTabs from "@/components/ClassTabs";

export default function ClassPage() {
  const router = useRouter();
  const [classData, setClassData] = useState<any>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await import("@/data/math.json");
        setClassData(data.default);
        setSelectedLessonId(data.default.lessons[0]?.id || "");
      } catch (err) {
        console.error("Failed to load class data", err);
      }
    }
    loadData();
  }, []);

  if (!classData) return <p>Loading...</p>;

  const selectedLesson = classData.lessons.find(
    (l: any) => l.id === selectedLessonId
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Comic Sans MS', cursive",
      }}
    >
      <button
        onClick={() => router.push("/dashboard")}
        style={{
          marginBottom: 20,
          padding: "8px 16px",
          backgroundColor: "#f57c00",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1
        style={{
          fontSize: 36,
          color: "#f57c00",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        {classData.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {classData.lessons.map(({ id, title }: any) => (
          <button
            key={id}
            onClick={() => setSelectedLessonId(id)}
            style={{
              backgroundColor: selectedLessonId === id ? "#fbc02d" : "#fffde7",
              borderRadius: 12,
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow:
                selectedLessonId === id ? "0 0 10px #fbc02d" : "none",
              border: "1px solid #ccc",
            }}
          >
            {title}
          </button>
        ))}
      </div>

      {selectedLesson && (
        <ClassTabs
          videoUrl={selectedLesson.videoUrl}
          reading={selectedLesson.reading}
          quiz={selectedLesson.quiz}
        />
      )}
    </div>
  );
}



// "use client";

// import { useState, useEffect } from "react";
// import ClassTabs from "@/components/ClassTabs";

// export default function ClassPage() {
//   const [classData, setClassData] = useState<any>(null);
//   const [selectedLessonId, setSelectedLessonId] = useState<string>("");

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const data = await import("@/data/math.json");
//         setClassData(data.default);
//         setSelectedLessonId(data.default.lessons[0]?.id || "");
//       } catch (err) {
//         console.error("Failed to load class data", err);
//       }
//     }
//     loadData();
//   }, []);

//   if (!classData) return <p>Loading...</p>;

//   const selectedLesson = classData.lessons.find(
//     (l: any) => l.id === selectedLessonId
//   );

//   return (
//     <div style={{ maxWidth: 900, margin: "0 auto", padding: 20, fontFamily: "'Comic Sans MS', cursive" }}>
//       <h1 style={{ fontSize: 36, color: "#f57c00", textAlign: "center" }}>{classData.title}</h1>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 20 }}>
//         {classData.lessons.map(({ id, title }: any) => (
//           <button
//             key={id}
//             onClick={() => setSelectedLessonId(id)}
//             style={{
//               backgroundColor: selectedLessonId === id ? "#fbc02d" : "#fffde7",
//               borderRadius: 12,
//               padding: "10px 20px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               boxShadow: selectedLessonId === id ? "0 0 10px #fbc02d" : "none",
//               border: "1px solid #ccc",
//             }}
//           >
//             {title}
//           </button>
//         ))}
//       </div>

//       {selectedLesson && (
//         <ClassTabs
//           videoUrl={selectedLesson.videoUrl}
//           reading={selectedLesson.reading}
//           quiz={selectedLesson.quiz}
//         />
//       )}
//     </div>
//   );
// }
