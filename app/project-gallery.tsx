"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = { images: string[]; projectName: string };

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="mt-4 w-full max-w-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-zinc-900">
        <Image src={images[currentImage]} alt={`${projectName} screenshot ${currentImage + 1}`} fill sizes="(max-width: 768px) 100vw, 448px" className="object-scale-down" />
        {images.length > 1 && <>
          <button type="button" onClick={() => setCurrentImage((image) => (image - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black" aria-label="Show previous project image">←</button>
          <button type="button" onClick={() => setCurrentImage((image) => (image + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black" aria-label="Show next project image">→</button>
          <p className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">{currentImage + 1} / {images.length}</p>
        </>}
      </div>
    </div>
  );
}
