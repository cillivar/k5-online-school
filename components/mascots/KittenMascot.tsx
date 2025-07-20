//to use
// import { KittenMascot } from "@/components/mascots/KittenMascot";
// <KittenMascot /> 

export function KittenMascot() {
  return (
    <svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* Body */}
      <ellipse cx="80" cy="85" rx="50" ry="25" fill="#1a1a1a" />

      {/* Tail */}
      <path
        d="M130 85 Q145 75 135 60"
        stroke="#1a1a1a"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="60" cy="60" r="25" fill="#1a1a1a" />

      {/* Ears */}
      <polygon points="45,45 40,25 55,40" fill="#1a1a1a" />
      <polygon points="75,45 80,25 65,40" fill="#1a1a1a" />

      {/* Eyes */}
      <circle cx="52" cy="58" r="5" fill="#fff" />
      <circle cx="68" cy="58" r="5" fill="#fff" />
      <circle cx="52" cy="58" r="2" fill="#000" />
      <circle cx="68" cy="58" r="2" fill="#000" />

      {/* Nose */}
      <polygon points="58,65 60,70 62,65" fill="#ff8888" />

      {/* Mouth */}
      <path
        d="M58 72 Q60 75 62 72"
        stroke="#ff8888"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Front Paws */}
      <ellipse cx="40" cy="95" rx="10" ry="6" fill="#1a1a1a" />
      <ellipse cx="60" cy="95" rx="10" ry="6" fill="#1a1a1a" />

      {/* Back Paws */}
      <ellipse cx="100" cy="100" rx="12" ry="8" fill="#1a1a1a" />
      <ellipse cx="120" cy="98" rx="12" ry="8" fill="#1a1a1a" />
    </svg>
  );
}




