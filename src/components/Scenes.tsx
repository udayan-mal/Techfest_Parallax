import type { ReactNode } from 'react';
import { Scene, Layer } from '../lib/parallax';
import Particles from '../lib/Particles';
import { Reveal, RevealWords } from '../lib/reveal';
import { scrollToY } from '../lib/scroll';
import {
  Ridge, Ridge2, Ridge3, PineRow, Treeline, Trunks, Cloud, Mist, Waves,
  Boat, Fish, Jelly, Angler, Sub, Planet, Satellite, Bird, Balloon, Deer, Rocket,
} from './Art';

function Stack({ children }: { children: ReactNode }) {
  return <div className="scene-stack">{children}</div>;
}

/**
 * Bottom anchored band of scenery. Heights are deliberately larger than the
 * visible area so a layer can rise without ever exposing an empty edge.
 */
function At({ h = '100%', children, className = '' }: { h?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`absolute inset-x-0 bottom-0 ${className}`} style={{ height: h }}>
      {children}
    </div>
  );
}

type CopyProps = {
  tag: string;
  tagColor?: string;
  title: string;
  body?: string;
  align?: 'left' | 'right' | 'center';
  children?: ReactNode;
  aside?: ReactNode;
};

function Copy({ tag, tagColor = '#a5f3fc', title, body, align = 'left', children, aside }: CopyProps) {
  const pos =
    align === 'right'
      ? 'ml-auto items-end text-right'
      : align === 'center'
        ? 'mx-auto items-center text-center'
        : 'items-start text-left';
  return (
    <div className="absolute inset-0 z-30 flex items-end px-6 pb-28 sm:items-center sm:px-12 sm:pb-0 lg:px-20">
      <div className={`flex w-full max-w-xl flex-col ${pos}`}>
        <Reveal>
          <div className="tag mb-4" style={{ color: tagColor }}>{tag}</div>
        </Reveal>
        <RevealWords as="h2" text={title} step={70}
          className="font-display text-[10vw] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl" />
        {body && (
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">{body}</p>
          </Reveal>
        )}
        {children && <Reveal delay={200}>{children}</Reveal>}
        {aside && <Reveal delay={280}>{aside}</Reveal>}
      </div>
    </div>
  );
}

/* ============================ 01 SUMMIT ============================ */
export function Summit() {
  return (
    <Scene id="summit" minHeight={260}>
      <Stack>
        <Layer speed={0} scale={0.16} className="bg-[linear-gradient(180deg,#04050f_0%,#0d1230_38%,#2b2352_62%,#6b4470_82%,#c2703f_100%)]" />

        <Layer speed={0.02} op={[0.95, 0.05]} className="hidden sm:block">
          <Particles mode="star" count={70} speed={0.02} />
        </Layer>

        <Layer speed={-0.05} scale={0.2} op={[1, 0.15]} className="flex items-start justify-center">
          <div className="mt-[16vh] h-40 w-40 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff7e6,#ffd9a0_45%,#f0a26b_70%,transparent_72%)] blur-[2px] sm:h-56 sm:w-56" />
        </Layer>

        <At h="72%">
          <Layer speed={-0.06} blur={[0, 2]}>
            <Ridge fill="#2a2b52" />
          </Layer>
        </At>

        <At h="82%">
          <Layer speed={-0.13} blur={[0, 1]}>
            <Ridge2 fill="#1a1c3c" />
          </Layer>
        </At>

        <Layer speed={-0.3} className="hidden md:block">
          <Particles mode="snow" count={50} speed={-0.35} opacity={0.75} />
        </Layer>

        <At h="96%">
          <Layer speed={-0.22}>
            <Ridge3 fill="#0c0e22" />
          </Layer>
        </At>

        <Layer speed={-0.2} className="hidden lg:block">
          <div className="drift absolute left-[8%] top-[22%] w-16 opacity-70"><Bird fill="#0b1220" /></div>
          <div className="drift absolute left-[18%] top-[30%] w-10 opacity-60" style={{ animationDelay: '-6s' }}><Bird fill="#0b1220" /></div>
          <div className="drift absolute right-[14%] top-[18%] w-12 opacity-50" style={{ animationDelay: '-12s' }}><Bird fill="#0b1220" /></div>
        </Layer>

        <At h="112%">
          <Layer speed={-0.34}>
            <PineRow fill="#04060f" />
          </Layer>
        </At>

        <Copy
          tag="01 / Summit"
          title="Above the cloudline"
          body="Every great descent starts with a climb. Scroll down and the world drifts past at its own pace, layer by layer."
          aside={
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="glass rounded-full px-4 py-2 font-mono text-xs text-white/80">Altitude 2,400 m</span>
              <span className="font-mono text-xs text-white/50">Keep scrolling</span>
            </div>
          }
        />
      </Stack>
    </Scene>
  );
}

