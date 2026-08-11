"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/app/components/ImageLightbox";

interface ProjectImage {
  src: string;
  alt: string;
}

const IMAGES: ProjectImage[] = Array.from({ length: 23 }, (_, i) => ({
  src: `/images/projects/project-${i + 1}.jpg`,
  alt: `Arkylite Design + Build project photo ${i + 1}`,
}));

export default function ProjectsClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#7D7873] text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#4A4743] mb-8"
      >
        ← Back to Home
      </Link>
      <h1 className="text-[#4A4743] text-4xl md:text-5xl font-semibold mb-4">
        All Projects
      </h1>
      <p className="text-[#7D7873] max-w-xl mb-16 text-base">
        A complete collection of our completed projects across residential,
        commercial, and industrial sectors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="aspect-[4/3] overflow-hidden relative group w-full text-left cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i !== null ? (i === 0 ? IMAGES.length - 1 : i - 1) : 0
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i !== null ? (i === IMAGES.length - 1 ? 0 : i + 1) : 0
            )
          }
        />
      )}
    </>
  );
}
