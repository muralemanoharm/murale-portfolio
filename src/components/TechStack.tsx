"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bot, Terminal, Zap, Sparkles } from "lucide-react";
import { techStack } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const aiIcons: Record<string, ReactNode> = {
  bot: <Bot size={15} />,
  terminal: <Terminal size={15} />,
  zap: <Zap size={15} />,
};

const allFrameworks = [
  ...techStack.frameworks,
  ...techStack.databases,
  ...techStack.tools,
];

export default function TechStack() {
  return (
    <section
      id="stack"
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
          <span className="mono" style={{ color: "var(--accent)", fontSize: 13 }}>
            // 03 stack
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
            marginBottom: 48,
            color: "var(--text)",
          }}
        >
          Tools &amp; Technologies
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {/* Languages */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "var(--text-muted)",
                marginBottom: 18,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Languages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {techStack.languages.map((lang) => (
                <div key={lang} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 500,
                      fontSize: 15,
                      color: "var(--text)",
                    }}
                  >
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "var(--text-muted)",
                marginBottom: 18,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Frameworks &amp; Tools
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {allFrameworks.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--border-2)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 500,
                      fontSize: 15,
                      color: "var(--text)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Tools */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "var(--accent-dim)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "var(--accent)",
                marginBottom: 18,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Sparkles size={14} /> AI Tools
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {techStack.aiTools.map((tool) => (
                <div key={tool.name}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <span style={{ color: "var(--accent)" }}>{aiIcons[tool.icon]}</span>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "var(--text)",
                      }}
                    >
                      {tool.name}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", paddingLeft: 23 }}>
                    {tool.use}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>
              Currently Learning
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Kubernetes", "AWS"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  border: "1px solid var(--border-2)",
                  borderRadius: 999,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
