'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../../lib/firebase';


export default function Home() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserEmail(user.email);
        setLoading(false);
      } else {
        router.push('/login');
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    setLogoutError(null);
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err: any) {
      console.error('Logout failed:', err);
      setLogoutError('Something went wrong while logging out. Please try again.');
    }
  };

  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div className="spinner" />
        <p>Checking your session...</p>
        <style jsx>{`
          .spinner {
            margin: 20px auto;
            width: 40px;
            height: 40px;
            border: 4px solid #ccc;
            border-top: 4px solid #333;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
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
    <div style={{ padding: 20 }}>
      <h1 className="text-3xl font-bold text-blue-600">Welcome to K5 Online School</h1>
      {userEmail && <p>Logged in as: {userEmail}</p>}
      <button onClick={handleLogout} style={{ marginTop: 20 }}>
        Logout
      </button>
      {logoutError && <p style={{ color: 'red', marginTop: 10 }}>{logoutError}</p>}
    </div>
  );
}
