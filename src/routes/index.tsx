import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUp, BadgeCheck, BarChart3, Check, Moon, Sun,
  CirclePlay, Code2, CreditCard, Facebook, Instagram, Layers3, Mail,
  Menu, MousePointer2, Play, Rocket, Sparkles, Split,
  WandSparkles, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import maya from "@/assets/testimonial-maya.jpg";
import daniel from "@/assets/testimonial-daniel.jpg";
import ava from "@/assets/testimonial-ava.jpg";
import tylerThumbnail from "@/assets/074101f7-43f2-4d18-a909-6d61cbe4758d.png";
import stuartThumbnail from "@/assets/e9429e5b-f51a-44ac-b6a0-c2b457bad256.png";
import akbarThumbnail from "@/assets/87962a73-f686-492b-96a2-11d81c1e87b6.png";
import logoImage from "@/assets/techpaapi_logo12.png";
import demoVideo from "@/assets/funnel-demo.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechPaapi — AI Funnel Builder for More Sales" },
      { name: "description", content: "Turn ideas into high-converting sales funnels in minutes with AI pages, checkout, email automations, testing, and analytics." },
      { property: "og:title", content: "TechPaapi — AI Funnel Builder for More Sales" },
      { property: "og:description", content: "Build, launch, and optimize your entire sales journey without code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    slug: "ghl-crm-architecture",
    icon: Layers3,
    title: "GoHighLevel CRM Architecture & Done-For-You Implementation",
    text: "Setup & compliance, custom pipeline architecture, speed-to-lead engines, and database reactivation that recover dormant leads and automate responses inside client-owned systems.",
  },
  {
    slug: "shopify-ecommerce-web-development",
    icon: CreditCard,
    title: "High-Performance Shopify E-Commerce & Web Development",
    text: "OS 2.0 engineering, seamless replatforming, and CRO retention systems designed for speed, compliance, and conversion optimization.",
  },
  {
    slug: "funnel-systems-paid-acquisition",
    icon: Rocket,
    title: "High-Converting Funnel Systems & Paid Acquisition",
    text: "Direct-response funnels, paid media testing, and closed-loop attribution that connect ad spend to booked calls and revenue outcomes.",
  },
  {
    slug: "rare-high-ticket-moats",
    icon: BadgeCheck,
    title: "Rare & High-Ticket Differentiating Moats",
    text: "Trustpilot and review defense systems, 24/7 live chat ops, Instagram DM automation, and WhatsApp Business API workflows that create frictionless trust.",
  },
  {
    slug: "local-seo-gbp-authority",
    icon: BarChart3,
    title: "Local SEO, Google Business Profile & Authority",
    text: "GBP dominance, local authority pages, citation cleanup, and map-pack optimization to improve local visibility and conversion quality.",
  },
];

const testimonials = [
  { image: maya, name: "Maya Chen", role: "Founder, Studio North", metric: "+218% conversion", vimeoId: "1073389329", quote: "We launched our highest-converting offer in four days. TechPaapi replaced five tools and made the whole journey visible." },
  { image: daniel, name: "Daniel Okafor", role: "CEO, Forma Commerce", metric: "$84k in 30 days", vimeoId: "1073389080", quote: "The AI builder gave us a sharp first draft, then the testing engine found a winner we would never have spotted manually." },
  { image: ava, name: "Ava Bennett", role: "Creator, The Workroom", metric: "3.4× more leads", vimeoId: "1073388946", quote: "My first funnel used to take weeks. Now I can go from idea to a live campaign before lunch—and it still feels like my brand." },
];

const stories = [
  { thumb: akbarThumbnail, name: "Akbar Sheikh", company: "GiveTech", metric: "$5M", vimeoId: "1073389329" },
  { thumb: tylerThumbnail, name: "Tyler Pelletier", company: "Pelletier Holdings", metric: "$1M/yr", vimeoId: "1073389080" },
  { thumb: stuartThumbnail, name: "Stuart Bevins", company: "Entrepreneur's Circle", metric: "$600k+/mo", vimeoId: "1073388946" },
  // Placeholder slots — replace the name, company, metric, vimeoId, and thumb with the real details.
  { thumb: maya, name: "Your name", company: "Your company", metric: "Your metric", vimeoId: "1073389329", placeholder: true },
  { thumb: daniel, name: "Your name", company: "Your company", metric: "Your metric", vimeoId: "1073389080", placeholder: true },
  { thumb: ava, name: "Your name", company: "Your company", metric: "Your metric", vimeoId: "1073388946", placeholder: true },
];

