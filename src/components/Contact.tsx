"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  padding: "10px 14px",
  color: "var(--text)",
  fontSize: 14,
  fontFamily: "Inter, sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setStatus("idle");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = "var(--accent)";
  };
  const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = "var(--border)";
  };

  return (
    <section
      id="contact"
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
            // 05 contact
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
          Let&apos;s Talk
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 56,
          }}
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Open to building scalable systems
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 10 }}>
                Software engineer focused on scalable backend systems, distributed applications,
                and event-driven architectures using Java, Kafka, and SQL.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
                Interested in engineering roles centered around performance, reliability, and
                system design.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 14,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
              >
                <Mail size={16} color="var(--accent)" />
                {personalInfo.email}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: 14 }}>
                <MapPin size={16} color="var(--accent)" />
                {personalInfo.location}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                { href: personalInfo.github, icon: <GithubIcon size={18} />, label: "GitHub" },
                { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid var(--border-2)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--accent)";
                    el.style.borderColor = "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-muted)";
                    el.style.borderColor = "var(--border-2)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <input
                name="from_name"
                type="text"
                placeholder="Name"
                required
                style={inputStyle}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />
              <input
                name="from_email"
                type="email"
                placeholder="Email"
                required
                style={inputStyle}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                style={inputStyle}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "12px 24px",
                  background: loading ? "rgba(99,102,241,0.5)" : "var(--accent)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p style={{ fontSize: 12, color: "var(--text-faint)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <Clock size={12} />
                Avg. response time: within 24 hours
              </p>

              {status === "success" && (
                <p style={{ fontSize: 13, color: "#22c55e", textAlign: "center" }}>
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: 13, color: "#ef4444", textAlign: "center" }}>
                  Something went wrong. Please email directly at{" "}
                  <a href={`mailto:${personalInfo.email}`} style={{ color: "#ef4444" }}>
                    {personalInfo.email}
                  </a>
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
