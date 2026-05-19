"use client";

import { motion } from "framer-motion";
import { Check, BookOpen } from "lucide-react";
import { experience, education } from "@/data/portfolio";

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Timeline() {
  return (
    <section
      id="experience"
      style={{ background: "var(--bg)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeLeft}
          style={{ marginBottom: 12 }}
        >
          <span className="mono" style={{ color: "var(--accent)", fontSize: 13 }}>
            // 04 experience
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeLeft}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            marginBottom: 56,
            color: "var(--text)",
          }}
        >
          Work &amp; Journey
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 15,
              top: 6,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent), var(--border))",
              borderRadius: 1,
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            style={{ display: "flex", flexDirection: "column", gap: 48 }}
          >
            {experience.map((entry, i) => (
              <motion.div
                key={entry.company}
                variants={fadeLeft}
                style={{ display: "flex", gap: 28 }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, marginTop: 4 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: i === 0 ? "var(--accent)" : "var(--surface)",
                      border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border-2)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i === 0 && (
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#0a0a0a",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: 8 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <h3
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 600,
                        fontSize: 18,
                        color: "var(--text)",
                      }}
                    >
                      {entry.company}
                    </h3>
                    <span
                      style={{
                        fontSize: 12,
                        padding: "2px 10px",
                        borderRadius: 999,
                        background:
                          entry.type === "Full-Time"
                            ? "var(--accent-dim)"
                            : "var(--indigo-dim)",
                        color:
                          entry.type === "Full-Time" ? "var(--accent)" : "var(--indigo)",
                        fontWeight: 500,
                      }}
                    >
                      {entry.type}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 500,
                        fontSize: 15,
                        color: "var(--accent)",
                      }}
                    >
                      {entry.role}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: 12, color: "var(--text-muted)" }}
                    >
                      {entry.period}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: 12, color: "var(--text-faint)" }}
                    >
                      {entry.location}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {entry.highlights.map((h, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <Check
                          size={14}
                          style={{ color: "var(--accent)", flexShrink: 0, marginTop: 3 }}
                        />
                        <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div variants={fadeLeft} style={{ display: "flex", gap: 28 }}>
              <div style={{ flexShrink: 0, marginTop: 4 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: "2px solid var(--border-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BookOpen size={14} color="var(--text-muted)" />
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 6 }}>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {education.institution}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                      {education.degree}
                    </span>
                    <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {education.period}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 13,
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        color: "var(--text-muted)",
                      }}
                    >
                      CGPA: {education.cgpa}
                    </span>
                    <a
                      href={education.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 12,
                        background: "var(--accent-dim)",
                        border: "1px solid rgba(0,212,170,0.2)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        color: "var(--accent)",
                        textDecoration: "none",
                      }}
                    >
                      📄 Springer Publication · CVR 2023 ↗
                    </a>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.6, marginTop: 8 }}>
                  {education.publication}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
