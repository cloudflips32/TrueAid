import { useEffect, useState, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
}

export function VideoBackground({
  src,
  fallbackSrc = "/landing-alt.jpg",
  poster,
  className,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect mobile viewport (< 768px matches tailwind's md breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only set up video if we are confirmed to be on desktop
    if (isMobile || isMobile === null) return;

    const video = videoRef.current;
    if (!video) return;

    // Set properties explicitly on the DOM node to bypass React's virtual DOM
    // rendering differences and strict browser autoplay restrictions
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    // Explicitly request video playback on mount/desktop transition
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Log a warning instead of a hard crash since mobile browsers can prevent this
        // under low power mode or standard data saving settings.
        console.warn("Video autoPlay was prevented by the browser:", error);
      });
    }
  }, [isMobile]);

  // Render the static high-performance fallback image before mount or on mobile screens
  if (isMobile === true || isMobile === null) {
    return (
      <img
        src={fallbackSrc}
        className={className}
        alt="Landing Background"
        loading="eager"
      />
    );
  }

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
