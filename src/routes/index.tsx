import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft, ArrowRight, BadgeCheck, BarChart3, Check,
  CirclePlay, Code2, CreditCard, Facebook, Instagram, Layers3, Mail,
  Menu, MousePointer2, Play, Rocket, Sparkles, Split,
  WandSparkles, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
  { icon: WandSparkles, title: "AI Page Builder", text: "Describe your offer. Get a complete, on-brand funnel engineered to convert." },
  { icon: CreditCard, title: "1-Click Checkout", text: "Remove friction with fast checkout, order bumps, upsells, and subscriptions." },
  { icon: Mail, title: "Email Sequences", text: "Nurture every lead with behavior-based campaigns that run while you sleep." },
  { icon: Split, title: "A/B Split Testing", text: "Test pages, headlines, and offers with automatic traffic distribution." },
  { icon: BarChart3, title: "Deep Analytics", text: "See the revenue behind every click, campaign, page, and customer journey." },
  { icon: Code2, title: "Zero-Code Launch", text: "Connect your domain, payments, and tools without touching a line of code." },
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

const plans = [
  { name: "Starter", monthly: 29, text: "For your first winning funnel", items: ["3 active funnels", "10,000 visitors / mo", "AI page builder", "Email automations"] },
  { name: "Growth", monthly: 79, popular: true, text: "For scaling products and teams", items: ["25 active funnels", "100,000 visitors / mo", "A/B testing suite", "Advanced analytics", "Priority support"] },
  { name: "Agency", monthly: 199, text: "For client work at scale", items: ["Unlimited funnels", "500,000 visitors / mo", "10 client workspaces", "White-label reports", "Team permissions"] },
];

const steps = [
  { icon: MousePointer2, title: "Choose a proven starting point", text: "Pick from conversion-tested flows built for products, courses, services, and memberships." },
  { icon: WandSparkles, title: "Make it yours with AI", text: "Drop in your offer. AI writes, designs, and connects the journey in your brand voice." },
  { icon: Rocket, title: "Launch, learn, convert", text: "Publish to your domain, watch the data arrive, and let smart tests improve performance." },
];

