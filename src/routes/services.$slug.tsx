import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  CalendarCheck2,
  CheckCheck,
  MessageSquareText,
  PhoneIncoming,
  Radar,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  Workflow,
  Zap,
  MapPinned,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceThemes = {
  "ghl-crm-architecture": {
    accent: "#45d8f0",
    accent2: "#f97316",
    accent3: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(69,216,240,0.18), rgba(249,115,22,0.14), rgba(14,17,29,0.4))",
  },
  "shopify-ecommerce-web-development": {
    accent: "#34d399",
    accent2: "#7c3aed",
    accent3: "#22d3ee",
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(124,58,237,0.16), rgba(14,17,29,0.45))",
  },
  "funnel-systems-paid-acquisition": {
    accent: "#f97316",
    accent2: "#22d3ee",
    accent3: "#facc15",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.16), rgba(34,211,238,0.14), rgba(14,17,29,0.42))",
  },
  "rare-high-ticket-moats": {
    accent: "#2dd4bf",
    accent2: "#60a5fa",
    accent3: "#c084fc",
    gradient: "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(96,165,250,0.14), rgba(14,17,29,0.45))",
  },
  "local-seo-gbp-authority": {
    accent: "#38bdf8",
    accent2: "#34d399",
    accent3: "#a78bfa",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.14), rgba(52,211,153,0.12), rgba(14,17,29,0.45))",
  },
} as const;

const serviceData = {
  "ghl-crm-architecture": {
    title: "GoHighLevel CRM Architecture & Done-For-You Implementation",
    summary:
      "Complete system design, compliance setup, lead routing, and database reactivation that turn incoming demand into structured, automated pipeline conversion.",
    sections: [
      {
        heading: "Setup & Compliance",
        body: "Complete sub-account configuration, custom domains, SPF/DKIM/DMARC email deliverability authentication, and A2P 10DLC SMS compliance.",
      },
      {
        heading: "Pipeline Architecture",
        body: "Custom opportunity stages, automated lead assignment, tagging, and bi-directional team alerts across Slack and WhatsApp.",
      },
      {
        heading: "Speed-to-Lead Engines",
        body: "Missed-call text-back, instant two-way SMS and voice-agent qualification, and automated calendar scheduling.",
      },
      {
        heading: "Database Reactivation",
        body: "Turnkey reactivation sprints to revive dormant leads and recover missed revenue without increasing ad spend.",
      },
    ],
  },
  "shopify-ecommerce-web-development": {
    title: "High-Performance Shopify E-Commerce & Web Development",
    summary:
      "Conversion-first storefronts and web experiences built for performance, SEO, and measurable revenue growth.",
    sections: [
      {
        heading: "OS 2.0 Engineering",
        body: "Custom Shopify OS 2.0 theme builds with sub-1.5s mobile load times, modern UX, and WCAG accessibility standards.",
      },
      {
        heading: "E-Commerce Replatforming",
        body: "Seamless migrations from WooCommerce, Magento, or BigCommerce with 100% 301-redirect mapping and zero SEO loss.",
      },
      {
        heading: "CRO & Retention",
        body: "Integrated checkout funnels, dynamic one-click upsells, bundled offers, and automated cart abandonment sequences.",
      },
    ],
  },
  "funnel-systems-paid-acquisition": {
    title: "High-Converting Funnel Systems & Paid Acquisition",
    summary:
      "Direct-response funnels and paid media systems built to turn traffic into booked calls, sales, and attributable return.",
    sections: [
      {
        heading: "Funnel Engineering",
        body: "Direct-response VSL funnels, qualifying health quizzes, and appointment-booking flows built on GHL and WordPress.",
      },
      {
        heading: "Meta & Google Ads",
        body: "Multi-angle dynamic creative testing, UGC integration, and high-margin service segmentation for scalable acquisition.",
      },
      {
        heading: "Closed-Loop Attribution",
        body: "Full server-side Conversion API passing offline booked appointments and closed revenue back to ad networks.",
      },
    ],
  },
  "rare-high-ticket-moats": {
    title: "Rare & High-Ticket Differentiating Moats",
    summary:
      "Trust-building systems and AI-powered operational layers that create leverage, customer confidence, and more closed revenue.",
    sections: [
      {
        heading: "Trustpilot & Trust Score System",
        body: "Automated review generation that routes happy customers to Trustpilot or Google and negative feedback into private support tickets.",
      },
      {
        heading: "24/7 Managed Live Chat Ops",
        body: "Deflecting 80%+ of repetitive inquiries while qualifying and booking live leads around the clock.",
      },
      {
        heading: "Instagram DM Automation & Branding",
        body: "Automated DM conversation triggers that qualify budget and hand off calendar links in Instagram.",
      },
      {
        heading: "WhatsApp Business API",
        body: "Direct automated reminders, broadcast offers, and interactive booking calendars with a 98% open rate.",
      },
    ],
  },
  "local-seo-gbp-authority": {
    title: "Local SEO, Google Business Profile & Authority",
    summary:
      "Local visibility systems designed to dominate map-pack rankings and build ongoing authority in service markets.",
    sections: [
      {
        heading: "GBP Dominance",
        body: "Geo-grid Map Pack ranking, citation cleanup across 70+ directories, and weekly optimized posting.",
      },
      {
        heading: "Local Authority Engine",
        body: "Programmatic landing pages targeting suburban clusters and emergency service keywords to capture local demand.",
      },
    ],
  },
} as const;

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
});

