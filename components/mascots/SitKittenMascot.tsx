//to use
// import { SitKittenMascot } from "@/components/mascots/KittenMascot";
// <SitKittenMascot /> 
export function SitKittenMascot() {
  return (
    <svg
      width="140"
      height="160"
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "20px auto" }}
    >
      {/* Tail */}
      <path
        d="M10 50 C0 40 8 28 20 38"
        fill="none"
        stroke="#111"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Body */}
      <ellipse cx="32" cy="55" rx="20" ry="20" fill="#111" stroke="#333" strokeWidth="2" />

      {/* Front legs */}
      <ellipse cx="22" cy="70" rx="4" ry="6" fill="#111" stroke="#333" strokeWidth="1" />
      <ellipse cx="42" cy="70" rx="4" ry="6" fill="#111" stroke="#333" strokeWidth="1" />

      {/* Head */}
      <circle cx="32" cy="30" r="18" fill="#111" stroke="#333" strokeWidth="2" />

      {/* Ears */}
      <polygon points="14,20 22,8 24,26" fill="#111" stroke="#333" strokeWidth="2" />
      <polygon points="50,20 42,8 40,26" fill="#111" stroke="#333" strokeWidth="2" />

      {/* Eyes */}
      <ellipse cx="24" cy="30" rx="5" ry="7" fill="#eee" />
      <ellipse cx="40" cy="30" rx="5" ry="7" fill="#eee" />
      <ellipse cx="24" cy="30" rx="2.5" ry="4" fill="#0f0" />
      <ellipse cx="40" cy="30" rx="2.5" ry="4" fill="#0f0" />

      {/* Nose */}
      <polygon points="29,38 32,41 35,38" fill="#a33" />

      {/* Mouth */}
      <path d="M29 41 Q32 45 35 41" stroke="#a33" strokeWidth="1.5" fill="none" />

      {/* Whiskers */}
      <line x1="8" y1="35" x2="22" y2="35" stroke="#666" strokeWidth="1" />
      <line x1="8" y1="39" x2="22" y2="39" stroke="#666" strokeWidth="1" />
      <line x1="46" y1="35" x2="60" y2="35" stroke="#666" strokeWidth="1" />
      <line x1="46" y1="39" x2="60" y2="39" stroke="#666" strokeWidth="1" />
    </svg>
  );
}