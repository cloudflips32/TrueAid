import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoBackground({ src, poster, className }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set properties explicitly on the DOM node to bypass React's virtual DOM
    // rendering differences and strict browser autoplay restrictions
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    // Explicitly request video playback on mount
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Log a warning instead of a hard crash since mobile browsers can prevent this
        // under low power mode or standard data saving settings.
        console.warn("Video autoPlay was prevented by the mobile browser:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      src={src}
      poster={poster}
      className={className}
    />
  );
}
