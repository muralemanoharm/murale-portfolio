"use client";

import { motion } from "framer-motion";
import { TrendingUp, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function StatusPill({ status, color }: { status: string; color: string }) {
  const bg = color === "green" ? "rgba(34,197,94,0.12)" : "rgba(251,146,60,0.12)";
  const text = color === "green" ? "#22c55e" : "#fb923c";
  return (
    <span
      style={{
        background: bg,
        color: text,
        borderRadius: 999,
        padding: "3px 10px",
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--bg)", padding: "96px 24px" }}
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
            // 02 projects
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
          What I&apos;ve Built
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(460px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "var(--surface)",
                border: project.highlight
                  ? "1px solid rgba(99,102,241,0.4)"
                  : "1px solid var(--border)",
                boxShadow: project.highlight
                  ? "0 0 24px rgba(99,102,241,0.1)"
                  : "none",
                borderRadius: 12,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "default",
              }}
            >
              {/* Featured badge for Packlio */}
              {project.highlight && (
                <div>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "var(--indigo)",
                      background: "var(--indigo-dim)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      borderRadius: 4,
                      padding: "3px 8px",
                    }}
                  >
                    PERSONAL · FEATURED
                  </span>
                </div>
              )}

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </h3>
                <StatusPill status={project.status} color={project.statusColor} />
              </div>

              {/* Type badge */}
              <div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    borderRadius: 999,
                    padding: "3px 10px",
                    background:
                      project.typeColor === "teal" ? "var(--accent-dim)" : "var(--indigo-dim)",
                    color:
                      project.typeColor === "teal" ? "var(--accent)" : "var(--indigo)",
                    border: `1px solid ${
                      project.typeColor === "teal"
                        ? "rgba(0,212,170,0.2)"
                        : "rgba(99,102,241,0.2)"
                    }`,
                  }}
                >
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              {/* Impact */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <TrendingUp size={14} color="var(--accent)" />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "var(--accent)",
                  }}
                >
                  {project.impact}
                </span>
              </div>

              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="mono"
                    style={{
                      fontSize: 11,
                      padding: "3px 8px",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Packlio link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--indigo)",
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.75")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  Visit packlio.app <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