/* ========================== 02 CLOUDLINE ========================== */
export function Cloudline() {
  return (
    <Scene id="cloudline" minHeight={250}>
      <Stack>
        <Layer speed={0} scale={0.14} className="bg-[linear-gradient(180deg,#1b1440_0%,#4b3573_35%,#a05a7a_65%,#f0a26b_88%,#ffd9a0_100%)]" />

        <Layer speed={0.02} op={[0, 0.9]} className="hidden sm:block">
          <Particles mode="star" count={50} speed={0.02} />
        </Layer>

        <Layer speed={-0.06} scale={0.24} className="flex items-start justify-center">
          <div className="glow-pulse mt-[14vh] h-44 w-44 rounded-full bg-[radial-gradient(circle_at_40%_40%,#fffdf5,#ffe6b8_40%,#ffb35c_65%,transparent_70%)] sm:h-64 sm:w-64" />
        </Layer>

        <At h="64%">
          <Layer speed={-0.05} blur={[3, 5]} op={[0.45, 0.25]}>
            <div className="absolute bottom-[44%] left-[-6%] aspect-[3/1] w-[54%] opacity-70"><Cloud fill="#f6d9c9" /></div>
            <div className="absolute right-[-8%] bottom-[10%] aspect-[3/1] w-[62%] opacity-60"><Cloud fill="#f6d9c9" /></div>
          </Layer>
        </At>

        <At h="78%">
          <Layer speed={-0.12} blur={[1, 2]} op={[0.85, 0.55]}>
            <div className="absolute bottom-[26%] left-[-10%] aspect-[3/1] w-[66%]"><Cloud fill="#ffffff" /></div>
            <div className="absolute right-[-12%] bottom-[0%] aspect-[3/1] w-[60%]"><Cloud fill="#ffe9d6" /></div>
          </Layer>
        </At>

        <At h="100%">
          <Layer speed={-0.2} op={[0.95, 0.7]}>
            <div className="absolute bottom-[0%] left-[-16%] aspect-[3/1] w-[82%]"><Cloud fill="#ffffff" /></div>
            <div className="absolute right-[-20%] bottom-[16%] aspect-[3/1] w-[74%]"><Cloud fill="#fff4e8" /></div>
          </Layer>
        </At>

        <Layer speed={-0.14}>
          <div className="sway-slow absolute bottom-[22%] right-[16%] w-28 sm:w-40">
            <Balloon fill="#f43f5e" />
          </div>
        </Layer>

        <Copy
          align="right"
          tag="02 / Cloudline"
          tagColor="#ffd9a0"
          title="Drifting between the peaks"
          body="Clouds are the clearest lesson in parallax. The distant ones barely move, the ones you fly through rush past in a heartbeat."
          aside={
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[['0.05', 'far'], ['0.12', 'mid'], ['0.20', 'near']].map(([v, l]) => (
                <div key={l} className="glass rounded-2xl px-3 py-3">
                  <div className="font-mono text-lg text-white">{v}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/55">{l}</div>
                </div>
              ))}
            </div>
          }
        />
      </Stack>
    </Scene>
  );
}

