import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murale Manohar | Software Engineer",
  description:
    "Software Engineer at Zoho. 3+ years building scalable APIs, automation frameworks, and developer tools with Java, Kafka, and SQL. Creator of Packlio.",
  keywords:
    "Java developer, backend engineer, Zoho, Kafka, SQL, Spring Boot, Docker India",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Murale Manohar | Software Engineer",
    description: "Software engineer at Zoho building with Java, Kafka, SQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
