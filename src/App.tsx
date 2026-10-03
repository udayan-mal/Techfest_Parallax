import { useEffect } from 'react';
import Lenis from 'lenis';
import Chrome from './components/Chrome';
import { Summit, Cloudline, Forest, Ocean, Abyss, Orbit } from './components/Scenes';
import { useCursorParallax } from './lib/parallax';
import { scrollToId } from './lib/scroll';

function Outro() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05060c] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="font-display text-[13vw] font-black leading-none tracking-tight outline opacity-40 lg:text-[9rem]">
          PARALLAX
        </div>
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <div className="font-display text-sm font-bold tracking-[0.2em]">A SCROLL STUDY</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Six scenes, forty layers, one scroll listener. Every mountain, tree, cloud and creature here is vector art moved at its own speed.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Jump to</span>
            {['summit', 'cloudline', 'forest', 'ocean', 'abyss', 'orbit'].map(id => (
              <button key={id} onClick={() => scrollToId(id)}
                className="text-left text-white/60 capitalize transition-colors hover:text-cyan-200">
                {id}
              </button>
            ))}
          </div>
          <div className="md:text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Built with</div>
            <p className="mt-3 text-sm text-white/55">React, Tailwind, anime.js and Lenis</p>
            <p className="mt-6 text-sm text-white/55">© 2026 A scroll study</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useCursorParallax();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <>
      <Chrome />
      <main>
        <Summit />
        <Cloudline />
        <Forest />
        <Ocean />
        <Abyss />
        <Orbit />
      </main>
      <Outro />
    </>
  );
}