function GhlWorkflowDiagram() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % 4);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const activeSignal = step >= 1;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(16,185,129,0.08)] sm:p-6">
        <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-emerald-400/80">
          <span className="inline-flex items-center gap-2"><Workflow className="h-3.5 w-3.5" /> Workflow</span>
          <span>Live routing</span>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-slate-800 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.14),rgba(2,6,23,0.95)_56%)] p-4 sm:p-6">
          <svg viewBox="0 0 760 420" className="h-[300px] w-full sm:h-[380px]" aria-label="GHL Hub flow diagram">
            <defs>
              <linearGradient id="ghl-path" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>

            <path d="M 110 220 L 160 220 L 315 220" stroke="url(#ghl-path)" strokeWidth="3" strokeDasharray="10 12" fill="none" opacity="0.9" />
            <path d="M 515 220 L 610 220 L 690 170" stroke="url(#ghl-path)" strokeWidth="3" strokeDasharray="10 12" fill="none" opacity={activeSignal ? 1 : 0.5} />
            <path d="M 515 220 L 610 220 L 690 220" stroke="url(#ghl-path)" strokeWidth="3" strokeDasharray="10 12" fill="none" opacity={activeSignal ? 1 : 0.5} />
            <path d="M 515 220 L 610 220 L 690 270" stroke="url(#ghl-path)" strokeWidth="3" strokeDasharray="10 12" fill="none" opacity={activeSignal ? 1 : 0.5} />

            <foreignObject x="22" y="160" width="140" height="120">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-indigo-500/40 bg-slate-900/90 px-3 py-3 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300"><PhoneIncoming className="h-4 w-4" /></div>
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">Inbound Lead</span>
              </div>
            </foreignObject>

            <foreignObject x="510" y="120" width="170" height="120">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/40 bg-slate-900/90 px-3 py-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300"><MessageSquareText className="h-4 w-4" /></div>
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">A2P SMS</span>
              </div>
            </foreignObject>

            <foreignObject x="510" y="190" width="170" height="120">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-indigo-500/40 bg-slate-900/90 px-3 py-3 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300"><BellRing className="h-4 w-4" /></div>
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">Slack Alert</span>
              </div>
            </foreignObject>

            <foreignObject x="510" y="260" width="170" height="120">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/40 bg-slate-900/90 px-3 py-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300"><CalendarCheck2 className="h-4 w-4" /></div>
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">Calendar Booked</span>
              </div>
            </foreignObject>

            <g>
              <motion.circle
                cx={330}
                cy={220}
                r={60}
                fill="rgba(16,185,129,0.09)"
                stroke="rgba(16,185,129,0.7)"
                strokeWidth="2"
                animate={activeSignal ? { scale: [1, 1.18, 1], opacity: [0.3, 1, 0.3] } : { scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.8, repeat: activeSignal ? Infinity : 0 }}
                style={{ transformOrigin: "330px 220px" }}
              />

              <foreignObject x="264" y="158" width="130" height="130">
                <motion.div
                  animate={activeSignal ? { boxShadow: ["0 0 0 rgba(16,185,129,0.14)", "0 0 28px rgba(16,185,129,0.5)", "0 0 0 rgba(16,185,129,0.14)"] } : { boxShadow: "0 0 18px rgba(16,185,129,0.18)" }}
                  transition={{ duration: 1, repeat: activeSignal ? Infinity : 0 }}
                  className="flex h-[100px] w-[100px] items-center justify-center rounded-2xl border border-emerald-400/60 bg-emerald-500/10"
                >
                  <Workflow className="h-10 w-10 text-emerald-300" />
                </motion.div>
              </foreignObject>
            </g>

            <motion.circle
              cx={step === 0 ? 110 : 330}
              cy={220}
              r={7}
              fill="#10B981"
              animate={{
                cx: step === 0 ? [110, 220, 330] : 330,
                cy: 220,
                opacity: step === 0 ? [0.5, 1, 0.8] : 0.95,
              }}
              transition={{ duration: 1.1, ease: "easeInOut", repeat: step === 0 ? Infinity : 0 }}
            />

            {activeSignal && (
              <>
                <motion.circle cx={515} cy={220} r={5} fill="#10B981" animate={{ cx: [515, 610, 690], cy: [220, 200, 170], opacity: [0.4, 1, 0] }} transition={{ duration: 1.1, ease: "easeOut" }} />
                <motion.circle cx={515} cy={220} r={5} fill="#10B981" animate={{ cx: [515, 610, 685], cy: [220, 220, 220], opacity: [0.4, 1, 0] }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }} />
                <motion.circle cx={515} cy={220} r={5} fill="#10B981" animate={{ cx: [515, 610, 690], cy: [220, 245, 270], opacity: [0.4, 1, 0] }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }} />
              </>
            )}
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="flex items-center gap-3 text-emerald-300">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">System response</span>
          </div>
          <h3 className="mt-4 text-3xl font-black tracking-[-0.06em] text-white">GHL Hub activation flow</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Every missed call becomes a structured, automated follow-up sequence—delivered instantly, routed correctly, and booked without manual effort.</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="a" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20"><CheckCheck className="h-4 w-4" /></div>
                <p className="text-sm font-semibold">Missed Call Texted (&lt;2s)</p>
              </div>
            </motion.div>
          )}
          {step >= 1 && step < 4 && (
            <motion.div key="b" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-indigo-200">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20"><BellRing className="h-4 w-4" /></div>
                <p className="text-sm font-semibold">Slack Alert Sent</p>
              </div>
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div key="c" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20"><CalendarCheck2 className="h-4 w-4" /></div>
                <p className="text-sm font-semibold">Slot Reserved</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm leading-6 text-slate-300">
          <div className="mb-3 flex items-center gap-2 font-medium text-white"><CheckCheck className="h-4 w-4 text-emerald-300" /> Core automation triggers</div>
          <ul className="space-y-2">
            <li>• Instant response in under 2 seconds</li>
            <li>• Team notifications on Slack</li>
            <li>• Calendar booking without extra admin work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ShopifyPerformanceSection() {
  const [loadTime, setLoadTime] = useState(3.5);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLoadTime((value) => (value > 1.5 ? 1.4 : 3.5));
      setCartOpen((value) => !value);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const speedProgress = 1 - (loadTime - 1.5) / 2;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-cyan-400/80">
          <span className="inline-flex items-center gap-2"><Zap className="h-3.5 w-3.5" /> Speed metric</span>
          <span>Core Web Vitals</span>
        </div>

        <div className="mt-6 flex justify-center">
          <svg viewBox="0 0 260 150" className="h-[170px] w-full max-w-[260px]">
            <path d="M 30 110 A 100 100 0 0 1 230 110" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="14" strokeLinecap="round" />
            <motion.path
              d="M 30 110 A 100 100 0 0 1 230 110"
              fill="none"
              stroke="url(#shop-speed)"
              strokeWidth="14"
              strokeLinecap="round"
              pathLength={speedProgress}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: speedProgress }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <circle cx="130" cy="110" r="6" fill="#22D3EE" />
            <motion.circle cx={130} cy={110} r={18} fill="rgba(34,211,238,0.08)" animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.2] }} transition={{ duration: 1.2, repeat: Infinity }} />
            <defs>
              <linearGradient id="shop-speed" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="55%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-2 text-center">
          <div className="text-4xl font-black tracking-[-0.06em] text-white">{loadTime.toFixed(1)}s</div>
          <p className="mt-2 text-sm text-cyan-300">&lt;1.5s Mobile Load Time</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-violet-400/80">
          <span className="inline-flex items-center gap-2"><ShoppingCart className="h-3.5 w-3.5" /> Add bundle</span>
          <span>Cart flow</span>
        </div>

        <motion.div initial={false} animate={{ x: cartOpen ? -8 : 0 }} className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Bundle</div>
              <div className="mt-2 text-xl font-bold text-white">Growth Kit</div>
            </div>
            <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-300"><Store className="h-5 w-5" /></div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
            <span>Starter pack</span>
            <span className="font-semibold text-white">$149</span>
          </div>
          <button className="mt-5 w-full rounded-xl bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
            Add bundle
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 260, opacity: 0 }}
          animate={{ x: cartOpen ? 0 : 260, opacity: cartOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute right-4 top-16 w-[64%] rounded-2xl border border-emerald-500/30 bg-slate-900/95 p-4 shadow-[0_30px_60px_rgba(16,185,129,0.18)]"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Cart</span>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-300">Ready</span>
          </div>
          <div className="mb-3 h-2.5 rounded-full bg-slate-800">
            <motion.div initial={{ width: 0 }} animate={{ width: cartOpen ? "100%" : "0%" }} transition={{ duration: 0.7 }} className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
            <span>Progress</span>
            <span className="text-emerald-300">100%</span>
          </div>
          <div className="mt-4 text-lg font-bold text-white">Free Shipping Unlocked!</div>
        </motion.div>
      </div>
    </div>
  );
}

