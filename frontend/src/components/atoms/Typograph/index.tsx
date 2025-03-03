import "./index.css";

interface TypographyProps {
  readonly variant?: "h1" | "h2" | "h3" | "p" | "span";
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Typography({ variant, children, className }: TypographyProps) {
  return (
    <span className={`typography ${variant} ${className ?? ""}`}>
      {children}
    </span>
  );
}