const footerGroups = [
  { title: "Product", links: ["AI Builder", "Checkout", "Email", "Analytics"] },
  { title: "Solutions", links: ["Creators", "Ecommerce", "Agencies", "Coaches"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Status"] },
];

const faqs = [
  { question: "Can I migrate my existing funnels?", answer: "Yes. Our migration toolkit handles pages, contacts, domains, and automations. Growth and Agency plans also include guided migration support." },
  { question: "Can I connect my own domain?", answer: "Absolutely. Connect an existing domain or subdomain in a few guided steps, with secure hosting included." },
  { question: "What happens after the free trial?", answer: "Your 14-day trial includes all Growth features. Choose a plan to keep publishing, or export your contacts before the trial ends." },
  { question: "Do you charge transaction fees?", answer: "No. TechPaapi never takes a percentage of your sales. Standard fees from your payment processor still apply." },
  { question: "Can my team collaborate?", answer: "Yes. Invite teammates, assign access, leave comments, and organize campaigns across workspaces." },
];

function Logo() {
  return <a href="#top" className="flex items-center gap-0 font-display text-xl font-extrabold"><img src={logoImage} alt="" className="-mr-2 size-12 rounded-md object-cover object-center" />TechPaapi</a>;
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
  const [annual, setAnnual] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="announcement"><span className="animate-pulse-soft size-1.5 rounded-full bg-success" /><strong>NEW</strong><span>AI Funnel Builder 2.0 is live</span><a href="#features">See what’s new <ArrowRight /></a></div>
      <header className="nav-shell">
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center py-4 lg:flex lg:justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Main navigation">{[["Features","#features"],["Case Studies","#stories"],["Pricing","#pricing"],["Resources","#faq"]].map(([label,href]) => <a className="nav-link" href={href} key={label}>{label}</a>)}</nav>
          <div className="hidden items-center gap-3 lg:flex"><Button variant="hero" onClick={() => setDiscoveryOpen(true)}>Book Discovery Call <ArrowRight /></Button></div>
          <Button aria-label="Open menu" variant="glass" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
        {mobileOpen && <nav className="site-container grid gap-2 border-t border-border py-4 lg:hidden">{[["Features","#features"],["Case Studies","#stories"],["Pricing","#pricing"],["Resources","#faq"]].map(([label,href]) => <a onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card" href={href} key={label}>{label}</a>)}<Button variant="hero" className="mt-2" onClick={() => { setMobileOpen(false); setDiscoveryOpen(true); }}>Book Discovery Call</Button></nav>}
      </header>

      <section className="hero-section">
        <div className="hero-grid" />
        <div className="site-container relative z-10 pt-20 text-center sm:pt-28">
          <div className="eyebrow"><Sparkles /> AI-powered funnel operating system</div>
          <h1 className="mx-auto mt-7 max-w-5xl font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl lg:text-8xl">Your next high-converting funnel, <span className="text-gradient">built in minutes.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Launch pages, checkout, email, testing, and analytics from one intelligent workspace. No code. No tool chaos. Just more revenue.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="hero" size="xl">Build your funnel now <ArrowRight /></Button><DemoDialog><Button variant="glass" size="xl"><CirclePlay /> Watch 60-sec demo</Button></DemoDialog></div>
          <p className="mt-4 text-xs text-muted-foreground">14-day free trial · No credit card · Cancel anytime</p>
          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-20"><div className="hero-halo" /><Dashboard /></div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-6" aria-label="Customer brands"><p className="mb-5 text-center text-[10px] font-bold uppercase text-muted-foreground">Powering ambitious teams worldwide</p><div className="logo-marquee"><div className="logo-track">{["NORTHSTAR", "LUMA", "KINETIC", "VERTEX", "OUTPOST", "WAVEFORM", "NORTHSTAR", "LUMA", "KINETIC", "VERTEX", "OUTPOST", "WAVEFORM"].map((brand, i) => <span key={`${brand}-${i}`}>{brand}</span>)}</div></div></section>

      <section id="features" className="section-space site-container">
        <div className="section-heading"><div><span className="kicker">EVERYTHING CONNECTED</span><h2>One system. Every step to <span className="text-gradient">the sale.</span></h2></div><p>Stop duct-taping tools together. TechPaapi brings your entire customer journey into one fast, focused platform.</p></div>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{features.map((feature, i) => <article className="feature-card" key={feature.title}><div className="feature-number">0{i+1}</div><div className="feature-icon"><feature.icon /></div><h3>{feature.title}</h3><p>{feature.text}</p><span className="feature-link">Explore feature <ArrowRight /></span></article>)}</div>
      </section>

      <section className="section-space border-y border-border bg-surface/35">
        <div className="site-container"><div className="mx-auto max-w-2xl text-center"><span className="kicker">FROM IDEA TO INCOME</span><h2 className="section-title mt-4">Three steps. One live funnel.</h2><p className="section-copy mx-auto mt-5">TechPaapi does the heavy lifting while you stay in control of the offer, brand, and customer experience.</p></div>
          <div className="process-line mt-16 grid gap-10 lg:grid-cols-3">{steps.map(({ icon: Icon, title, text }, i) => <article className="process-step" key={title}><div className="step-index">{i+1}</div><Icon className="size-7 text-primary" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="metrics-section"><div className="site-container grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">{[["$108M+","customer revenue generated"],["12,400+","funnels launched"],["99.99%","platform uptime"]].map(([value,label]) => <div className="metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

      <section id="stories" className="section-space site-container">
        <div className="mx-auto max-w-2xl text-center"><span className="kicker">CASE STUDIES</span><h2 className="section-title mt-4">Real founders. <span className="text-gradient">Real results.</span></h2><p className="section-copy mx-auto mt-5">Watch what happens when the funnel is built right.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="story-card">
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
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-space border-y border-border bg-surface/35"><div className="site-container"><div className="mx-auto max-w-2xl text-center"><span className="kicker">SIMPLE, SCALABLE PRICING</span><h2 className="section-title mt-4">Start small. Grow without limits.</h2><p className="section-copy mx-auto mt-5">Every plan includes the complete builder, secure hosting, and zero transaction fees.</p><div className="mt-7 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5"><span className={!annual?"font-bold":"text-muted-foreground"}>Monthly</span><Switch checked={annual} onCheckedChange={setAnnual} aria-label="Use annual billing" /><span className={annual?"font-bold":"text-muted-foreground"}>Annual</span><span className="rounded-full bg-success/10 px-2 py-1 text-[10px] font-bold text-success">SAVE 20%</span></div></div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">{plans.map((plan)=><article key={plan.name} className={`pricing-card ${plan.popular?"pricing-popular":""}`}>{plan.popular&&<div className="popular-badge">MOST POPULAR</div>}<h3>{plan.name}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.text}</p><div className="mt-7 flex items-end gap-1"><span className="font-display text-5xl font-extrabold">${annual?Math.round(plan.monthly*.8):plan.monthly}</span><span className="mb-1 text-muted-foreground">/mo</span></div>{annual&&<p className="mt-2 text-xs text-muted-foreground">Billed annually</p>}<Button variant={plan.popular?"hero":"glass"} className="mt-7 h-11 w-full">Start 14-day trial <ArrowRight /></Button><ul className="mt-8 space-y-3">{plan.items.map(item=><li key={item} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-success" />{item}</li>)}</ul></article>)}</div>
        </div></section>

      <section id="faq" className="section-space site-container"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="kicker">QUESTIONS, ANSWERED</span><h2 className="section-title mt-4">Everything you need to know.</h2><p className="section-copy mt-5">Still curious? Our team is one message away.</p><Button variant="glass" className="mt-7">Talk to a funnel expert <ArrowRight /></Button></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(({ question, answer })=><AccordionItem key={question} value={question} className="border-border"><AccordionTrigger className="py-6 text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="site-container pb-24"><div className="final-cta"><div className="cta-grid"/><div className="relative z-10"><span className="kicker text-primary-foreground/70">YOUR NEXT LAUNCH STARTS HERE</span><h2>Turn your next idea into revenue.</h2><p>Build your complete funnel free for 14 days. Launch today, not someday.</p><Button variant="glass" size="xl" className="mt-8 bg-foreground text-background hover:bg-foreground/90">Start building free <ArrowRight /></Button></div></div></section>

      <footer className="border-t border-border bg-surface/60"><div className="site-container py-14"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]"><div><Logo/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">The intelligent platform for building customer journeys that convert.</p><div className="mt-5 flex gap-2"><Button variant="glass" size="icon" aria-label="Instagram"><Instagram/></Button><Button variant="glass" size="icon" aria-label="Facebook"><Facebook/></Button></div></div>{footerGroups.map(({ title, links })=><div key={title}><h3 className="text-sm font-bold">{title}</h3><ul className="mt-4 space-y-3">{links.map(link=><li key={link}><a href="#top" className="text-sm text-muted-foreground hover:text-foreground">{link}</a></li>)}</ul></div>)}</div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><span>© 2026 TechPaapi. All rights reserved.</span><span>Made for ambitious builders.</span></div></div></footer>
      <DiscoveryCallDialog open={discoveryOpen} onOpenChange={setDiscoveryOpen} />
    </main>
  );
}