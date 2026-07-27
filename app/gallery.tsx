"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type ProjectGalleryProps = { images: string[]; projectName: string };

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => setIsOpen(false), []);
  const showNext = useCallback(() => setCurrentImage((i) => (i + 1) % images.length), [images.length]);
  const showPrev = useCallback(() => setCurrentImage((i) => (i - 1 + images.length) % images.length), [images.length]);

  // Keyboard support: Escape to close, Arrow keys to navigate
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    // Lock body scroll while modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal, showNext, showPrev]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Thumbnail Gallery */}
      <div className="mt-4 w-full max-w-md">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-zinc-900">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative h-full w-full cursor-zoom-in"
            aria-label={`Enlarge ${projectName} image ${currentImage + 1}`}
          >
            <Image
              src={images[currentImage]}
              alt={`${projectName} screenshot ${currentImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-scale-down"
            />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black"
                aria-label="Show previous project image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black"
                aria-label="Show next project image"
              >
                →
              </button>
              <p className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                {currentImage + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} preview`}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage]}
              alt={`${projectName} screenshot ${currentImage + 1}`}
              width={1200}
              height={900}
              className="max-h-[85vh] max-w-[85vw] object-contain"
              priority
            />

            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-10 right-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
              aria-label="Close preview"
            >
              ✕ Close
            </button>

            {/* Navigation inside lightbox */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl text-white hover:bg-black"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl text-white hover:bg-black"
                  aria-label="Next image"
                >
                  →
                </button>
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-black/70 px-3 py-1 text-sm text-white">
                  {currentImage + 1} / {images.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}