import { useEffect, useRef } from "react";
import "./Herosection.css";

export default function Hero() {
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafRef = useRef(null);

  /* ── Magnetic cursor ── */
  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const loop = () => {
      const m = mouseRef.current;
      m.tx += (m.x - m.tx) * 0.13;
      m.ty += (m.y - m.ty) * 0.13;
      trail.style.left = m.tx + "px";
      trail.style.top = m.ty + "px";
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Magnetic buttons ── */
  useEffect(() => {
    const btns = document.querySelectorAll(".cta-btn, .cta-link");
    const handlers = [];

    btns.forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  /* ── Floating ring animation ── */
  useEffect(() => {
    let t = 0;
    let raf;
    const animate = () => {
      t += 0.008;
      if (ringRef.current) {
        ringRef.current.style.transform = `translateY(${Math.sin(t) * 18}px) rotate(${t * 2}deg)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 90;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.4,
      o: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        pts.forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(200,255,0,${(1 - d / 110) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,0,${p.o})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="hero-container">
      {/* Custom cursor */}
      <div ref={cursorRef} className="hero-cursor" />
      <div ref={trailRef} className="hero-cursor-trail" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background layers */}
      <div className="hero-grid" />
      <div className="glow-orb glow-a" />
      <div className="glow-orb glow-b" />
      <div className="hero-scanline" />

      {/* Frame lines */}
      <div className="line-h line-top" />
      <div className="line-h line-bot" />
      <div className="line-v line-left" />
      <div className="line-v line-right" />

      {/* Corner marks */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Top UI bar */}
      <div className="ui-top">
        <div className="ui-label">
          <div className="dot-blink" />
          Elewix Studio
        </div>
        <div className="ui-right">
          <div className="ui-year">© 2021</div>
          <p className="ui-sub">Minimal aesthetic.<br />Maximum impact.</p>
        </div>
      </div>

      {/* Main content */}
      <div className="main-hero-flex">
        <div className="hero-content">
          <p className="hero-sub">Creative Digital Agency</p>
          <h1 className="hero-title">
            <span className="title-line white-text">
              <span className="title-inner">Creative</span>
            </span>
            <span className="title-line green-text">
              <span className="title-inner">Digital</span>
            </span>
            <span className="title-line ghost-text">
              <span className="title-inner">Agency</span>
            </span>
          </h1>
          <div className="cta-row">
            <a href="#portfolio">
  <button className="cta-btn">View Work</button>
</a>
            <a href="#contact" className="cta-link">contact us →</a>
          </div>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">48+</div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">12</div>
              <div className="stat-lbl">Countries</div>
            </div>
            <div className="stat">
              <div className="stat-num">99%</div>
              <div className="stat-lbl">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Ring visual */}
        <div className="hero-visual">
          <div className="ring-wrap">
            <div className="ring-placeholder">
              <svg
                ref={ringRef}
                className="ring-svg"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="rg1" cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c8ff00" stopOpacity="0.05" />
                  </radialGradient>
                  <radialGradient id="rg2" cx="65%" cy="65%" r="50%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow-text">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer ring */}
                <circle cx="250" cy="250" r="220" stroke="url(#rg1)" strokeWidth="1.5" fill="none" opacity="0.7" />
                {/* Mid ring */}
                <circle cx="250" cy="250" r="180" stroke="rgba(200,255,0,0.15)" strokeWidth="1" fill="none" />
                {/* Thick torus face */}
                <circle cx="250" cy="250" r="200" stroke="rgba(200,255,0,0.08)" strokeWidth="40" fill="none" />
                {/* Highlight arc */}
                <path d="M 100 180 A 190 190 0 0 1 380 140" stroke="url(#rg2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Inner dark face */}
                <circle cx="250" cy="250" r="128" fill="rgba(4,4,4,0.95)" stroke="rgba(200,255,0,0.2)" strokeWidth="1" />
                {/* Inner dashed ring */}
                <circle cx="250" cy="250" r="100" stroke="rgba(200,255,0,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                {/* Monogram */}
                <text x="250" y="260" fontFamily="Syne,sans-serif" fontSize="32" fontWeight="800" fill="#c8ff00" textAnchor="middle" opacity="0.9" filter="url(#glow-text)">EWX</text>
                {/* Orbit dots */}
                <circle cx="250" cy="45" r="4" fill="#c8ff00" opacity="0.8" />
                <circle cx="450" cy="330" r="3" fill="#c8ff00" opacity="0.5" />
                <circle cx="80" cy="310" r="2.5" fill="#c8ff00" opacity="0.4" />
                {/* Tick marks */}
                <line x1="250" y1="28" x2="250" y2="42" stroke="rgba(200,255,0,0.4)" strokeWidth="1" />
                <line x1="250" y1="458" x2="250" y2="472" stroke="rgba(200,255,0,0.4)" strokeWidth="1" />
                <line x1="28" y1="250" x2="42" y2="250" stroke="rgba(200,255,0,0.4)" strokeWidth="1" />
                <line x1="458" y1="250" x2="472" y2="250" stroke="rgba(200,255,0,0.4)" strokeWidth="1" />
              </svg>
            </div>

            {/* HUD tags */}
            <div className="hud-tag hud-t1">Form Factor</div>
            <div className="hud-tag hud-t2">Identity</div>
            <div className="hud-tag hud-t3">Motion Design</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-wrap">
        <div className="scroll-track">
          <div className="scroll-pill" />
        </div>
        <span className="scroll-lbl">Scroll</span>
      </div>

      {/* Status bar */}
      <div className="status-bar">
        <span className="status-live">● Live</span>
        <span className="status-text">2021 — Available for projects</span>
      </div>
    </section>
  );
}
