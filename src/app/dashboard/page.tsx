"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { SitKittenMascot } from "@/components/mascots/SitKittenMascot";

type Assignment = {
  id: string;
  title: string;
  dueDate: string;
};

const classes = [
  { id: "math", name: "🧮 Math - Grade 5", emoji: "🧮" },
  { id: "science", name: "🔬 Science - Grade 5", emoji: "🔬" },
  { id: "reading", name: "📖 Reading & Writing - Grade 5", emoji: "📖" },
  { id: "social-studies", name: "🌍 Social Studies - Grade 5", emoji: "🌍" },
  { id: "history", name: "🏺 Ancient History", emoji: "🏺" },
  { id: "geography", name: "🗺️ Geography - World Maps", emoji: "🗺️" },
  { id: "music", name: "🎵 Music & Piano Basics", emoji: "🎵" },
  { id: "art", name: "🎨 Art & Drawing", emoji: "🎨" },
  { id: "pe", name: "🏃‍♂️ PE - Physical Education", emoji: "🏃‍♂️" }, // Added PE class
];

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: "1", title: "Math Worksheet: Addition Practice", dueDate: "2025-07-25" },
    { id: "2", title: "Reading: Chapter 3 of 'Early Humans'", dueDate: "2025-07-27" },
    { id: "3", title: "Science Project: Plant Growth Observation", dueDate: "2025-07-30" },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    setLogoutError(null);
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err: any) {
      setLogoutError("Oops! Something went wrong while logging out. Please try again.");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <div className="spinner" />
        <p>Loading your fun dashboard...</p>
        <style jsx>{`
          .spinner {
            margin: 20px auto;
            width: 40px;
            height: 40px;
            border: 5px solid #8bc34a;
            border-top: 5px solid #4caf50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 700,
        margin: "0 auto",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        backgroundColor: "#fffbf0",
        borderRadius: 15,
        boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
      }}
    >
      <header
        style={{
          textAlign: "center",
          color: "#f57c00",
          marginBottom: 30,
          textShadow: "1px 1px 1px #ffa726",
        }}
      >
        <h1 style={{ fontSize: 36, marginBottom: 5 }}>🎉 Welcome to Your Dashboard! 🎉</h1>
        <p style={{ fontSize: 18 }}>
          Hey <strong>{user?.email}</strong>, ready to learn and have fun today? 🚀
        </p>
      </header>

      <section
        style={{
          backgroundColor: "#fffde7",
          padding: 15,
          borderRadius: 12,
          marginBottom: 30,
          boxShadow: "0 0 10px #fff176",
        }}
      >
        <h2 style={{ color: "#fbc02d", fontSize: 24, marginBottom: 10 }}>📚 Your Classes</h2>
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {classes.map(({ id, name, emoji }) => (
            <Link
              key={id}
              href={`/classes/${id}`}
              style={{
                cursor: "pointer",
                backgroundColor: "#fff9c4",
                padding: "20px",
                borderRadius: 12,
                boxShadow: "0 2px 5px rgba(251, 192, 45, 0.6)",
                flex: "1 0 150px",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#fbc02d",
                textDecoration: "none",
                userSelect: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ fontSize: 36 }}>{emoji}</div>
              {name}
            </Link>
          ))}
        </div>

        <SitKittenMascot />
      </section>

      <section
        style={{
          backgroundColor: "#e1f5fe",
          padding: 15,
          borderRadius: 12,
          marginBottom: 30,
          boxShadow: "0 0 10px #81d4fa",
        }}
      >
        <h2 style={{ color: "#0288d1", fontSize: 24, marginBottom: 10 }}>📝 Upcoming Assignments</h2>
        {assignments.length === 0 ? (
          <p style={{ fontSize: 18, fontWeight: "bold" }}>No upcoming assignments. Awesome job! 🎉</p>
        ) : (
          <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: 18 }}>
            {assignments.map(({ id, title, dueDate }) => (
              <li
                key={id}
                style={{
                  marginBottom: 10,
                  backgroundColor: "#b3e5fc",
                  padding: 10,
                  borderRadius: 8,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <strong>{title}</strong> <br />
                Due: {new Date(dueDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section
        style={{
          backgroundColor: "#fce4ec",
          padding: 15,
          borderRadius: 12,
          marginBottom: 30,
          boxShadow: "0 0 10px #f48fb1",
        }}
      >
        <h2 style={{ color: "#c2185b", fontSize: 24, marginBottom: 10 }}>👤 Your Profile</h2>
        <p style={{ fontSize: 18 }}>
          <strong>Email:</strong> {user?.email}
        </p>
        <p style={{ fontSize: 18 }}>
          <strong>User ID:</strong> {user?.uid}
        </p>
      </section>

      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#ff7043",
          color: "white",
          border: "none",
          padding: "12px 25px",
          cursor: "pointer",
          borderRadius: 12,
          fontWeight: "bold",
          fontSize: 18,
          width: "100%",
          boxShadow: "0 4px 6px rgba(255,112,67,0.6)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff5722")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff7043")}
      >
        Logout 🚪
      </button>

      {logoutError && (
        <p style={{ color: "red", marginTop: 10, fontWeight: "bold", fontSize: 16 }}>
          {logoutError}
        </p>
      )}
       <div className="bg-blue-500 text-white p-4">
      Hello Tailwind!
    </div>
    </div>
    
  );
}
