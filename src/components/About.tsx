"use client";

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
  { value: "70+", label: "APIs Built" },
  { value: "10K+", label: "Assets Managed" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "var(--surface)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section label */}
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Avatar */}
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: 20,
                background: "var(--surface-2)",
                border: "2px solid var(--accent)",
                boxShadow: "0 0 0 6px rgba(0,212,170,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: 52,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                }}
              >
                MM
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <motion.p variants={fadeUp} style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: 16 }}>
              I&apos;m a backend Java developer with 3+ years at Zoho Corporation, where I build
              and maintain production APIs, automation frameworks, and internal developer tools.
              My work spans from designing MySQL schemas to building Eclipse plugins that cut build
              times for teams.
            </motion.p>

            <motion.p variants={fadeUp} style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: 16 }}>
              I&apos;m actively preparing for backend engineering roles at top-tier companies —
              FAANG, Indian unicorns like Swiggy, Razorpay, and CRED, and MNCs like Atlassian and
              Walmart. Outside work, I&apos;m building{" "}
              <a
                href="https://packlio.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Packlio
              </a>{" "}
              — an AI-powered SaaS that helps marketplace sellers generate optimised product
              listings using Claude Vision.
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
              <div
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
                }}
              >
                📄 Springer Publication · CVR 2023
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
