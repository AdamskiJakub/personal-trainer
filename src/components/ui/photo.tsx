import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  objectFit?: "cover" | "contain";
}

export function Photo({
  src,
  alt,
  priority = false,
  className = "",
  objectFit = "cover",
}: PhotoProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-surface ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
        aria-hidden="true"
      />
    </div>
  );
}