const caseStudies = [
  {
    title: "Local Emergency & Commercial Services",
    client: "Plumbing & HVAC",
    metric: "+205% ROAS in 6 months",
    metricDetail: "$2K/mo spend generated $4.1K/mo net profit",
    challenge: "A mid-sized regional contractor was burning ad spend on unsegmented Google Ads with zero closed-loop tracking. Weekends and evenings were especially costly, forfeiting high-margin emergency jobs to competitors.",
    solution: "TECH PAAPI deployed a complete GoHighLevel sub-account with Twilio call routing, 30-second missed-call text-backs, AI conversational booking, and restructured Google Search campaigns by exact high-ticket service line.",
    outcomes: ["Cost per Lead dropped from $80 to $48 within 90 days", "Inbound calls surged to 472 verified leads per month", "Technician schedule utilization reached 90%+ throughout off-peak months"],
    bars: [76, 92, 84],
  },
  {
    title: "High-Ticket Professional Legal Services",
    client: "Personal Injury Law Firm",
    metric: "+279% organic traffic YoY",
    metricDetail: "+150% case inquiries | $4.2M attributed pipeline",
    challenge: "The firm was losing high-value law searches on pages two and three while expensive CPCs created bounce rates and unqualified inquiries.",
    solution: "We rebuilt the technical SEO foundation with a 100/100 PageSpeed overhaul, programmatic practice-area landing pages, frictionless multi-step qualifying intake, and instant SMS qualification workflows.",
    outcomes: ["279% increase in organic search traffic", "60+ high-value target keywords ranking in the top 3", "$4.2M in verified case pipeline generated"],
    bars: [88, 72, 96],
  },
  {
    title: "Scaling DTC E-Commerce & Seamless Shopify Migration",
    client: "Apparel Brand",
    metric: "+84% conversion rate lift",
    metricDetail: "4.8x blended ROAS | Zero SEO equity loss | Sub-1.2s mobile speed",
    challenge: "A legacy WooCommerce store was losing revenue to slow checkout abandonment and inconsistent inventory synchronization.",
    solution: "We engineered a custom Shopify OS 2.0 storefront with sub-1.2s load speeds, executed a full 301 redirect mapping, and deployed integrated Klaviyo email flows with WhatsApp abandoned-cart recovery.",
    outcomes: ["Mobile conversion rate jumped from 1.6% to 2.95% within 45 days", "Recovered over $18,500 per month in previously lost cart revenue", "Migration preserved organic search equity"],
    bars: [94, 81, 87],
  },
  {
    title: "Database Reactivation & CRM Automation Sprint",
    client: "Health & Business Consulting",
    metric: "10,000 dormant leads reactivated",
    metricDetail: "$68,000 cash collected in 14 days | Zero additional ad spend",
    challenge: "More than 10,000 cold leads had accumulated over three years in disconnected spreadsheets while the team relied on manual follow-up.",
    solution: "We completed a list hygiene cleanup, synchronized the webhook and calendar systems into GoHighLevel, and launched a conversational two-word SMS and email reactivation campaign connected to an AI calendar scheduler.",
    outcomes: ["640+ warm conversations started within 48 hours", "182 qualified conversations booked", "$68,000 collected from previously dormant demand"],
    bars: [91, 68, 98],
  },
];

const plans = [
  {
    name: "Starter Growth",
    label: "Launchpad",
    price: "$1,500",
    setup: "+$1,000 setup",
    text: "For local service businesses and early-stage Shopify brands",
    items: [
      "Full GoHighLevel core setup or Shopify maintenance",
      "1 custom high-converting funnel / landing page",
      "Automated SMS/email speed-to-lead follow-up",
      "Automated review generation engine (Google/Trustpilot)",
      "Monthly performance reporting and tech support",
    ],
  },
  {
    name: "Scale Engine",
    label: "Most Popular",
    price: "$3,000",
    setup: "+$1,500 setup",
    popular: true,
    text: "For growing brands, multi-location clinics, and home services",
    items: [
      "Everything in Starter",
      "Active paid ads management (Meta or Google Ads up to $5k spend)",
      "Full database reactivation campaign for dormant leads",
      "WhatsApp Business API and Instagram DM automation",
      "Local SEO and Google Business Profile monthly optimization",
      "24/7 AI conversational lead qualification bot",
    ],
  },
  {
    name: "Enterprise Dominance",
    label: "Done-For-You",
    price: "$5,000–$7,500",
    setup: "Setup waived",
    text: "For aggressive DTC brands, high-ticket nationals, and agencies",
    items: [
      "Everything in Scale Engine",
      "Full-stack omnichannel Meta + Google Search + PMax",
      "Custom Shopify OS 2.0 development and continuous CRO sprints",
      "Advanced GHL custom webhooks, APIs, and n8n/Make orchestration",
      "24/7 managed live chat customer support operators",
      "Weekly executive strategy calls and a dedicated Slack channel",
    ],
  },
];

const steps = [
  { icon: MousePointer2, title: "Choose a proven starting point", text: "Pick from conversion-tested flows built for products, courses, services, and memberships." },
  { icon: WandSparkles, title: "Make it yours with AI", text: "Drop in your offer. AI writes, designs, and connects the journey in your brand voice." },
  { icon: Rocket, title: "Launch, learn, convert", text: "Publish to your domain, watch the data arrive, and let smart tests improve performance." },
];

const deploymentStages = [
  { number: "01", phase: "Days 1–7", label: "Architecture & Audit", text: "DNS setup, A2P 10DLC registration, GHL pipeline mapping, and Shopify wireframes." },
  { number: "02", phase: "Days 8–18", label: "Build & Integration", text: "Custom funnel design, workflow engineering, WhatsApp/Twilio integration, and email deliverability." },
  { number: "03", phase: "Days 19–25", label: "Stress-Test & Migration", text: "End-to-end webhook testing, database reactivation dry runs, and test-call simulations." },
  { number: "04", phase: "Days 26–30", label: "Handover & Launch", text: "Staff training portal, dashboard walkthrough, key handover, and live deployment." },
];