/* ============================ 03 FOREST ============================ */
export function Forest() {
  return (
    <Scene id="forest" minHeight={260}>
      <Stack>
        <Layer speed={0} scale={0.15} className="bg-[linear-gradient(180deg,#04120f_0%,#0a2a24_40%,#12503c_72%,#1c6a4a_100%)]" />

        <At h="58%">
          <Layer speed={-0.05} blur={[0, 2]}>
            <Ridge3 fill="#0c2b26" />
          </Layer>
        </At>

        <At h="48%">
          <Layer speed={-0.1} blur={[6, 8]} op={[0.55, 0.3]}>
            <Mist fill="#bfe6dd" />
          </Layer>
        </At>

        <Layer speed={-0.14} className="hidden sm:block">
          <Particles mode="firefly" count={40} speed={-0.15} />
        </Layer>

        <At h="78%">
          <Layer speed={-0.16} blur={[0.5, 1.5]}>
            <Treeline fill="#0d332c" />
          </Layer>
        </At>

        <At h="56%">
          <Layer speed={-0.22} blur={[2, 4]} op={[0.7, 0.45]}>
            <Mist fill="#d7f2ea" />
          </Layer>
        </At>

        <At h="98%">
          <Layer speed={-0.3}>
            <Treeline fill="#07211d" />
          </Layer>
        </At>

        <Layer speed={-0.24} className="hidden md:block">
          <div className="absolute bottom-[14%] left-[6%] w-40 opacity-95 lg:w-56">
            <Deer fill="#03100c" />
          </div>
        </Layer>

        <At h="118%">
          <Layer speed={-0.4}>
            <Trunks fill="#020807" />
          </Layer>
        </At>

        <Copy
          tag="03 / Forest"
          tagColor="#a3e635"
          title="Where the light gets shy"
          body="Four bands of trees, each one moving faster than the last. Your brain reads that difference as distance, and a flat screen gains depth."
          aside={
            <div className="mt-8 flex flex-wrap gap-3">
              {['mist', 'fireflies', 'silhouettes'].map(t => (
                <span key={t} className="glass rounded-full px-4 py-2 text-xs text-white/80">{t}</span>
              ))}
            </div>
          }
        />
      </Stack>
    </Scene>
  );
}

/* ============================= 04 OCEAN ============================= */
export function Ocean() {
  return (
    <Scene id="ocean" minHeight={260}>
      <Stack>
        <Layer speed={0} scale={0.16} className="bg-[linear-gradient(180deg,#bff0ff_0%,#5fc7e8_18%,#1a7ba6_45%,#0b4a6f_72%,#062a44_100%)]" />

        <Layer speed={-0.04} className="hidden sm:block">
          <div className="ray absolute left-[10%] top-[6%] h-[70%] w-24 bg-gradient-to-b from-white/40 to-transparent blur-2xl" />
          <div className="ray absolute left-[34%] top-[2%] h-[80%] w-16 bg-gradient-to-b from-white/30 to-transparent blur-2xl" style={{ animationDelay: '-3s' }} />
          <div className="ray absolute left-[62%] top-[10%] h-[65%] w-28 bg-gradient-to-b from-white/25 to-transparent blur-2xl" style={{ animationDelay: '-6s' }} />
        </Layer>

        <Layer speed={0.08}>
          <div className="absolute inset-x-0 top-0 h-[20%]">
            <Waves fill="#0e7490" />
          </div>
        </Layer>

        <Layer speed={-0.1} className="hidden md:block">
          <div className="sway absolute left-[58%] top-[26%] w-56 lg:w-72">
            <Boat fill="#04212e" />
          </div>
        </Layer>

        <At h="44%">
          <Layer speed={-0.18} blur={[1, 2]} op={[0.8, 0.4]}>
            <div className="absolute bottom-[30%] left-[8%] w-20 opacity-80"><Fish fill="#083344" /></div>
            <div className="absolute bottom-[12%] left-[26%] w-14 opacity-70"><Fish fill="#083344" /></div>
            <div className="absolute right-[12%] bottom-[36%] w-24 opacity-75"><Fish fill="#083344" /></div>
            <div className="absolute right-[30%] bottom-[16%] w-16 opacity-60"><Fish fill="#083344" /></div>
          </Layer>
        </At>

        <Layer speed={-0.34}>
          <Particles mode="bubble" count={45} speed={-0.4} />
        </Layer>

        <Copy
          tag="04 / Ocean"
          tagColor="#7dd3fc"
          title="The surface slips away"
          body="Above, the boat drifts slowly. Below, the bubbles race upward. Same scroll, different speeds, and the water suddenly has volume."
          aside={
            <div className="glass mt-8 w-full max-w-md rounded-2xl p-5">
              <div className="flex items-center justify-between font-mono text-xs text-white/70">
                <span>Depth</span><span>0 m</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/15">
                <div className="h-full w-1/3 rounded-full bg-cyan-200" />
              </div>
            </div>
          }
        />
      </Stack>
    </Scene>
  );
}

