export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="relative h-16 w-16">
        <span className="absolute inset-0 rounded-xl2 border-2 border-navy/15" />
        <span
          className="absolute inset-0 rounded-xl2 border-2 border-aqua origin-center"
          style={{ animation: "morph 1.6s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes morph {
          0% { transform: scale(0.6) rotate(0deg); border-radius: 24px; opacity: 0.3; }
          50% { transform: scale(1) rotate(90deg); border-radius: 50%; opacity: 1; }
          100% { transform: scale(0.6) rotate(180deg); border-radius: 24px; opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
