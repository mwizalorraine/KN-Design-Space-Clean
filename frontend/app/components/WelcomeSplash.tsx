'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WELCOME_TEXT = 'Transforming Lives Through Architecture    ';
const DURATION = 15000;

function alreadySeen() {
  try {
    return sessionStorage.getItem('kn_welcome_seen') === 'true';
  } catch {
    return false;
  }
}

export default function WelcomeSplash() {
  // Decide BEFORE the first paint so returning visitors never see a flash
  const [show, setShow] = useState(() =>
    typeof window === 'undefined' ? true : !alreadySeen()
  );
  const [progress, setProgress] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Progress bar + exit timer (independent of the video)
  useEffect(() => {
    if (!show) return;

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / DURATION) * 100));
      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem('kn_welcome_seen', 'true');
        } catch {}
        setShow(false);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [show]);

  // Video: show it only once it can play through without stalling
  useEffect(() => {
    if (!show || videoFailed) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const onReady = () => {
      setVideoReady(true);
      video.play().catch((err: unknown) => {
        console.warn('Welcome video playback issue:', err);
      });
    };
    const onWaiting = () => setVideoReady(false); // stalled: fall back to poster
    const onError = () => setVideoFailed(true);

    video.addEventListener('canplaythrough', onReady);
    video.addEventListener('playing', () => setVideoReady(true));
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('error', onError);

    if (video.readyState >= 4) onReady();

    return () => {
      video.removeEventListener('canplaythrough', onReady);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('error', onError);
    };
  }, [show, videoFailed]);

  const revealedCount = Math.floor((progress / 100) * WELCOME_TEXT.length);
  const visibleText = WELCOME_TEXT.slice(0, revealedCount);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          className="fixed inset-0 z-[200] overflow-hidden bg-[var(--charcoal)]"
        >
          {/* BACKGROUND: poster always underneath, video fades in on top */}
          {!posterFailed ? (
            <img
              src="/videos/welcome-poster.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setPosterFailed(true)}
            />
          ) : (
            <img
              src="/images/night view.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {!videoFailed && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`} /* use object-contain instead if you want no cropping */
            >
              <source src="/videos/welcome-video.mp4" type="video/mp4" />
            </video>
          )}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-[var(--paper-light)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-lg px-6 md:px-10 py-8 mb-0"
            >
              <img
                src="/images/Artboard 3 1.png"
                alt="KN Design Space"
                className="h-56 md:h-80 w-auto"
              />
            </motion.div>

            <p className="font-serif italic text-xl md:text-5xl opacity-100 mb-7 min-h-[1.5em] text-[var(--on-dark)]">
              {visibleText}
              <span className="animate-pulse" />
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full max-w-[420px]"
            >
              <div className="h-[6px] md:h-[10px] w-full bg-white/20 overflow-hidden rounded-full">
                <div
                  className="h-full bg-[var(--brass)] transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="font-mono text-[20.5px] uppercase tracking-widest opacity-80 mt-3 text-[var(--on-dark)]">
                Loading — {progress}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}