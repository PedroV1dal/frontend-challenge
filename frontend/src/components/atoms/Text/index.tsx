import "./index.css";

interface TextProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Text({ children, className }: TextProps) {
  return <span className={`text ${className}`}>{children}</span>;
}
