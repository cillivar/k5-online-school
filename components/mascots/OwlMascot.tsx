// to use
// import { OwlMascot } from "@/components/mascots/OwlMascot";
// <OwlMascot /> 
export function OwlMascot() {
  return (
    <svg
      width="140"
      height="160"
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginBottom: 20, display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
      {/* Body gradient */}
      <defs>
        <linearGradient id="bodyGradient" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5c42a6" />
          <stop offset="1" stopColor="#3a2376" />
        </linearGradient>
        <radialGradient id="eyeGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#a2a2a2" />
        </radialGradient>
      </defs>

      {/* Body */}
      <ellipse cx="32" cy="38" rx="22" ry="28" fill="url(#bodyGradient)" stroke="#271a47" strokeWidth="2" />
      
      {/* Feather details */}
      <path
        d="M12 35 Q18 50 32 50 Q46 50 52 35"
        stroke="#493b81"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 25 Q25 40 32 40 Q39 40 44 25"
        stroke="#493b81"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Wings */}
      <path
        d="M10 48 Q6 32 18 36"
        fill="#3a2376"
        stroke="#271a47"
        strokeWidth="2"
      />
      <path
        d="M54 48 Q58 32 46 36"
        fill="#3a2376"
        stroke="#271a47"
        strokeWidth="2"
      />
      
      {/* Eyes background */}
      <circle cx="20" cy="22" r="10" fill="url(#eyeGradient)" stroke="#271a47" strokeWidth="2" />
      <circle cx="44" cy="22" r="10" fill="url(#eyeGradient)" stroke="#271a47" strokeWidth="2" />
      
      {/* Pupils */}
      <circle cx="20" cy="22" r="6" fill="#fbc02d" />
      <circle cx="44" cy="22" r="6" fill="#fbc02d" />
      <circle cx="20" cy="22" r="3" fill="#271a47" />
      <circle cx="44" cy="22" r="3" fill="#271a47" />
      
      {/* Beak */}
      <polygon points="28,35 32,40 36,35" fill="#fbc02d" stroke="#271a47" strokeWidth="1" />
      
      {/* Eyebrows */}
      <path d="M12 12 Q20 5 28 12" stroke="#271a47" strokeWidth="2" fill="none" />
      <path d="M36 12 Q44 5 52 12" stroke="#271a47" strokeWidth="2" fill="none" />
      
      {/* Feet */}
      <ellipse cx="20" cy="66" rx="6" ry="4" fill="#fbc02d" stroke="#271a47" strokeWidth="1.5" />
      <ellipse cx="44" cy="66" rx="6" ry="4" fill="#fbc02d" stroke="#271a47" strokeWidth="1.5" />
      {/* Toes */}
      <line x1="14" y1="68" x2="11" y2="72" stroke="#271a47" strokeWidth="1" />
      <line x1="18" y1="68" x2="16" y2="72" stroke="#271a47" strokeWidth="1" />
      <line x1="44" y1="68" x2="47" y2="72" stroke="#271a47" strokeWidth="1" />
      <line x1="40" y1="68" x2="42" y2="72" stroke="#271a47" strokeWidth="1" />
    </svg>
  );
}