const automationMenuGroups = [
  {
    label: "GoHighLevel Systems",
    kicker: "GOHIGHLEVEL SYSTEMS",
    items: [
      ["GHL Expert", "CRM architecture and implementation", "gohighlevel-expert"],
      ["GHL Setup", "A clean account from day one", "gohighlevel-setup"],
      ["GHL CRM Setup", "Pipelines, fields, calendars and routing", "gohighlevel-crm-setup"],
      ["GHL Automation", "Workflows that hold under pressure", "gohighlevel-automation"],
      ["GHL Funnels", "Conversion paths built in your account", "gohighlevel-funnels"],
      ["GHL Migration", "Move systems without losing signal", "gohighlevel-migration"],
    ],
  },
  {
    label: "AI & Automation",
    kicker: "AI VOICE",
    items: [
      ["AI Voice Agents", "The voice hub", "ai-voice-agents"],
      ["AI Receptionist", "Answers every inbound call", "ai-receptionist"],
      ["AI Appointment Setter", "Books outbound", "ai-appointment-setter"],
      ["AI SDR", "Prospects and qualifies", "ai-sdr"],
      ["AI Calling Bots", "The calling layer, built properly", "ai-calling-bots"],
    ],
  },
  {
    label: "AI Chat & Messaging",
    kicker: "AI CHAT & MESSAGING",
    items: [
      ["AI Chatbot", "Website and in-CRM chat", "ai-chatbot"],
      ["Conversational AI", "Multi-channel dialogue design", "conversational-ai"],
      ["AI Customer Support", "Deflect repetitive tickets", "ai-customer-support"],
      ["WhatsApp Automation", "Two-way conversations at scale", "whatsapp-automation"],
      ["Instagram DM Automation", "Turn DMs into bookings", "instagram-dm-automation"],
    ],
  },
  {
    label: "Automation Platforms",
    kicker: "AUTOMATION PLATFORMS",
    items: [
      ["Workflow Automation", "Cross-platform orchestration", "workflow-automation"],
      ["Make.com", "Visual automation systems", "make-automation"],
      ["n8n", "Flexible open workflow infrastructure", "n8n-automation"],
      ["Zapier", "Fast app-to-app connections", "zapier-automation"],
      ["Vapi", "Voice infrastructure for AI agents", "vapi"],
      ["Retell AI", "Natural voice conversations", "retell-ai"],
    ],
  },
  {
    label: "For Agencies & Growth",
    kicker: "FOR AGENCIES",
    items: [
      ["White-Label GHL", "Sell the strategy, we fulfil the build", "white-label-ghl"],
      ["GHL Fulfilment", "A delivery team under your brand", "ghl-fulfillment"],
      ["Outsourced GHL", "Extend your capacity without hiring", "outsourced-ghl"],
      ["GHL Development Partner", "Technical depth for complex builds", "ghl-development-partner"],
      ["Managed GHL Services", "Keep the system improving", "managed-ghl-services"],
    ],
  },
];

