import { useEffect, useRef, useState } from 'react';
import { createTimeline } from 'animejs';
import { depth } from '../lib/parallax';
import { scrollToId } from '../lib/scroll';

const SECTIONS = [
  { id: 'summit', label: 'Summit' },
  { id: 'cloudline', label: 'Cloudline' },
  { id: 'forest', label: 'Forest' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'abyss', label: 'Abyss' },
  { id: 'orbit', label: 'Orbit' },
];

function Preloader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const o = { v: 0 };
    const num = document.getElementById('pl-num')!;
    const tl = createTimeline({ defaults: { ease: 'outExpo' } });
    tl.add(o, {
      v: 100, duration: 1200, ease: 'inOutQuart',
      onUpdate: () => { num.textContent = String(Math.round(o.v)).padStart(3, '0'); },
    })
      .add('#pl-bar', { scaleX: [0, 1], duration: 1200, ease: 'inOutQuart' }, 0)
      .add('#pl-inner', { opacity: [1, 0], y: [0, -18], duration: 450 })
      .add('#pl', { opacity: [1, 0], duration: 600, onComplete: () => setGone(true) }, '-=100');
  }, []);
  if (gone) return null;
  return (
    <div id="pl" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05060c]">
      <div id="pl-inner" className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-cyan-200" style={{ animationDuration: '1.1s' }} />
          <div className="absolute inset-4 rounded-full bg-cyan-200/20 blur-md" />
        </div>
        <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.35em] text-white/60">Calibrating depth</div>
        <div className="mt-4 h-px w-44 overflow-hidden bg-white/10">
          <div id="pl-bar" className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-200 via-violet-300 to-pink-200" />
        </div>
        <div id="pl-num" className="mt-3 font-mono text-xs text-white/45">000</div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#summit" className="group flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
            <span className="h-2 w-2 rounded-full bg-cyan-200 transition-transform duration-500 group-hover:scale-150" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-sm font-bold tracking-[0.2em]">PARALLAX</span>
            <span className="mt-1 block font-mono text-[9px] tracking-[0.3em] text-white/45">A SCROLL STUDY</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:bg-white/10 hover:text-white">
              {s.label}
            </button>
          ))}
        </nav>
        <a href="https://techfest.org" target="_blank" rel="noopener"
          className="rounded-full border border-white/25 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/85 transition-colors hover:bg-white hover:text-[#05060c]">
          techfest.org
        </a>
      </div>
    </header>
  );
}

/** Right hand rail with section dots. */
function Rail() {
  const dots = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const on = () => {
      const mid = window.innerHeight / 2;
      let active = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) active = i;
      });
      dots.current.forEach((d, i) => {
        if (!d) return;
        d.style.height = i === active ? '28px' : '8px';
        d.style.background = i === active ? '#a5f3fc' : 'rgba(255,255,255,0.35)';
        d.style.boxShadow = i === active ? '0 0 14px rgba(165,243,252,0.8)' : 'none';
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      {SECTIONS.map((s, i) => (
        <button key={s.id} aria-label={s.label} onClick={() => scrollToId(s.id)}
          className="group relative flex items-center">
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span ref={el => { dots.current[i] = el; }} className="block w-[3px] rounded-full transition-all duration-500" />
        </button>
      ))}
    </div>
  );
}

/** Bottom left readout: section index, name and scroll depth. */
function Hud() {
  const idx = useRef<HTMLSpanElement>(null);
  const name = useRef<HTMLSpanElement>(null);
  const pct = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const mid = window.innerHeight / 2;
      let active = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) active = i;
      });
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (idx.current) idx.current.textContent = `0${active + 1}`;
      if (name.current) name.current.textContent = SECTIONS[active].label;
      if (pct.current) pct.current.textContent = `${Math.round(p * 100)}%`;
      if (bar.current) bar.current.style.width = `${p * 100}%`;
      if (cue.current) cue.current.style.opacity = window.scrollY > 80 ? '0' : '1';
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return (
    <>
      <div className="pointer-events-none fixed bottom-6 left-6 z-40 hidden sm:block">
        <div className="glass rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <span ref={idx} className="font-display text-2xl font-bold tabular-nums">01</span>
            <span className="h-7 w-px bg-white/20" />
            <span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-white/45">Scene</span>
              <span ref={name} className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">Summit</span>
            </span>
          </div>
          <div className="mt-3 h-px w-36 overflow-hidden bg-white/15">
            <div ref={bar} className="h-full w-0 bg-cyan-200" />
          </div>
          <div className="mt-2 font-mono text-[10px] text-white/45">
            Depth travelled <span ref={pct} className="tabular-nums text-white/80">0%</span>
          </div>
        </div>
      </div>
      <div ref={cue} className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-500 sm:hidden">
        <div className="scroll-cue flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-cyan-200 to-transparent" />
        </div>
      </div>
    </>
  );
}

/** Bottom right control that changes how hard the layers pull apart. */
function DepthControl() {
  const [v, setV] = useState(1);
  useEffect(() => { depth.scale = v; }, [v]);
  const modes: [string, number][] = [['Calm', 0.45], ['Normal', 1], ['Wild', 1.9]];
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <div className="glass rounded-2xl px-3 py-2.5">
        <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-white/45">Layer depth</div>
        <div className="flex gap-1">
          {modes.map(([label, val]) => (
            <button key={label} onClick={() => setV(val)}
              className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                v === val ? 'bg-cyan-200 text-[#05060c]' : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Chrome() {
  return (
    <>
      <Preloader />
      <Nav />
      <Rail />
      <Hud />
      <DepthControl />
    </>
  );
}
