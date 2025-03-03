import "./index.css";

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="avatar" />;
}
