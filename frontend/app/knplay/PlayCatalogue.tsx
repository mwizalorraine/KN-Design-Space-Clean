"use client";

import { useEffect, useState } from "react";
import "./play.css";
import {
  PLAY_GARDENS,
  PLAY_GIFT,
  PLAY_GROUPS,
  PLAY_PIECES,
  PLAY_SAFETY,
  PLAY_SPACES,
  PLAY_SPACES_INTRO,
  playImg,
  type PlayGarden,
  type PlayPiece,
} from "./knPlay";

const TABS: [string, string][] = [["all", "All pieces"], ...PLAY_GROUPS, ["gardens", "Gardens"]];

function Piece({ p }: { p: PlayPiece }) {
  return (
    <article className="piece">
      <div className="ph">
        <img loading="lazy" src={p.img} alt={`${p.name}, concept visualisation`} />
      </div>
      <div className="nm">
        <span className="code">KP {p.code}</span>
        <h3>{p.name}</h3>
        {p.g === "forall" && <span className="badge">Play for All</span>}
      </div>
      <span className="mono">
        {p.mean} · {p.type} · Ages {p.ages}
      </span>
      <p className="desc">{p.desc}</p>
      <dl>
        <dt>Learning</dt>
        <dd>{p.learn}</dd>
        <dt>Develops</dt>
        <dd>{p.dev}</dd>
        <dt>Footprint</dt>
        <dd>{p.size}</dd>
      </dl>
    </article>
  );
}

function Garden({ g }: { g: PlayGarden }) {
  return (
    <article className="piece garden">
      <div className="ph">
        <img loading="lazy" src={g.img} alt={`${g.name}, concept visualisation`} />
      </div>
      <div className="nm">
        <span className="code">{g.code}</span>
        <h3>{g.name}</h3>
      </div>
      <p className="desc">{g.desc}</p>
      <span className="pcs">{g.pcs}</span>
    </article>
  );
}

export default function PlayCatalogue() {
  const [sel, setSel] = useState<string>("all");

  // Restore the last chosen filter, as the prototype does
  useEffect(() => {
    try {
      const saved = localStorage.getItem("knplay-tab");
      if (saved && TABS.some((t) => t[0] === saved)) setSel(saved);
    } catch (_) {}
  }, []);

  const choose = (k: string) => {
    setSel(k);
    try {
      localStorage.setItem("knplay-tab", k);
    } catch (_) {}
  };

  return (
    <div className="knplay">
      <header>
        <div className="wrap">
          <div className="top">
            <span className="mono">KN Design Space</span>
            <span className="mono">Play structures · Kigali</span>
          </div>
          <div className="hero">
            <h1 className="word">
              KN
              <br />
              Play<i>.</i>
            </h1>
            <div className="lede">
              <strong>Steel and timber play structures, designed in Kigali and rooted in Rwanda.</strong>
              <p>
                Climbing frames, towers, dens, animals and inclusive pieces for homes, schools and public spaces. Every
                piece is bolted together without concrete, so it moves with you when you move house.
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav aria-label="Collections">
        <div className="wrap">
          <div className="chips" id="chips">
            {TABS.map(([k, label]) => (
              <button key={k} type="button" aria-pressed={sel === k} onClick={() => choose(k)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="wrap" id="main">
        {PLAY_GROUPS.filter(([k]) => sel === "all" || sel === k).map(([k, label]) => {
          const ps = PLAY_PIECES.filter((p) => p.g === k);
          return (
            <section key={k} id={`s-${k}`}>
              <div className="sechead">
                <h2>{label}</h2>
                <span className="mono">{ps.length} pieces</span>
              </div>
              <div className="grid">
                {ps.map((p) => (
                  <Piece key={p.code} p={p} />
                ))}
              </div>
            </section>
          );
        })}
        {(sel === "all" || sel === "gardens") && (
          <section id="s-gardens">
            <div className="sechead">
              <h2>Garden combinations</h2>
              <span className="mono">Shown in our garden in Kigali</span>
            </div>
            <div className="gardens">
              {PLAY_GARDENS.map((g) => (
                <Garden key={g.code} g={g} />
              ))}
            </div>
          </section>
        )}
      </main>

            <section className="wrap spaces" id="spaces" aria-labelledby="spaces-h">
        <div className="intro">
          <div>
            <span className="mono">{PLAY_SPACES_INTRO.label}</span>
            <h2 id="spaces-h">{PLAY_SPACES_INTRO.title}</h2>
          </div>
          <p>{PLAY_SPACES_INTRO.text}</p>
        </div>
        <div className="spgrid">
          {PLAY_SPACES.map((s) => (
            <article className="piece" key={s.title}>
              <div className="ph">
                <img loading="lazy" src={playImg(s.img)} alt={`${s.title}, concept visualisation`} />
              </div>
              <div className="nm">
                <h3>{s.title}</h3>
              </div>
              <p className="desc">{s.text}</p>
              <dl>
                <dt>Pieces</dt>
                <dd>{s.pieces}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap gift" id="gift" aria-labelledby="gift-h">
        <div className="intro">
          <div>
            <span className="mono">{PLAY_GIFT.label}</span>
            <h2 id="gift-h">{PLAY_GIFT.title}</h2>
          </div>
          <p>{PLAY_GIFT.intro}</p>
        </div>
        <div className="gbox">
          <div className="gwhy">
            {PLAY_GIFT.why.map((w) => (
              <div key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <p className="who">{PLAY_GIFT.who}</p>
          <div className="gsteps">
            {PLAY_GIFT.steps.map((s, i) => (
              <div key={s.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="who" style={{ color: "var(--grey)" }}>{PLAY_GIFT.receive}</p>
        </div>
      </section>

      <section className="wrap safety" id="safety" aria-labelledby="safety-h">
        <div className="intro">
          <div>
            <span className="mono">{PLAY_SAFETY.label}</span>
            <h2 id="safety-h">{PLAY_SAFETY.title}</h2>
          </div>
          <p>{PLAY_SAFETY.intro}</p>
        </div>
        <div className="sgrid">
          {PLAY_SAFETY.items.map((it, i) => (
            <div className="sitem" key={it.title}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta">
        <div className="wrap">
          <div>
            <h2>Will it fit your space?</h2>
            <p>
              Send us a photo of your garden or school ground on WhatsApp, with rough measurements. We check which
              pieces fit, free of charge.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="mono">WhatsApp</span>
            <span className="num">+250 788 841 556</span>
            <a href="https://wa.me/250788841556" target="_blank" rel="noopener">
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <span className="mono">KN Play is a design line of KN Design Space · Kimihurura, Kigali</span>
          <span className="mono">Images are concept visualisations</span>
        </div>
      </footer>
    </div>
  );
}