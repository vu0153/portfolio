import Image from "next/image";

export default function StoryPhoto({ src, alt, width, height, caption, className = "", priority = false }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden bg-line/20">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
