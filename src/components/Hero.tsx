"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const typewriterStrings = [
  "Software Engineer",
  "API & Systems Engineer",
  "Kafka · SQL · Spring Boot",
  "Building Packlio",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const target = typewriterStrings[index];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 2000);
        return () => clearTimeout(t);
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setIndex((i) => (i + 1) % typewriterStrings.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, index]);

  return (
    <span style={{ color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          background: "var(--accent)",
          marginLeft: 3,
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 60px",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: 720, width: "100%", textAlign: "center" }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} style={{ marginBottom: 28 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 13,
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                animation: "pulse-green 2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <style>{`@keyframes pulse-green { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
            Open to Software Engineer roles
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 16,
          }}
        >
          Murale Manohar
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.3rem, 3vw, 2rem)",
            minHeight: "2.4rem",
            marginBottom: 24,
          }}
        >
          <Typewriter />
        </motion.div>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          style={{
            color: "var(--text-muted)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 36px",
          }}
        >
          3+ years at Zoho building production APIs, automation frameworks, and developer tools.
          Currently building{" "}
          <span style={{ color: "var(--accent)" }}>Packlio</span>, an AI-powered listing
          generator for marketplace sellers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "var(--accent)",
              color: "#0a0a0a",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Projects
          </a>

          <a
            href="/Murale_Manohar_M_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border-2)",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)")
            }
          >
            Download CV
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              border: "1px solid var(--border-2)",
              color: "var(--text-muted)",
              padding: "12px 16px",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text)";
              el.style.borderColor = "var(--border-2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text-muted)";
            }}
          >
            <GithubIcon size={20} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              border: "1px solid var(--border-2)",
              color: "var(--text-muted)",
              padding: "12px 16px",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-faint)",
        }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