function FunnelAttributionSection() {
  const particles = [
    { color: "bg-blue-400", left: "left-[18%]", delay: 0 },
    { color: "bg-red-400", left: "left-[36%]", delay: 0.3 },
    { color: "bg-cyan-400", left: "left-[54%]", delay: 0.6 },
  ];

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-cyan-400/80">
          <span className="inline-flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5" /> Attribution</span>
          <span>Live</span>
        </div>

        <div className="relative mx-auto h-[320px] max-w-[380px] rounded-[20px] bg-slate-950/80 p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),rgba(2,6,23,0.96)_60%)]" />

          {particles.map((particle, index) => (
            <motion.div
              key={index}
              initial={{ y: -10, opacity: 0, x: 0 }}
              animate={{ y: [0, 70, 130, 190, 240], x: [0, 16, 12, -12, 0], opacity: [0, 1, 1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: particle.delay }}
              className={`absolute top-0 ${particle.left} h-2.5 w-2.5 rounded-full ${particle.color}`} />
          ))}

          <div className="absolute left-1/2 top-10 h-[210px] w-[200px] -translate-x-1/2 rounded-t-[60px] border border-slate-700 bg-slate-900/60" />
          <div className="absolute left-1/2 top-[85px] h-[170px] w-[140px] -translate-x-1/2 rounded-t-[50px] border border-slate-700 bg-slate-900/70" />
          <div className="absolute left-1/2 top-[130px] h-[120px] w-[90px] -translate-x-1/2 rounded-t-[40px] border border-slate-700 bg-slate-900/80" />

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Deal Closed ($)</div>

          <svg viewBox="0 0 350 270" className="absolute inset-0 h-full w-full">
            <path d="M 160 220 C 120 180, 115 125, 120 90" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="8 10" fill="none" />
            <path d="M 200 220 C 240 180, 245 125, 240 90" stroke="#F87171" strokeWidth="2.5" strokeDasharray="8 10" fill="none" />
            <path d="M 118 92 L 140 86 L 136 110" stroke="#22D3EE" strokeWidth="2" fill="none" />
            <path d="M 242 92 L 220 86 L 224 110" stroke="#F87171" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-400/80">
          <Target className="h-3.5 w-3.5" /> Server-side sync
        </div>
        <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center justify-between text-sm text-slate-200">
            <span>Server-Side CAPI Sync</span>
            <span className="font-semibold text-emerald-300">100% Match Rate</span>
          </div>
          <div className="mt-4 h-2.5 rounded-full bg-slate-800">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} className="h-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" />
          </div>
        </div>

        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-3">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-300" /> Meta</span>
            <span className="text-cyan-300">+92.4%</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-3">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-300" /> Google</span>
            <span className="text-red-300">+88.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustMoatSection() {
  const [activeTab, setActiveTab] = useState<"instagram" | "whatsapp" | "live">("instagram");
  const [stars, setStars] = useState([5, 5, 4, 5]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStars((prev) => [...prev.slice(1), prev[0]]);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const chatContent = {
    instagram: [
      { sender: "bot", text: "Hi! Need a quote for your service?" },
      { sender: "user", text: "I need roof repair this week." },
      { sender: "bot", text: "Perfect — I can send a slot at 3:00 PM." },
    ],
    whatsapp: [
      { sender: "bot", text: "Reminder: your appointment is tomorrow." },
      { sender: "user", text: "Perfect, confirm my slot." },
      { sender: "bot", text: "Confirmed — 98% open rate" },
    ],
    live: [
      { sender: "agent", text: "We can help with that right now." },
      { sender: "user", text: "Can you call me today?" },
      { sender: "agent", text: "Absolutely — we have availability now." },
    ],
  } as const;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-emerald-400/80">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> Trust signal</span>
          <span>Review defense</span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2 text-slate-200"><Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {stars[0]}.0 Star ratings</div>
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Trustpilot</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em]">Positive</span>
                <Star className="h-4 w-4 fill-emerald-300 text-emerald-300" />
              </div>
              <div className="mt-4 text-2xl font-black">4.9/5</div>
            </div>
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-200">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em]">Support</span>
                <ShieldCheck className="h-4 w-4 text-rose-300" />
              </div>
              <div className="mt-4 text-xl font-black">Private Ticket Shield</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-violet-400/80">
          <span className="inline-flex items-center gap-2"><MessageSquareText className="h-3.5 w-3.5" /> Multi-channel</span>
          <span>AI replies</span>
        </div>

        <div className="mt-5 flex rounded-xl border border-slate-800 bg-slate-900/70 p-1 text-xs font-medium text-slate-300">
          {(["instagram", "whatsapp", "live"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 rounded-lg px-3 py-2 capitalize ${activeTab === tab ? "bg-slate-800 text-white" : "text-slate-400"}`}>
              {tab === "instagram" ? "Instagram DM" : tab === "whatsapp" ? "WhatsApp API" : "24/7 Live Chat"}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {chatContent[activeTab].map((message, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, x: message.sender === "bot" || message.sender === "agent" ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${message.sender === "bot" || message.sender === "agent" ? "bg-slate-800 text-slate-200" : "ml-auto bg-emerald-500/15 text-emerald-100"}`}
            >
              {message.text}
            </motion.div>
          ))}
        </div>

        {activeTab === "whatsapp" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            <BadgeCheck className="h-3.5 w-3.5" /> 98% Open Rate
          </motion.div>
        )}
      </div>
    </div>
  );
}

