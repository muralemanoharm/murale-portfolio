"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "3+", label: "Years at Zoho" },
  { value: "100+", label: "APIs Built" },
  { value: "50K+", label: "Assets Managed" },
];

const CURL_CMD = "curl -s https://murale-portfolio.vercel.app/api/developer";

type Seg = { t: string; c: string };

const K = "#4ec9b0";      // teal — keys
const S = "rgba(255,255,255,0.55)"; // muted white — string values
const N = "#ce9178";      // orange — numbers
const B = "#4fc1ff";      // bright blue — booleans
const M = "rgba(255,255,255,0.22)"; // very muted — braces/commas

const json: Seg[][] = [
  [{ t: "{", c: M }],
  [{ t: '  "name"', c: K }, { t: ": ", c: M }, { t: '"Murale Manohar"', c: S }, { t: ",", c: M }],
  [{ t: '  "role"', c: K }, { t: ": ", c: M }, { t: '"Software Engineer"', c: S }, { t: ",", c: M }],
  [{ t: '  "company"', c: K }, { t: ": ", c: M }, { t: '"Zoho Corporation"', c: S }, { t: ",", c: M }],
  [{ t: '  "experience_yrs"', c: K }, { t: ": ", c: M }, { t: "3", c: N }, { t: ",", c: M }],
  [{ t: '  "stack"', c: K }, { t: ": [", c: M }],
  [{ t: '    "Java"', c: S }, { t: ",", c: M }],
  [{ t: '    "Spring Boot"', c: S }, { t: ",", c: M }],
  [{ t: '    "Kafka"', c: S }, { t: ",", c: M }],
  [{ t: '    "MySQL"', c: S }],
  [{ t: "  ],", c: M }],
  [{ t: '  "side_project"', c: K }, { t: ": {", c: M }],
  [{ t: '    "name"', c: K }, { t: ": ", c: M }, { t: '"Packlio"', c: S }, { t: ",", c: M }],
  [{ t: '    "desc"', c: K }, { t: ": ", c: M }, { t: '"AI-powered listing generator"', c: S }],
  [{ t: "  },", c: M }],
  [{ t: '  "location"', c: K }, { t: ": ", c: M }, { t: '"India"', c: S }, { t: ",", c: M }],
  [{ t: '  "open_to_work"', c: K }, { t: ": ", c: M }, { t: "true", c: B, bold: true } as Seg & { bold?: boolean }],
  [{ t: "}", c: M }],
];

function TerminalCard() {
  const [phase, setPhase] = useState<"cmd" | "header" | "json" | "done">("cmd");
  const [cmdChars, setCmdChars] = useState(0);
  const [jsonLines, setJsonLines] = useState(0);

  useEffect(() => {
    if (phase === "cmd") {
      if (cmdChars < CURL_CMD.length) {
        const t = setTimeout(() => setCmdChars((c) => c + 1), 42);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("header"), 350);
        return () => clearTimeout(t);
      }
    }

    if (phase === "header") {
      const t = setTimeout(() => setPhase("json"), 280);
      return () => clearTimeout(t);
    }

    if (phase === "json") {
      if (jsonLines < json.length) {
        const t = setTimeout(() => setJsonLines((l) => l + 1), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("done"), 400);
        return () => clearTimeout(t);
      }
    }
  }, [phase, cmdChars, jsonLines]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        background: "#0d0d0d",
        border: "1px solid rgba(0,212,170,0.35)",
        borderRadius: 12,
        boxShadow: "0 0 40px rgba(0,212,170,0.07)",
        overflow: "hidden",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: 8 }}>
          murale@portfolio — bash
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 22px", lineHeight: 1.75, flexGrow: 1, display: "flex", flexDirection: "column" }}>

        {/* Curl command */}
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          <span style={{ color: K, fontSize: 13, flexShrink: 0 }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.85)", wordBreak: "break-all", minWidth: 0 }}>
            {CURL_CMD.slice(0, cmdChars)}
            {phase === "cmd" && (
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 13,
                  background: K,
                  marginLeft: 1,
                  verticalAlign: "text-bottom",
                  animation: "term-blink 1s step-end infinite",
                }}
              />
            )}
          </span>
        </div>

        {/* HTTP header */}
        {(phase === "header" || phase === "json" || phase === "done") && (
          <div style={{ color: "rgba(255,255,255,0.28)", marginBottom: 10, fontSize: 11 }}>
            {"# HTTP/2 200 "}
            <span style={{ color: "#4ec9b0", fontWeight: 700 }}>OK</span>
            {"  · content-type: application/json · 11ms"}
          </div>
        )}

        {/* JSON lines */}
        {(phase === "json" || phase === "done") && (
          <div>
            {json.slice(0, jsonLines).map((line, i) => (
              <div key={i} style={{ whiteSpace: "pre" }}>
                {line.map((seg, j) => (
                  <span
                    key={j}
                    style={{
                      color: seg.c,
                      fontWeight: (seg as Seg & { bold?: boolean }).bold ? 700 : 400,
                    }}
                  >
                    {seg.t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Final blinking cursor */}
        {phase === "done" && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto", paddingTop: 16 }}>
            <span style={{ color: K, fontSize: 13 }}>›</span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 14,
                background: K,
                verticalAlign: "text-bottom",
                animation: "term-blink 1s step-end infinite",
              }}
            />
          </div>
        )}
      </div>

      <style>{`@keyframes term-blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "var(--surface)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{ marginBottom: 12 }}
        >
          <span
            className="mono"
            style={{ color: "var(--accent)", fontSize: 13, letterSpacing: "0.05em" }}
          >
            // 01 about
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            marginBottom: 56,
            color: "var(--text)",
          }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            gap: 48,
          }}
        >
          {/* Terminal card */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "min(300px, 100%)" }}>
            <TerminalCard />
          </motion.div>

          {/* Content */}
          <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: 20, flex: "1", minWidth: "min(300px, 100%)", justifyContent: "center" }}>
            <motion.p variants={fadeUp} style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: 16 }}>
              I&apos;m a Software Engineer with 3+ years at Zoho Corporation, where I build
              and maintain production APIs, automation frameworks, and internal developer tools.
              My work spans from designing MySQL schemas to building Eclipse plugins that cut build
              times for teams.
            </motion.p>

            <motion.p variants={fadeUp} style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: 16 }}>
              Outside work, I&apos;m building{" "}
              <a
                href="https://packlio.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Packlio,
              </a>{" "}
              an AI-powered SaaS that converts product images into marketplace listings via a
              multi-agent pipeline using Claude API and Ideogram v3.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "16px 12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: 26,
                      color: "var(--accent)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <BookOpen size={16} color="var(--accent)" />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--text)",
                  }}
                >
                  {education.degree}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                {education.institution} &middot; CGPA: {education.cgpa}
              </div>
              <a
                href={education.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(0,212,170,0.2)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 12,
                  color: "var(--accent)",
                  marginTop: 4,
                  width: "fit-content",
                  textDecoration: "none",
                }}
              >
                📄 Springer Publication · CVR 2023 ↗
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
