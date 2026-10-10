export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className="h-1 w-full bg-white/25"
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Playback progress"
    >
      <div className="h-full bg-accent" style={{ width: `${clamped}%` }} />
    </div>
  );
}
