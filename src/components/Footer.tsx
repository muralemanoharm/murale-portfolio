import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Murale Manohar &copy; 2025
        </span>

        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Built with Next.js +{" "}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            Claude Code
          </a>
        </span>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            { href: personalInfo.github, icon: <GithubIcon size={17} />, label: "GitHub" },
            { href: personalInfo.linkedin, icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
