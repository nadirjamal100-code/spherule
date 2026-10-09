type Props = { size?: number; className?: string };

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 4.5c3.2 3.6 3.2 7.4 0 11.5-3.2-4.1-3.2-7.9 0-11.5Zm0 23c-3.2-3.6-3.2-7.4 0-11.5 3.2 4.1 3.2 7.9 0 11.5ZM4.5 16c3.6-3.2 7.4-3.2 11.5 0-4.1 3.2-7.9 3.2-11.5 0Zm23 0c-3.6 3.2-7.4 3.2-11.5 0 4.1-3.2 7.9-3.2 11.5 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ size = 28, className = "" }: Props) {
  return (
    <span className={`logo ${className}`} style={{ fontSize: size }}>
      <LogoMark size={Math.round(size * 1.05)} />
      <span className="logo__text">Spherule</span>
    </span>
  );
}
