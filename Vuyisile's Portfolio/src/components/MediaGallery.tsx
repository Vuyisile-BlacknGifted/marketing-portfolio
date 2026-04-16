"use client";

import { useState } from "react";
import { MediaPlaceholderCard } from "@/components/cards";

type MediaItem = {
  category: string;
  title: string;
  helper: string;
  previewLabel: string;
};

type MediaGalleryProps = {
  items: MediaItem[];
};

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveItem(item)}
            className="text-left"
          >
            <MediaPlaceholderCard {...item} />
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-greenDeep">
              {activeItem.category}
            </p>
            <h4 className="mt-2 text-xl font-semibold text-darkText">{activeItem.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{activeItem.helper}</p>
            <div className="mt-5 rounded-xl border border-dashed border-border bg-slate p-10 text-center text-sm text-muted">
              {activeItem.previewLabel}
            </div>
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-greenDeep"
            >
              Close Preview
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
