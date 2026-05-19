"use client";

import { motion } from "framer-motion";
import { Bot, Terminal, Zap, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cards = [
  {
    icon: <Bot size={22} />,
    title: "Claude — My Primary AI Partner",
    description:
      "I use Claude daily for code review, debugging, architectural decisions, and writing. Claude API powers the listing generation pipeline in Packlio where users upload a product image and Claude Vision returns SEO-optimised titles, descriptions, and tags.",
    badge: "Used in production",
    badgeColor: "accent",
  },
  {
    icon: <Terminal size={22} />,
    title: "Claude Code — Agentic Coding",
    description:
      "Claude Code Desktop understands my entire codebase at once. I use it for scaffolding new modules, large-scale refactors, and writing tests, tasks that take hours manually now take minutes.",
    badge: "Daily driver",
    badgeColor: "accent",
  },
  {
    icon: <Zap size={22} />,
    title: "GitHub Copilot",
    description:
      "Used in VS Code and Eclipse for inline autocomplete and agentic code generation. GitHub Copilot Agents handle multi-step coding tasks, writing boilerplate, generating test stubs, and scaffolding new files.",
    badge: "IDE integration",
    badgeColor: "muted",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "ChatGPT",
    description:
      "Used for content drafting, copywriting, and quick brainstorming, email copy, documentation drafts, and getting a second opinion outside my usual workflow.",
    badge: "Content generation",
    badgeColor: "muted",
  },
];

export default function AIShowcase() {
  return (
    <section
      style={{ background: "var(--surface)", padding: "0 24px 96px" }}
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
            // ai in my workflow
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
          How I Use AI Daily
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(0,212,170,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--text)",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65, flexGrow: 1 }}>
                {card.description}
              </p>

              <div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background:
                      card.badgeColor === "accent" ? "var(--accent-dim)" : "rgba(255,255,255,0.05)",
                    color:
                      card.badgeColor === "accent" ? "var(--accent)" : "var(--text-muted)",
                    border: `1px solid ${card.badgeColor === "accent"
                      ? "rgba(0,212,170,0.2)"
                      : "var(--border)"
                      }`,
                  }}
                >
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{
            borderLeft: "3px solid var(--accent)",
            background: "var(--surface-2)",
            borderRadius: "0 8px 8px 0",
            padding: "16px 20px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, fontStyle: "italic" }}>
            &ldquo;AI doesn&apos;t replace engineering judgment — it amplifies it. I still design
            the systems, review every output, and own the architecture.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