function AutomationMegaMenu() {
  return (
    <details className="mega-menu relative hidden lg:block">
      <summary className="nav-link flex cursor-pointer list-none items-center gap-1 text-muted-foreground marker:hidden">AI & Automation <span aria-hidden="true">⌄</span></summary>
      <div className="mega-menu__panel">
        <div className="grid gap-0 p-6 sm:grid-cols-2 lg:grid-cols-5">
              {automationMenuGroups.map((group) => (
                <div className="border-border p-3 first:pl-0 lg:border-l lg:first:border-l-0" key={group.label}>
                  <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">{group.kicker}</p>
                  <div className="space-y-4">
                    {group.items.map(([title, description, slug]) => (
                      <Link to="/solutions/$slug" params={{ slug }} className="group block rounded-md p-1 transition hover:bg-card" key={slug}>
                          <span className="block text-sm font-bold text-foreground group-hover:text-primary">{title}</span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
        </div>
        <div className="flex items-center justify-between border-t border-border px-6 py-4 text-sm">
              <span className="text-muted-foreground">Systems engineered around how your business actually operates.</span>
              <Link to="/services/ghl-crm-architecture" className="font-bold text-primary">View core services <ArrowRight className="ml-1 inline size-4" /></Link>
        </div>
      </div>
    </details>
  );
}

const footerGroups = [
  { title: "Product", links: ["AI Builder", "Checkout", "Email", "Analytics"] },
  { title: "Solutions", links: ["Creators", "Ecommerce", "Agencies", "Coaches"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Status"] },
];

const faqs = [
  {
    question: "Who is TECH PAAPI, and why does this agency exist?",
    answer: "The Core Purpose: TECH PAAPI was founded to bridge the massive execution divide in the digital agency ecosystem. Most traditional agencies either sell 'traffic' (ads/SEO) without fixing conversion funnels, or build pretty websites without automated backend CRM workflows. When leads land, they sit unanswered for hours or days. TECH PAAPI exists to engineer unified revenue machines where every dollar of ad spend and every website visitor is immediately captured, qualified, nurtured, and converted via automated, multi-channel pipelines.",
  },
  {
    question: "What is TECH PAAPI's North Star Metric (NSM)?",
    answer: "The Primary Metric: Speed-to-Qualified-Conversation and Closed Contribution Margin. Unlike agencies focused on vanity metrics (impressions, clicks, or platform ROAS), our North Star is cutting inbound response time from hours to under 45 seconds and generating verifiable, closed revenue for our clients directly inside systems they own.",
  },
  {
    question: "What will TECH PAAPI deliberately NEVER do?",
    answer: "- No Hostage Situations: We will never build assets inside our own agency accounts to hold client data hostage. Everything is built directly inside the client's GoHighLevel and Shopify infrastructure.\n- No Lazy Templates: We will never deploy generic, unmodified agency snapshot templates without deep custom logic, brand-specific tags, and tested routing triggers.\n- No Vanity Reporting: We will never report vanity metrics without closed-loop pipeline attribution and verified financial impact.",
  },
  {
    question: "Who is our Ideal Client Profile (ICP), and who is NOT a fit?",
    answer: "- Ideal Client: Growth-focused Local Service Businesses (Plumbing, HVAC, Roofing, Med Spas, Legal, Real Estate), Scaling DTC Shopify Brands doing $10k-$250k/mo, and Marketing Agencies needing White-Label GHL fulfillment squads.\n- Not A Fit: Hobbyists with no product-market fit, businesses unwilling to invest in ad spend or software infrastructure, and clients seeking manual micromanagement rather than scalable automated architecture.",
  },
];

function Logo() {
  return <a href="#top" className="flex items-center gap-0 font-display text-xl font-extrabold"><img src={logoImage} alt="" className="-mr-2 size-12 rounded-md object-cover object-center" /><span>Tech</span><span className="text-[#F5730C]">Paapi</span></a>;
}

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const [tilt, setTilt] = useState<CSSProperties>({});

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ "--tilt-x": `${y * -8}deg`, "--tilt-y": `${x * 8}deg` } as CSSProperties);
  }

  function resetTilt() {
    setTilt({});
  }

  return <article className={`tilt-card ${className}`} style={tilt} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>{children}</article>;
}

function useMagneticInteractions() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("button:not([data-static]), .nav-link, .feature-link"));

    const handleMove = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const bounds = element.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
      element.style.setProperty("--magnetic-x", `${x}px`);
      element.style.setProperty("--magnetic-y", `${y}px`);
    };
    const reset = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      element.style.setProperty("--magnetic-x", "0px");
      element.style.setProperty("--magnetic-y", "0px");
    };

    elements.forEach((element) => {
      element.classList.add("magnetic-target");
      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", reset);
    });
    return () => elements.forEach((element) => {
      element.classList.remove("magnetic-target");
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", reset);
    });
  });
}

function DemoDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl overflow-hidden border-border bg-card p-0 text-foreground">
        <DialogHeader className="sr-only"><DialogTitle>TechPaapi product demo</DialogTitle><DialogDescription>See an automated sales funnel come to life.</DialogDescription></DialogHeader>
        <video className="aspect-video w-full" src={demoVideo.url} controls autoPlay playsInline aria-label="TechPaapi product demo" />
      </DialogContent>
    </Dialog>
  );
}

function VimeoDialog({ vimeoId, title, children }: { vimeoId: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl overflow-hidden border-border bg-card p-0 text-foreground">
        <DialogHeader className="sr-only"><DialogTitle>{title}</DialogTitle><DialogDescription>Video testimonial</DialogDescription></DialogHeader>
        {open && <iframe className="aspect-video w-full" src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />}
      </DialogContent>
    </Dialog>
  );
}

const revenueOptions = ["Under $5k", "$5k–$15k", "$15k–$50k", "$50k+"];

function DiscoveryCallDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [step, setStep] = useState(0);
  const [ghl, setGhl] = useState<"yes" | "no" | "">("");
  const [revenue, setRevenue] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [hasSite, setHasSite] = useState<"yes" | "no" | "">("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const total = 4;
  const isLast = step === total - 1;

  function reset() {
    setStep(0); setGhl(""); setRevenue(""); setBottleneck(""); setHasSite(""); setUrl(""); setError(""); setDone(false);
  }
  function handleOpenChange(v: boolean) {
    if (!v) setTimeout(reset, 220);
    onOpenChange(v);
  }
  function validate(): boolean {
    setError("");
    if (step === 0 && !ghl) { setError("Please select an option to continue."); return false; }
    if (step === 1 && !revenue) { setError("Please select a revenue range."); return false; }
    if (step === 2 && !bottleneck.trim()) { setError("Please tell us your biggest bottleneck."); return false; }
    if (step === 3) {
      if (!hasSite) { setError("Please select an option."); return false; }
      if (hasSite === "yes" && !url.trim()) { setError("Please share your website URL."); return false; }
    }
    return true;
  }
  function next() {
    if (!validate()) return;
    if (isLast) { setDone(true); return; }
    setStep((s) => s + 1);
  }
  function back() { setError(""); setStep((s) => Math.max(0, s - 1)); }

  const progress = done ? 100 : (step / total) * 100;
  const Choice = ({ value, label, letter, current, onSelect }: { value: string; label: string; letter: string; current: string; onSelect: (v: string) => void }) => (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`choice-pill ${current === value ? "choice-pill-active" : ""}`}
    >
      <span className="choice-letter">{letter}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="discovery-modal max-w-xl border-border p-0 text-foreground">
        <DialogHeader className="sr-only"><DialogTitle>Book your discovery call</DialogTitle><DialogDescription>Answer a few questions so we can prepare for your call.</DialogDescription></DialogHeader>
        <div className="px-6 pt-6">
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-1 rounded-full bg-gradient-to-r from-primary via-primary-bright to-accent transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Step {Math.min(step + 1, total)} of {total}</p>
        </div>

        {done ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-success/15 text-success"><Check className="size-7" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold">You're all set!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">We've received your details. A funnel advisor will reach out within one business day to book your call.</p>
            <Button variant="hero" className="mt-7" onClick={() => handleOpenChange(false)}>Done</Button>
          </div>
        ) : (
          <div className="px-6 pb-6 pt-5">
            {step === 0 && (
              <fieldset className="space-y-4">
                <legend className="font-display text-xl font-bold sm:text-2xl">Are you currently on GoHighLevel?<span className="text-primary">*</span></legend>
                <div className="grid gap-2.5">
                  <Choice value="yes" letter="A" label="Yes" current={ghl} onSelect={(v) => setGhl(v as "yes" | "no")} />
                  <Choice value="no" letter="B" label="No" current={ghl} onSelect={(v) => setGhl(v as "yes" | "no")} />
                </div>
              </fieldset>
            )}
            {step === 1 && (
              <fieldset className="space-y-4">
                <legend className="font-display text-xl font-bold sm:text-2xl">What monthly revenue range is your business currently at?<span className="text-primary">*</span></legend>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {revenueOptions.map((opt, i) => (
                    <Choice key={opt} value={opt} letter={String.fromCharCode(65 + i)} label={opt} current={revenue} onSelect={setRevenue} />
                  ))}
                </div>
              </fieldset>
            )}
            {step === 2 && (
              <fieldset className="space-y-4">
                <legend className="font-display text-xl font-bold sm:text-2xl">What's the biggest bottleneck in your business right now?<span className="text-primary">*</span></legend>
                <p className="text-sm text-muted-foreground">One or two sentences. This helps your advisor prepare for your call.</p>
                <textarea
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  placeholder="Type your answer here..."
                  rows={4}
                  className="discovery-input w-full resize-none rounded-md border border-border bg-surface/60 px-4 py-3 text-sm leading-6 text-foreground outline-none transition focus:border-primary"
                />
              </fieldset>
            )}
            {step === 3 && (
              <fieldset className="space-y-4">
                <legend className="font-display text-xl font-bold sm:text-2xl">Do you have a techpaapi/Website<span className="text-primary">*</span></legend>
                <p className="text-sm text-muted-foreground">Share it so we can analyse it before the call.</p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Choice value="no" letter="A" label="No, I don't have one" current={hasSite} onSelect={(v) => setHasSite(v as "yes" | "no")} />
                  <Choice value="yes" letter="B" label="Yes, here is the URL" current={hasSite} onSelect={(v) => setHasSite(v as "yes" | "no")} />
                </div>
                {hasSite === "yes" && (
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="discovery-input w-full rounded-md border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  />
                )}
              </fieldset>
            )}

            {error && <p className="mt-4 rounded-md bg-destructive/15 px-3 py-2 text-xs font-medium text-destructive">{error}</p>}

            <div className="mt-7 flex items-center justify-between gap-3">
              <Button variant="glass" onClick={back} disabled={step === 0} className="gap-1.5"><ArrowLeft className="size-4" /> Back</Button>
              <Button variant="hero" onClick={next} className="gap-1.5">
                {isLast ? "Submit & Book Call" : "Continue"} <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Dashboard() {
  const [node, setNode] = useState(1);
  return (
    <div className="dashboard-shell animate-float" aria-label="Interactive TechPaapi dashboard preview">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3"><span className="size-2 rounded-full bg-success shadow-status" /><span className="text-xs font-bold text-foreground">Summer Launch</span><span className="rounded-sm bg-muted px-2 py-1 text-[10px] text-muted-foreground">LIVE</span></div>
        <div className="flex gap-1.5"><span className="size-2 rounded-full bg-muted" /><span className="size-2 rounded-full bg-muted" /></div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1.4fr_.8fr] sm:p-5">
        <div className="min-w-0 rounded-md border border-border bg-surface p-4">
          <div className="mb-5 flex items-start justify-between"><div><p className="text-[10px] uppercase text-muted-foreground">Total revenue</p><p className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">$48,290</p></div><span className="text-xs font-bold text-success">+24.8%</span></div>
          <div className="relative h-32 overflow-hidden sm:h-40">
            <div className="chart-grid absolute inset-0" />
            <svg viewBox="0 0 500 160" className="absolute inset-0 h-full w-full" role="img" aria-label="Revenue chart trending upward">
              <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--chart-glow)" stopOpacity=".5"/><stop offset="1" stopColor="var(--chart-glow)" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 140 C50 135 62 118 105 122 S165 103 205 107 S260 67 305 82 S365 52 402 56 S460 20 500 25 L500 160 L0 160Z" fill="url(#area)" />
              <path d="M0 140 C50 135 62 118 105 122 S165 103 205 107 S260 67 305 82 S365 52 402 56 S460 20 500 25" fill="none" stroke="var(--chart-glow)" strokeWidth="3" strokeLinecap="round" className="chart-line" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          <div className="rounded-md border border-border bg-surface p-4"><p className="text-[10px] uppercase text-muted-foreground">Conversion</p><p className="mt-2 font-display text-2xl font-bold">12.8%</p><p className="mt-1 text-[10px] text-success">↑ 3.2% this week</p></div>
          <div className="rounded-md border border-border bg-surface p-4"><p className="text-[10px] uppercase text-muted-foreground">Visitors</p><p className="mt-2 font-display text-2xl font-bold">28.4k</p><div className="mt-3 flex -space-x-2">{testimonials.map((item) => <img key={item.name} src={item.image} alt="" className="size-6 rounded-full border-2 border-surface object-cover" />)}</div></div>
        </div>
      </div>
      <div className="mx-3 mb-3 rounded-md border border-border bg-surface p-3 sm:mx-5 sm:mb-5">
        <div className="grid grid-cols-3 items-center gap-2">
          {["Landing page", "Checkout", "Thank you"].map((label, index) => <button key={label} onClick={() => setNode(index)} className={`funnel-node ${node === index ? "funnel-node-active" : ""}`}><span className="hidden sm:inline">{index + 1}. </span>{label}</button>)}
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useMagneticInteractions();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("techpaapi-theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem("techpaapi-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleHeroPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 28;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 20;
    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
  }

  function resetHeroPointer(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  }

  return (
    <main id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="announcement"><span className="animate-pulse-soft size-1.5 rounded-full bg-success" /><strong>NEW</strong><span>AI Funnel Builder 2.0 is live</span><a href="#features">See what’s new <ArrowRight /></a></div>
      <header className="nav-shell">
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center py-4 lg:flex lg:justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Main navigation"><a className="nav-link" href="#features">Features</a><AutomationMegaMenu/><a className="nav-link" href="/case-studies/meta-lead-gen">Case Studies</a><a className="nav-link" href="/portfolio">Portfolio</a><a className="nav-link" href="#pricing">Pricing</a><a className="nav-link" href="#faq">Resources</a></nav>
          <div className="hidden items-center gap-3 lg:flex"><Button variant="glass" size="icon" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun /> : <Moon />}</Button><Button variant="hero" onClick={() => setDiscoveryOpen(true)}>Book Discovery Call <ArrowRight /></Button></div>
          <div className="flex items-center gap-2 lg:hidden"><Button variant="glass" size="icon" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun /> : <Moon />}</Button><Button aria-label="Open menu" variant="glass" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {mobileOpen && <nav className="site-container grid gap-2 border-t border-border py-4 lg:hidden"><a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href="#features">Features</a><a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href="/case-studies/meta-lead-gen">Case Studies</a><a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href="/portfolio">Portfolio</a><details className="rounded-md border border-border bg-card/50 p-3"><summary className="cursor-pointer text-sm font-semibold">AI & Automation</summary><div className="mt-3 grid gap-2">{automationMenuGroups.flatMap((group) => group.items).map(([title, , slug]) => <Link onClick={() => setMobileOpen(false)} className="rounded px-2 py-2 text-sm text-muted-foreground hover:bg-accent" to="/solutions/$slug" params={{ slug }} key={slug}>{title}</Link>)}</div></details><a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href="#pricing">Pricing</a><a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href="#faq">Resources</a><Button variant="hero" className="mt-2" onClick={() => { setMobileOpen(false); setDiscoveryOpen(true); }}>Book Discovery Call</Button></nav>}
      </header>

      <section className="hero-section" onPointerMove={handleHeroPointerMove} onPointerLeave={resetHeroPointer}>
        <div className="hero-grid" />
        <div className="hero-mesh" />
        <div className="hero-particles" />
        <div className="site-container relative z-10 pt-20 text-center sm:pt-28">
          <div className="eyebrow"><Sparkles /> AI-POWERED FUNNEL OPERATING SYSTEM</div>
          <h1 className="mx-auto mt-8 max-w-5xl font-display text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl lg:text-[5rem]" aria-label="MISSION STATEMENT">
            <span className="inline-flex items-center gap-4 text-gradient">
              <span aria-hidden="true" className="text-3xl sm:text-4xl lg:text-5xl">★</span>
              <span>MISSION STATEMENT</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm font-medium leading-[1.25] tracking-[-0.035em] text-muted-foreground sm:text-base lg:text-[1.45rem]" aria-label="We build the CRM, AI voice agents, chatbots, workflows, funnels and integrations that move a lead from first enquiry to booked appointment, without anyone on your team chasing it.">
            We build the CRM, AI voice agents, chatbots, workflows, funnels and integrations that move a lead from first enquiry to booked appointment, without anyone on your team chasing it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" onClick={() => setDiscoveryOpen(true)}>Book Discovery Call <ArrowRight /></Button>
            <Button variant="glass" size="xl" onClick={() => window.location.href = '#features'}>Explore Our Services</Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-6" aria-label="Customer brands"><p className="mb-5 text-center text-[10px] font-bold uppercase text-muted-foreground">Powering ambitious teams worldwide</p><div className="logo-marquee"><div className="logo-track">{["NORTHSTAR", "LUMA", "KINETIC", "VERTEX", "OUTPOST", "WAVEFORM", "NORTHSTAR", "LUMA", "KINETIC", "VERTEX", "OUTPOST", "WAVEFORM"].map((brand, i) => <span key={`${brand}-${i}`}>{brand}</span>)}</div></div></section>

      <section id="features" className="section-space site-container">
        <div className="section-heading"><div><span className="kicker">THE TECH PAAPI 5-PILLAR SERVICE ARCHITECTURE</span><h2>Built to compound revenue across every layer of the funnel.</h2></div><p>TECH PAAPI organizes its capabilities into five distinct operational pillars designed to deliver compounding returns.</p></div>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{features.map((feature, i) => <TiltCard className="feature-card" key={feature.title}><div className="feature-number">0{i+1}</div><div className="feature-icon"><feature.icon /></div><h3>{feature.title}</h3><p>{feature.text}</p><a href={`/services/${feature.slug}`} className="feature-link">Explore feature <ArrowRight /></a></TiltCard>)}</div>
      </section>

      <section id="deployment" className="deployment-section section-space border-y border-border bg-surface/35">
        <div className="site-container">
          <div className="section-heading">
            <div><span className="kicker">OPERATIONAL SPRINT: 30 DAYS TO LIVE DEPLOYMENT</span><h2>From deep audit to a live revenue system.</h2></div>
            <p><strong className="text-foreground">The 30-Day Guarantee:</strong> TECH PAAPI delivers a fully live, tested revenue system inside the client&apos;s account in 30 days.</p>
          </div>

          <div className="deployment-workflow mt-14">
            <div className="deployment-track" aria-hidden="true"><span /></div>
            {deploymentStages.map((stage, index) => (
              <article className="deployment-stage" key={stage.number}>
                <div className="deployment-node"><span>{stage.number}</span></div>
                <p className="deployment-phase">{stage.phase}</p>
                <h3>{stage.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.text}</p>
                {index < deploymentStages.length - 1 && <div className="deployment-arrow" aria-hidden="true">→</div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface/35">
        <div className="site-container"><div className="mx-auto max-w-2xl text-center"><span className="kicker">FROM IDEA TO INCOME</span><h2 className="section-title mt-4">Three steps. One live funnel.</h2><p className="section-copy mx-auto mt-5">TechPaapi does the heavy lifting while you stay in control of the offer, brand, and customer experience.</p></div>
          <div className="process-line mt-16 grid gap-10 lg:grid-cols-3">{steps.map(({ icon: Icon, title, text }, i) => <article className="process-step" key={title}><div className="step-index">{i+1}</div><Icon className="size-7 text-primary" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="metrics-section"><div className="site-container grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">{[["$108M+","customer revenue generated"],["12,400+","funnels launched"],["99.99%","platform uptime"]].map(([value,label]) => <div className="metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

      <section id="stories" className="section-space site-container">
        <div className="mx-auto max-w-2xl text-center"><span className="kicker">VIDEO CASE STUDIES</span><h2 className="section-title mt-4">Real founders. <span className="text-gradient">Real results.</span></h2><p className="section-copy mx-auto mt-5">Watch what happens when the funnel is built right.</p><a href="/portfolio" className="feature-link mx-auto mt-6 w-fit">View full case study portfolio <ArrowRight /></a></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <TiltCard key={story.name} className="story-card">
              <VimeoDialog vimeoId={story.vimeoId} title={`${story.name} — ${story.company}`}>
                <button className="group relative block w-full" aria-label={`Play ${story.name}'s story`}>
                  <img src={story.thumb} alt={`${story.name} of ${story.company}`} width={1280} height={720} loading="lazy" className="aspect-video w-full object-cover" />
                  <span className="absolute inset-0 bg-background/20 transition group-hover:bg-background/40" />
                  <span className="absolute inset-0 grid place-items-center"><span className="play-btn grid size-14 place-items-center rounded-full text-primary-foreground transition group-hover:scale-110"><Play className="size-6 fill-current" /></span></span>
                </button>
              </VimeoDialog>
              <div className="flex items-center justify-between gap-3 p-4">
                <div><p className="font-bold">{story.name} <BadgeCheck className="inline size-4 text-info" /></p><p className="text-sm text-muted-foreground">{story.company}</p></div>
                <span className={`metric-badge rounded-md px-3 py-2 text-xs font-bold ${story.placeholder ? "opacity-60" : ""}`}>{story.metric}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="case-study-portfolio" className="case-study-section section-space border-y border-border bg-surface/35">
        <div className="site-container">
          <div className="section-heading">
            <div><span className="kicker">VERIFIED CASE STUDIES PORTFOLIO</span><h2>Proof, performance, and the system behind the result.</h2></div>
            <p>Explore the operating challenges, technical interventions, and measurable outcomes behind four TechPaapi engagements.</p>
          </div>
          <div className="case-study-grid mt-14">
            {caseStudies.map((study, index) => (
              <article className="case-study-card" key={study.title}>
                <div className="case-study-card__scan" aria-hidden="true" />
                <div className="case-study-card__header">
                  <div>
                    <span className="case-study-index">0{index + 1}</span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">Case study {index + 1}</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-foreground">{study.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{study.client}</p>
                  </div>
                  <BadgeCheck className="size-6 shrink-0 text-success" aria-label="Verified case study" />
                </div>

                <div className="case-study-metric mt-6">
                  <span className="case-study-metric__label">★ Key impact metric</span>
                  <strong>{study.metric}</strong>
                  <span>{study.metricDetail}</span>
                </div>

                <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
                  <div className="space-y-5 text-sm leading-6 text-muted-foreground">
                    <p><strong className="text-foreground">Client challenge:</strong> {study.challenge}</p>
                    <p><strong className="text-foreground">TECH PAAPI solution:</strong> {study.solution}</p>
                  </div>
                  <div className="case-study-matrix" aria-label={`${study.title} outcome metrics`}>
                    <div className="case-study-matrix__topline"><span>Outcome matrix</span><span>Live impact</span></div>
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <div className="case-study-matrix__row" key={outcome}>
                        <div className="case-study-matrix__bar"><span style={{ "--bar-size": `${study.bars[outcomeIndex]}%` } as CSSProperties} /></div>
                        <p>{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

        <section id="pricing" className="section-space border-y border-border bg-surface/35"><div className="site-container"><div className="mx-auto max-w-2xl text-center"><span className="kicker">SIMPLE, SCALABLE PRICING</span><h2 className="section-title mt-4">Start small. Grow without limits.</h2><p className="section-copy mx-auto mt-5">Choose the delivery tier that matches your growth stage. Every package is built around measurable revenue operations, not generic retainers.</p></div>
          <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3">{plans.map((plan)=><TiltCard key={plan.name} className={`pricing-card ${plan.popular?"pricing-popular":""}`}>{plan.popular&&<div className="popular-badge">MOST POPULAR</div>}<div className="flex items-start justify-between gap-3"><div><h3>{plan.name}</h3><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-primary">{plan.label}</p></div></div><p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{plan.text}</p><div className="mt-7 flex flex-wrap items-end gap-x-1 gap-y-0.5"><span className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{plan.price}</span><span className="mb-1 text-muted-foreground">/mo</span></div><p className="mt-2 text-xs font-medium text-muted-foreground">{plan.setup}</p><Button variant={plan.popular?"hero":"glass"} className="mt-7 h-11 w-full">Book discovery call <ArrowRight /></Button><ul className="mt-8 space-y-3">{plan.items.map(item=><li key={item} className="flex gap-3 text-sm leading-5"><Check className="size-4 shrink-0 text-success" />{item}</li>)}</ul></TiltCard>)}</div>
        </div></section>

      <section id="faq" className="section-space site-container"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="kicker">QUESTIONS, ANSWERED</span><h2 className="section-title mt-4">Everything you need to know.</h2><p className="section-copy mt-5">Still curious? Our team is one message away.</p><Button variant="glass" className="mt-7">Talk to a funnel expert <ArrowRight /></Button></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(({ question, answer })=><AccordionItem key={question} value={question} className="border-border"><AccordionTrigger className="py-6 text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="site-container pb-24"><div className="final-cta"><div className="cta-grid"/><div className="relative z-10"><span className="kicker text-primary-foreground/70">YOUR NEXT LAUNCH STARTS HERE</span><h2>Turn your next idea into revenue.</h2><p>Build your complete funnel free for 14 days. Launch today, not someday.</p><Button variant="glass" size="xl" className="mt-8 bg-foreground text-background hover:bg-foreground/90">Start building free <ArrowRight /></Button></div></div></section>

      <footer className="border-t border-border bg-surface/60"><div className="site-container py-14"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]"><div><Logo/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">The intelligent platform for building customer journeys that convert.</p><div className="mt-5 flex gap-2"><Button variant="glass" size="icon" aria-label="Instagram"><Instagram/></Button><Button variant="glass" size="icon" aria-label="Facebook"><Facebook/></Button></div></div>{footerGroups.map(({ title, links })=><div key={title}><h3 className="text-sm font-bold">{title}</h3><ul className="mt-4 space-y-3">{links.map(link=><li key={link}><a href="#top" className="text-sm text-muted-foreground hover:text-foreground">{link}</a></li>)}</ul></div>)}</div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><span>© 2026 TechPaapi. All rights reserved.</span><span>Made for ambitious builders.</span></div></div></footer>
      {showBackToTop && <button type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="fixed bottom-5 right-5 z-50 grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-primary hover:text-primary"><ArrowUp className="size-5" /></button>}
      <DiscoveryCallDialog open={discoveryOpen} onOpenChange={setDiscoveryOpen} />
    </main>
  );
}