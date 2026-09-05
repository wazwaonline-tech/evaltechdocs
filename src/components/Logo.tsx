export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`font-mono text-[15px] font-bold tracking-tight text-ink ${className}`}
    >
      eval<span className="text-signal">tech</span>
    </a>
  );
}
