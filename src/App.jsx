import { useState, useEffect, useRef } from "react";

/* ── DATA ─────────────────────────────────────────── */
const SKILLS = [
  { cat: "Languages", type: "cyan", items: ["C++", "Python", "JavaScript", "Java", "TypeScript", "SQL"] },
  { cat: "Frontend", type: "blue", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { cat: "Backend", type: "teal", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"] },
  { cat: "Database & Cloud", type: "blue", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"] },
  { cat: "System Design", type: "cyan", items: ["HLD", "LLD", "Microservices", "Load Balancing", "Caching", "CAP Theorem"] },
  { cat: "Tools & DSA", type: "teal", items: ["Git", "Docker", "Linux", "Dynamic Programming", "Graphs", "Trees"] },
];

const EDUCATION = [
  {
    year: "2023 — 2027 · Current",
    degree: "B.Tech — Information Technology",
    inst: "Parul University, Vadodara, Gujarat",
    active: true,
    desc:
      "Pursuing a degree with a strong focus on software engineering, DSA, database management, computer networks, and system design. Actively building full-stack projects and participating in competitive programming."
  },
  {
    year: "Ongoing",
    degree: "Competitive Programming",
    inst: "LeetCode · GeeksforGeeks · HackerRank",
    desc:
      "Solved 500+ problems on LeetCode and 400+ on GFG. Focused on DP, graph theory, binary search, greedy algorithms, and hard-level problems. Active on HackerRank with problem-solving certifications."
  },
  {
    year: "Self-Directed Learning",
    degree: "System Design (HLD)",
    inst: "Distributed Systems · Scalability · Architecture",
    desc:
      "Studied High Level System Design: microservices, load balancers, caching, CDNs, DB sharding, message queues, and CAP theorem. Applied these concepts across personal projects."
  },
];

const PROJECTS = [
  {
    idx: "01",
    icon: "🌾",
    title: "Farm Fusion",
    desc:
      "Smart agriculture platform integrating IoT sensors, real-time analytics, and ML-based crop recommendations. Bridges the technology gap in modern farming by giving farmers actionable data-driven insights.",
    tags: ["React.js", "Node.js", "MongoDB", "IoT", "Python", "ML"],
    link: "https://github.com/kirtan2515"
  },
  {
    idx: "02",
    icon: "🔍",
    title: "Deep Packet Inspection",
    desc:
      "Network security tool for real-time packet-level traffic analysis. Identifies protocol types, detects anomalies, and flags malicious packets. Built for cybersecurity research and network monitoring.",
    tags: ["C++", "Python", "Scapy", "Linux", "Networking", "Security"],
    link: "https://github.com/kirtan2515"
  },
  {
    idx: "03",
    icon: "📊",
    title: "Smart DSA Tracker",
    desc:
      "Personalized DSA progress tracker — categorize problems by topic, set daily goals, and visualize progress with charts. Syncs across LeetCode and GFG profiles.",
    tags: ["React.js", "Node.js", "MongoDB", "Chart.js", "REST API"],
    link: "https://github.com/kirtan2515"
  },
  {
    idx: "04+",
    icon: "🚀",
    title: "More Projects",
    desc:
      "7+ full-stack and system-level projects covering web apps, REST APIs, and real-time systems. Built using React, Node.js, Python, and more — all applying system design principles.",
    tags: ["Full Stack", "System Design", "APIs", "Real-time"],
    link: "https://github.com/kirtan2515"
  },
];

const CONTACT_LINKS = [
  {
    label: "kirtanpatel769@gmail.com",
    href: "mailto:kirtanpatel769@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kirtan-patel-6a05b3245",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Kirtan2515/",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/kirtan2515",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/kirtanpatel769",
  },
];

/* ── REVEAL HOOK ──────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, vis];
}

function R({ children, delay = 0 }) {
  const [ref, vis] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(28px)",
        transition: `opacity .65s ease ${delay}ms,transform .65s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

/* ── COMPONENT ────────────────────────────────────── */
export default function KirtanPortfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const pillStyle = (type) => ({
    padding: "0.3rem 0.75rem",
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: "0.72rem",
    border: "1px solid",
    ...(type === "cyan"
      ? {
          borderColor: "rgba(0,212,255,.25)",
          color: "rgba(0,212,255,.85)",
          background: "rgba(0,212,255,.06)"
        }
      : type === "blue"
      ? {
          borderColor: "rgba(30,107,255,.35)",
          color: "rgba(120,170,255,.9)",
          background: "rgba(30,107,255,.08)"
        }
      : {
          borderColor: "rgba(0,180,160,.3)",
          color: "rgba(0,200,180,.85)",
          background: "rgba(0,180,160,.07)"
        })
  });

  return (
    <div
      style={{
        background: "#060b14",
        color: "#e8f0fe",
        fontFamily: "'Outfit',sans-serif",
        fontWeight: 300,
        lineHeight: 1.7,
        overflowX: "hidden"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        html { scroll-behavior:smooth; }
        * { box-sizing:border-box; }
        body { margin:0; }

        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:#060b14; }
        ::-webkit-scrollbar-thumb { background:#00d4ff; }

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(.8); }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "1.1rem clamp(1rem,5vw,5rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled ? "rgba(6,11,20,.92)" : "transparent",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,212,255,.1)",
          transition: "background .3s",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.9rem",
            color: "#00d4ff"
          }}
        >
          Kirtan<span style={{ color: "#6b8ab0" }}>.dev</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {["about", "skills", "education", "projects", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              style={{
                background: "none",
                border: "none",
                color: "#6b8ab0",
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'JetBrains Mono',monospace"
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <a
          href="mailto:kirtanpatel769@gmail.com"
          style={{
            padding: "0.55rem 1.4rem",
            border: "1px solid #00d4ff",
            color: "#00d4ff",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.78rem",
            textDecoration: "none",
            letterSpacing: "0.08em"
          }}
        >
          Hire Me
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem clamp(1rem,5vw,5rem) 4rem",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1rem",
              border: "1px solid rgba(0,212,255,.2)",
              background: "rgba(0,212,255,.05)",
              marginBottom: "2rem"
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                background: "#00d4ff",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
                display: "block"
              }}
            />

            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.72rem",
                color: "#00d4ff",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}
            >
              Available for Internships & Opportunities
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(3.2rem,7vw,6.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem"
            }}
          >
            <span>Kirtan</span>
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(0,212,255,.8)"
              }}
            >
              Patel
            </span>
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "1rem",
              color: "#00d4ff",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem"
            }}
          >
            <span style={{ color: "#6b8ab0" }}>&gt; </span>
            Full Stack Developer & DSA Enthusiast
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b8ab0",
              maxWidth: 520,
              lineHeight: 1.85,
              marginBottom: "2.5rem"
            }}
          >
            Final-year <strong style={{ color: "#e8f0fe" }}>B.Tech IT student</strong> at
            Parul University. I build full-stack systems, architect scalable
            solutions, and solve complex algorithmic problems.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "4rem"
            }}
          >
            <button
              onClick={() => go("projects")}
              style={{
                padding: "0.85rem 2.2rem",
                background: "linear-gradient(135deg,#1e6bff,#00aacc)",
                color: "#fff",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                border: "none",
                cursor: "pointer"
              }}
            >
              View My Work
            </button>

            <button
              onClick={() => go("contact")}
              style={{
                padding: "0.85rem 2.2rem",
                background: "transparent",
                color: "#e8f0fe",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                border: "1px solid rgba(0,212,255,.2)",
                cursor: "pointer"
              }}
            >
              Get In Touch
            </button>

            <a
              href="/resume.pdf"
              download
              style={{
                padding: "0.85rem 2.2rem",
                background: "transparent",
                color: "#00d4ff",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                border: "1px solid #00d4ff",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Download Resume
            </a>
          </div>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid rgba(0,212,255,.1)"
            }}
          >
            {[
              ["500+", "LeetCode"],
              ["400+", "GFG"],
              ["10+", "Projects"],
              ["HLD", "System Design"]
            ].map(([n, l]) => (
              <div
                key={l}
                style={{
                  padding: "1.2rem 2rem",
                  borderRight: "1px solid rgba(0,212,255,.1)",
                  textAlign: "center",
                  flex: 1,
                  minWidth: 150
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#00d4ff",
                    lineHeight: 1
                  }}
                >
                  {n}
                </div>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.65rem",
                    color: "#6b8ab0",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginTop: "0.4rem"
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "7rem clamp(1rem,5vw,5rem)",
          background: "#0d1829",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — headline + bio */}
          <div>
            <R>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.68rem",
                  color: "#00d4ff",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: "1rem",
                }}
              >
                // about.me
              </div>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(2rem,4vw,3rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Building systems
                <br />
                <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(0,212,255,.7)" }}>
                  that scale.
                </span>
              </h2>
            </R>
            <R delay={100}>
              <p style={{ color: "#6b8ab0", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
                I'm a <strong style={{ color: "#e8f0fe" }}>3rd-year B.Tech IT student</strong> at Parul
                University, Vadodara. My focus is building full-stack products that don't just work — they
                perform under load and are designed to grow.
              </p>
              <p style={{ color: "#6b8ab0", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
                I spend time equally across the stack — React interfaces, Node.js APIs, database design, and
                low-level systems programming in C++. Outside of coursework I'm deep into competitive
                programming and system design architecture.
              </p>
              <p style={{ color: "#6b8ab0", lineHeight: 1.9, fontSize: "0.95rem" }}>
                When I'm not coding, I'm studying how large-scale systems like Google Spanner, Kafka, or
                Redis are architected — and applying those ideas to my own projects.
              </p>
            </R>
          </div>

          {/* RIGHT — cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* What I bring */}
            <R delay={150}>
              <div
                style={{
                  background: "rgba(14,30,55,.7)",
                  border: "1px solid rgba(0,212,255,.1)",
                  padding: "1.6rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.65rem",
                    color: "#00d4ff",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    marginBottom: "1.1rem",
                  }}
                >
                  What I bring
                </div>
                {[
                  ["⚡", "Full-Stack Engineering", "React + Node.js + MongoDB end-to-end"],
                  ["🧠", "DSA & Problem Solving", "500+ LeetCode · 400+ GFG · DP & Graphs"],
                  ["🏗️", "System Design", "HLD, microservices, caching, CAP theorem"],
                  ["🔒", "Low-Level Systems", "C++ networking, packet inspection, Linux"],
                ].map(([icon, title, sub]) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      marginBottom: "0.9rem",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>{icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontWeight: 500,
                          fontSize: "0.88rem",
                          color: "#e8f0fe",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.67rem",
                          color: "#6b8ab0",
                        }}
                      >
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </R>

            {/* Code-style "currently" block */}
            <R delay={200}>
              <div
                style={{
                  background: "#0a1628",
                  border: "1px solid rgba(0,212,255,.1)",
                  padding: "1.4rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.75rem",
                  lineHeight: 1.9,
                }}
              >
                <div style={{ color: "#6b8ab0", marginBottom: "0.6rem" }}>// currently.js</div>
                <div>
                  <span style={{ color: "#00d4ff" }}>const</span>
                  <span style={{ color: "#e8f0fe" }}> kirtan </span>
                  <span style={{ color: "#6b8ab0" }}>=</span>
                  <span style={{ color: "#e8f0fe" }}> {"{"}</span>
                </div>
                {[
                  ["  studying", '"B.Tech IT — Parul University"'],
                  ["  building", '"Farm Fusion, DSA Tracker, DPI Tool"'],
                  ["  grinding", '"LeetCode Hard · System Design"'],
                  ["  open_to",  '"Internships & Full-time Roles"'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <span style={{ color: "#1e7bff" }}>{k}</span>
                    <span style={{ color: "#6b8ab0" }}>: </span>
                    <span style={{ color: "#f0a050" }}>{v}</span>
                    <span style={{ color: "#6b8ab0" }}>,</span>
                  </div>
                ))}
                <div style={{ color: "#e8f0fe" }}>{"}"}</div>
              </div>
            </R>

            {/* Location / availability pills */}
            <R delay={250}>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  ["📍", "Vadodara, Gujarat"],
                  ["🎓", "B.Tech IT · 2027"],
                  ["✅", "Open to Opportunities"],
                ].map(([icon, text]) => (
                  <span
                    key={text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.45rem 1rem",
                      border: "1px solid rgba(0,212,255,.15)",
                      background: "rgba(0,212,255,.04)",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.7rem",
                      color: "#6b8ab0",
                    }}
                  >
                    {icon} {text}
                  </span>
                ))}
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          padding: "7rem clamp(1rem,5vw,5rem)",
          background: "#060b14"
        }}
      >
        <h2 style={{ fontFamily: "'Syne',sans-serif", marginBottom: "2rem" }}>
          Technical Stack
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "1.2rem"
          }}
        >
          {SKILLS.map((s) => (
            <div
              key={s.cat}
              style={{
                background: "rgba(14,30,55,.7)",
                border: "1px solid rgba(0,212,255,.1)",
                padding: "1.6rem"
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.68rem",
                  color: "#00d4ff",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: "1rem"
                }}
              >
                {s.cat}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {s.items.map((item) => (
                  <span key={item} style={pillStyle(s.type)}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        style={{
          padding: "7rem clamp(1rem,5vw,5rem)",
          background: "#0d1829",
        }}
      >
        <h2 style={{ fontFamily: "'Syne',sans-serif", marginBottom: "3rem" }}>
          Education & Learning
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {EDUCATION.map((e, i) => (
            <R key={e.degree} delay={i * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(160px,22%,240px) 1fr",
                  gap: "2rem",
                  background: "rgba(14,30,55,.7)",
                  border: `1px solid ${e.active ? "rgba(0,212,255,.35)" : "rgba(0,212,255,.1)"}`,
                  padding: "2rem",
                  alignItems: "start",
                }}
              >
                {/* LEFT — year */}
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.68rem",
                      color: e.active ? "#00d4ff" : "#6b8ab0",
                      letterSpacing: "0.1em",
                      lineHeight: 1.6,
                    }}
                  >
                    {e.year}
                  </div>
                  {e.active && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        marginTop: "0.75rem",
                        padding: "0.25rem 0.7rem",
                        border: "1px solid rgba(0,212,255,.3)",
                        background: "rgba(0,212,255,.06)",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          background: "#00d4ff",
                          borderRadius: "50%",
                          animation: "pulse 2s infinite",
                          display: "block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.62rem",
                          color: "#00d4ff",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* RIGHT — content */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#e8f0fe",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {e.degree}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.72rem",
                      color: "#00d4ff",
                      marginBottom: "0.9rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {e.inst}
                  </div>
                  <p
                    style={{
                      color: "#6b8ab0",
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "7rem clamp(1rem,5vw,5rem)",
          background: "#060b14"
        }}
      >
        <h2 style={{ fontFamily: "'Syne',sans-serif", marginBottom: "2rem" }}>
          Featured Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "1.4rem"
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              style={{
                background: "rgba(14,30,55,.7)",
                border: "1px solid rgba(0,212,255,.1)",
                padding: "2rem"
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  marginBottom: "0.7rem"
                }}
              >
                {p.title}
              </div>

              <div
                style={{
                  color: "#6b8ab0",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  marginBottom: "1.4rem"
                }}
              >
                {p.desc}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.4rem"
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.22rem 0.65rem",
                      border: "1px solid rgba(0,212,255,.1)",
                      color: "#6b8ab0",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.67rem"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.72rem",
                  color: "#00d4ff",
                  textDecoration: "none"
                }}
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "7rem clamp(1rem,5vw,5rem)",
          background: "#0d1829",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.5rem,5vw,4.5rem)",
            fontWeight: 800
          }}
        >
          Let's Build Something Great
        </h2>

        <p
          style={{
            color: "#6b8ab0",
            fontSize: "1rem",
            maxWidth: 480,
            margin: "0 auto 3rem",
            lineHeight: 1.85
          }}
        >
          Open to internships, full-time roles, and collaborations.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          {CONTACT_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.85rem 1.8rem",
                border: "1px solid rgba(0,212,255,.1)",
                background: "rgba(14,30,55,.7)",
                color: "#e8f0fe",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.78rem"
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "1.8rem clamp(1rem,5vw,5rem)",
          background: "#060b14",
          borderTop: "1px solid rgba(0,212,255,.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.72rem",
            color: "#6b8ab0"
          }}
        >
          Designed & Built by <span style={{ color: "#00d4ff" }}>Kirtan Patel</span>
        </p>

        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.72rem",
            color: "#6b8ab0"
          }}
        >
          © 2025 · B.Tech IT · Parul University
        </p>
      </footer>
    </div>
  );
}