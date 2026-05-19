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
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        <div />

        <span style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>
          Murale Manohar &copy; 2026
        </span>

        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
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
