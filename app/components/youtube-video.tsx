'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = { id: string; title: string };

export default function YouTubeVideo({ id, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return <div className="youtube-video">
    {playing ? <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    /> : <button type="button" className="video-cover" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
      <Image src={`/media/${id}.jpg`} alt={title} width={1280} height={720} sizes="(max-width: 620px) 90vw, 640px" />
      <span className="play-button" aria-hidden="true">▶</span>
      <span className="cover-label">Play video</span>
    </button>}
  </div>;
}
