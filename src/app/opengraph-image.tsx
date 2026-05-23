import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        {/* Indigo glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* M hexagon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            background: "#6366F1",
            borderRadius: 14,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: "#ffffff",
            }}
          >
            M
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 64,
            color: "#e8e8e8",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Murale Manohar
        </div>

        {/* Role */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: 28,
            color: "#818cf8",
            marginBottom: 32,
          }}
        >
          Software Engineer · Zoho Corporation
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Java", "Spring Boot", "Kafka", "MySQL", "Docker"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 8,
                padding: "6px 18px",
                fontSize: 20,
                color: "#a5b4fc",
                fontFamily: "sans-serif",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 96,
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          murale-portfolio.vercel.app
        </div>
      </div>
    ),
    size
  );
}
