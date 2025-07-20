"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { OwlMascot } from "@/components/mascots/OwlMascot";
import { KittenMascot } from "@/components/mascots/KittenMascot";




export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Oops! That didn’t work. Please check your info and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 30,
        backgroundColor: "#fffde7",
        borderRadius: 20,
        boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        textAlign: "center",
      }}
    >
      <KittenMascot /> 
      <h1 style={{ fontSize: 36, color: "#fbc02d", marginBottom: 20 }}>
        🚀 Welcome Back! 🚀
      </h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: 6, fontSize: 18, color: "#f9a825" }}
        >
          📧 Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
          autoComplete="username"
          style={{
            width: "100%",
            padding: "12px 10px",
            fontSize: 18,
            borderRadius: 10,
            border: "2px solid #f9a825",
            marginBottom: 20,
            outline: "none",
          }}
        />

        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: 6, fontSize: 18, color: "#f9a825" }}
        >
          🔒 Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          style={{
            width: "100%",
            padding: "12px 10px",
            fontSize: 18,
            borderRadius: 10,
            border: "2px solid #f9a825",
            marginBottom: 10,
            outline: "none",
          }}
        />

        {error && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            backgroundColor: "#fbc02d",
            border: "none",
            padding: "15px 0",
            fontSize: 22,
            fontWeight: "bold",
            borderRadius: 15,
            cursor: loading ? "default" : "pointer",
            color: "#4a148c",
            boxShadow: "0 5px 10px rgba(251, 192, 7, 0.7)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (!loading) e.currentTarget.style.backgroundColor = "#f9a825";
          }}
          onMouseLeave={(e) => {
            if (!loading) e.currentTarget.style.backgroundColor = "#fbc02d";
          }}
        >
          {loading ? "Loading..." : "Login 🔑"}
        </button>
      </form>

      <p style={{ marginTop: 25, fontSize: 16, color: "#6a1b9a" }}>
        Don’t have an account?{" "}
        <Link
          href="/register"
          style={{ color: "#f9a825", fontWeight: "bold", textDecoration: "underline" }}
        >
          Register here!
        </Link>
      </p>
    </div>
  );
}