function GeoGridSection() {
  const cells = useMemo(() => Array.from({ length: 25 }, (_, index) => ({ id: index, active: index % 3 === 0 })), []);
  const [scan, setScan] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setScan((value) => (value + 1) % 360);
    }, 1200);

    return () => window.clearInterval(timer);
  }, []);

  const ranked = [12, 15, 18, 9, 11, 14, 17, 13];

  return (
    <div className="mt-12 rounded-[24px] border border-slate-800 bg-slate-950/80 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-cyan-400/80">
        <span className="inline-flex items-center gap-2"><Radar className="h-3.5 w-3.5" /> Map intelligence</span>
        <span>Local cluster coverage</span>
      </div>

      <div className="relative mx-auto max-w-[780px] overflow-hidden rounded-[30px] border border-slate-800 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),rgba(2,6,23,0.96)_60%)] p-4 sm:p-6">
        <div className="grid grid-cols-5 gap-3">
          {cells.map((cell, index) => {
            const isActive = index % 3 === 0;
            return (
              <div key={cell.id} className={`relative flex h-16 items-center justify-center rounded-xl border ${isActive ? "border-emerald-500/40 bg-emerald-500/10" : "border-slate-800 bg-slate-900/60"}`}>
                <div className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-slate-600"}`} />
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
            style={{ transform: `translate(-50%, -50%) rotate(${scan}deg)` }}
            animate={{ rotate: scan }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
            <div className="absolute left-1/2 top-1/2 h-[2px] w-[50%] -translate-y-1/2 origin-left rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-transparent" style={{ transformOrigin: "0 50%" }} />
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <MapPinned className="h-7 w-7 text-cyan-300" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {ranked.map((value, index) => (
            <motion.div key={value + index} initial={{ opacity: 0.5, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.12 }} className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
              #{value}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-200">
          Local Suburban Cluster Dominance: Top 3 Map Pack Secured
        </div>
      </div>
    </div>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Service not found</p>
          <h1 className="mt-4 text-4xl font-bold">This service page doesn’t exist yet.</h1>
          <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const theme = serviceThemes[slug as keyof typeof serviceThemes];
  const themeStyle = {
    "--service-accent": theme.accent,
    "--service-accent-2": theme.accent2,
    "--service-accent-3": theme.accent3,
    "--service-gradient": theme.gradient,
  } as CSSProperties;

  const renderFeature = () => {
    switch (slug) {
      case "ghl-crm-architecture":
        return <GhlWorkflowDiagram />;
      case "shopify-ecommerce-web-development":
        return <ShopifyPerformanceSection />;
      case "funnel-systems-paid-acquisition":
        return <FunnelAttributionSection />;
      case "rare-high-ticket-moats":
        return <TrustMoatSection />;
      case "local-seo-gbp-authority":
        return <GeoGridSection />;
      default:
        return null;
    }
  };

  return (
    <main className="service-page" style={themeStyle}>
      <div className="service-page__backdrop" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
          ← Back to home
        </Link>

        <header className="mt-8 max-w-5xl">
          <span className="service-page__badge">TECH PAAPI service</span>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl">
              Book Discovery Call <ArrowRight />
            </Button>
            <Link to="/" className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Explore more services
            </Link>
          </div>
        </header>

        {renderFeature()}

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {service.sections.map((section) => (
            <article key={section.heading} className="service-page__card">
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-white">{section.heading}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{section.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