/* ============================= 05 ABYSS ============================= */
export function Abyss() {
  return (
    <Scene id="abyss" minHeight={280}>
      <Stack>
        <Layer speed={0} scale={0.16} className="bg-[linear-gradient(180deg,#03101f_0%,#050818_45%,#0a0620_75%,#150a2e_100%)]" />

        <Layer speed={-0.12}>
          <Particles mode="marine" count={70} speed={-0.25} opacity={0.7} />
        </Layer>

        <Layer speed={-0.1} className="hidden sm:block">
          <div className="sway-slow absolute left-[14%] top-[16%] w-24 opacity-90 lg:w-32"><Jelly fill="#c4b5fd" /></div>
          <div className="sway-slow absolute right-[18%] top-[34%] w-16 opacity-70 lg:w-24" style={{ animationDelay: '-4s' }}><Jelly fill="#a78bfa" /></div>
        </Layer>

        <Layer speed={-0.2} className="hidden md:block">
          <div className="glow-pulse absolute bottom-[22%] left-[6%] w-64 lg:w-80">
            <Angler fill="#0e1424" />
          </div>
        </Layer>

        <At h="46%">
          <Layer speed={-0.3}>
            <Sub fill="#0b1120" className="absolute bottom-[6%] left-[-4%] w-[70%] max-w-3xl opacity-95" />
          </Layer>
        </At>

        <Layer speed={-0.16} className="hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(253,230,138,0.16),transparent_45%)]" />
        </Layer>

        <Copy
          align="center"
          tag="05 / Abyss"
          tagColor="#c4b5fd"
          title="Two thousand metres down"
          body="The deepest layer moves fastest, so the seabed seems to pull you in. Parallax is just motion, but motion is convincing."
        />
      </Stack>
    </Scene>
  );
}

/* ============================= 06 ORBIT ============================= */
export function Orbit() {
  return (
    <Scene id="orbit" minHeight={260}>
      <Stack>
        <Layer speed={0} scale={0.18} className="bg-[linear-gradient(180deg,#02030a_0%,#0a0620_40%,#170a2e_70%,#2a0f3a_100%)]" />

        <Layer speed={0} className="bg-[radial-gradient(ellipse_at_70%_30%,rgba(139,92,246,0.28),transparent_55%),radial-gradient(ellipse_at_25%_75%,rgba(236,72,153,0.2),transparent_55%)]" />

        <Layer speed={0.03}>
          <Particles mode="star" count={110} speed={0.03} />
        </Layer>

        <Layer speed={0.06} scale={0.12} className="flex items-center justify-center">
          <div className="spin-slow mt-[10vh] w-[62vw] max-w-2xl opacity-90">
            <Planet fill="#3b2f6b" ring="#a78bfa" />
          </div>
        </Layer>

        <Layer speed={0.1} className="hidden sm:block">
          <div className="drift absolute left-0 right-0 top-[24%] h-40 bg-[linear-gradient(90deg,transparent,rgba(94,242,255,0.35),transparent)] blur-3xl" />
          <div className="drift absolute left-0 right-0 top-[52%] h-32 bg-[linear-gradient(90deg,transparent,rgba(244,114,182,0.3),transparent)] blur-3xl" style={{ animationDelay: '-9s' }} />
        </Layer>

        <Layer speed={0.18} className="hidden md:block">
          <div className="sway absolute right-[12%] top-[30%] w-48 lg:w-64">
            <Satellite fill="#cbd5e1" />
          </div>
        </Layer>

        <Layer speed={0.24} className="hidden lg:block">
          <div className="absolute left-[10%] top-[26%] w-20">
            <Rocket fill="#e2e8f0" />
          </div>
        </Layer>

        <Copy
          align="center"
          tag="06 / Orbit"
          tagColor="#f0abfc"
          title="Same scroll. New gravity."
          body="Six scenes, forty layers, one scroll listener. Everything you just saw is vector art moved at its own speed."
        >
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="https://techfest.org" target="_blank" rel="noopener" className="btn btn-light">Visit techfest.org</a>
            <button onClick={() => scrollToY(0, 1800)} className="btn btn-ghost">Fly back to the summit</button>
          </div>
        </Copy>
      </Stack>
    </Scene>
  );
}
