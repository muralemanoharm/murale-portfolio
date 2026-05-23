"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content: "Hi! I'm Murale's AI assistant. Ask me about his projects, skills, or experience. 👋",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Sorry, something went wrong. Try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
          zIndex: 999,
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.08)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
      >
        {isOpen ? (
          <X size={22} color="#ffffff" />
        ) : (
          <Bot size={22} color="#ffffff" />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: 88,
              right: 24,
              width: 380,
              maxWidth: "calc(100vw - 48px)",
              height: 480,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              zIndex: 998,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "var(--accent-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={16} color="var(--accent)" />
              </div>
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--text)",
                  flex: 1,
                }}
              >
                Ask about Murale
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  padding: 4,
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "9px 13px",
                      borderRadius:
                        msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                      background:
                        msg.role === "user" ? "var(--accent)" : "var(--surface-2)",
                      color: msg.role === "user" ? "#0a0a0a" : "var(--text)",
                      fontSize: 13,
                      lineHeight: 1.6,
                      fontWeight: msg.role === "user" ? 500 : 400,
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "12px 12px 12px 2px",
                      background: "var(--surface-2)",
                      display: "flex",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    {[0, 1, 2].map((n) => (
                      <div
                        key={n}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--text-muted)",
                          animation: `bounce-dot 1.2s ease-in-out ${n * 0.2}s infinite`,
                        }}
                      />
                    ))}
                    <style>{`@keyframes bounce-dot { 0%,80%,100%{transform:scale(0.8);opacity:0.5} 40%{transform:scale(1.1);opacity:1} }`}</style>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "12px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: 8,
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask anything..."
                style={{
                  flex: 1,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "8px 12px",
                  color: "var(--text)",
                  fontSize: 13,
                  fontFamily: "Inter, sans-serif",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <button
                onClick={send}
                disabled={isLoading || !input.trim()}
                style={{
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  opacity: isLoading || !input.trim() ? 0.5 : 1,
                  flexShrink: 0,
                }}
              >
                <Send size={15} color="#0a0a0a" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
