import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, CheckCheck, ChevronRight, Layers3, LineChart, Megaphone, MousePointer2, ShoppingBag, Sparkles, Target, Workflow } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

type Category = "All" | "Paid Acquisition" | "CRM & Automation" | "Shopify & CRO" | "Local Growth";

type Project = {
  category: Exclude<Category, "All">;
  client: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  accent: string;
  icon: typeof Megaphone;
  bars: number[];
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    category: "Paid Acquisition",
    client: "Local Emergency Services",
    title: "From expensive clicks to a booked-call engine.",
    summary: "Rebuilt paid search around high-margin service lines, then connected every call to a speed-to-lead workflow and verified pipeline outcome.",
    metric: "+205%",
    metricLabel: "ROAS in 6 months",
    accent: "orange",
    icon: Megaphone,
    bars: [78, 94, 86],
    tags: ["Google Ads", "GHL", "Call routing"],
    href: "/case-studies/meta-lead-gen",
  },
  {
    category: "Shopify & CRO",
    client: "Scaling DTC Apparel Brand",
    title: "A faster storefront with more room to scale.",
    summary: "Moved a slow WooCommerce experience to Shopify OS 2.0, preserved organic equity, and layered in retention flows for every abandoned cart.",
    metric: "+84%",
    metricLabel: "conversion lift",
    accent: "teal",
    icon: ShoppingBag,
    bars: [94, 82, 88],
    tags: ["Shopify OS 2.0", "CRO", "Klaviyo"],
  },
  {
    category: "CRM & Automation",
    client: "Health & Business Consulting",
    title: "10,000 dormant leads, one reactivation sprint.",
    summary: "Cleaned the database, synchronized the CRM and calendar, and launched a conversational campaign that turned forgotten demand into booked conversations.",
    metric: "$68K",
    metricLabel: "cash collected in 14 days",
    accent: "violet",
    icon: Workflow,
    bars: [91, 68, 98],
    tags: ["Reactivation", "SMS", "AI scheduler"],
  },
  {
    category: "Local Growth",
    client: "High-Ticket Legal Services",
    title: "A local search foundation built for authority.",
    summary: "Combined technical SEO, programmatic practice pages, and qualifying intake workflows to improve both search visibility and inquiry quality.",
    metric: "+279%",
    metricLabel: "organic traffic YoY",
    accent: "blue",
    icon: Target,
    bars: [88, 72, 96],
    tags: ["Technical SEO", "Local pages", "Qualification"],
  },
  {
    category: "Paid Acquisition",
    client: "Multi-Market E-Commerce Brand",
    title: "A creative reset that unlocked profitable scale.",
    summary: "Used buyer-persona creative direction, performance-led testing, and closed-loop reporting to move past a plateau without guessing at the next campaign.",
    metric: "4.8x",
    metricLabel: "blended ROAS",
    accent: "orange",
    icon: LineChart,
    bars: [83, 91, 78],
    tags: ["Meta Ads", "Creative testing", "Attribution"],
  },
  {
    category: "CRM & Automation",
    client: "Regional Home Services",
    title: "Every missed call gets a next step.",
    summary: "Built the CRM architecture, routing logic, SMS response, team alerts, and calendar handoff needed to make response time part of the operating system.",
    metric: "<45s",
    metricLabel: "speed to qualified conversation",
    accent: "teal",
    icon: Layers3,
    bars: [96, 89, 93],
    tags: ["GHL architecture", "Twilio", "Calendar"],
  },
];

const categories: Category[] = ["All", "Paid Acquisition", "CRM & Automation", "Shopify & CRO", "Local Growth"];

const accentClass = {
  orange: "portfolio-accent-orange",
  teal: "portfolio-accent-teal",
  violet: "portfolio-accent-violet",
  blue: "portfolio-accent-blue",
};

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="portfolio-page min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="portfolio-backdrop" aria-hidden="true" />
      <header className="nav-shell">
        <div className="site-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-0 font-display text-xl font-extrabold"><span>Tech</span><span className="text-[#F5730C]">Paapi</span></Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-7" aria-label="Portfolio navigation">
            <Link to="/" className="nav-link">Home</Link>
            <a href="#work" className="nav-link">Work</a>
            <a href="#impact" className="nav-link">Impact</a>
            <Button asChild variant="hero" className="hidden sm:inline-flex"><a href="/#pricing">Start a project <ArrowRight /></a></Button>
          </nav>
        </div>
      </header>

      <section className="portfolio-hero relative z-10">
        <div className="site-container py-24 text-center sm:py-32 lg:py-40">
          <div className="eyebrow"><Sparkles /> TECH PAAPI PORTFOLIO</div>
          <h1 className="mx-auto mt-8 max-w-5xl font-display text-5xl font-extrabold tracking-[-0.07em] text-foreground sm:text-6xl lg:text-[6.5rem]">Real work.<br /><span className="text-gradient">Real results.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">We build the CRM, AI voice agents, funnels and growth systems that turn first enquiry into measurable revenue.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#work"><Button variant="hero" size="xl">Explore projects <ArrowRight /></Button></a>
            <Link to="/" hash="features" className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card/60 px-5 text-sm font-medium text-foreground transition hover:bg-accent">Our services <ChevronRight /></Link>
          </div>
        </div>
      </section>

      <section id="impact" className="portfolio-impact relative z-10 border-y border-border bg-surface/45">
        <div className="site-container grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[ ["10,000+", "dormant leads reactivated", Workflow], ["4.8x", "blended ROAS delivered", BarChart3], ["<45s", "speed to qualified conversation", MousePointer2], ["$68K", "cash recovered in 14 days", CheckCheck] ].map(([value, label, Icon]) => {
            const MetricIcon = Icon as typeof Workflow;
            return <div className="portfolio-impact__item" key={String(label)}><MetricIcon className="size-5 text-accent" /><strong>{value}</strong><span>{label}</span></div>;
          })}
        </div>
      </section>

      <section id="work" className="relative z-10 section-space site-container">
        <div className="section-heading">
          <div><span className="kicker">FEATURED WORK</span><h2>Built to make an impact.</h2></div>
          <p>Explore selected systems, campaigns, and growth projects built around the metrics that matter after the click.</p>
        </div>

        <div className="portfolio-filters mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio projects">
          {categories.map((category) => <button type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`portfolio-filter ${activeCategory === category ? "portfolio-filter-active" : ""}`} key={category}>{category}</button>)}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, delay: index * 0.04 }} className={`portfolio-project ${accentClass[project.accent]}`} key={project.title}>
                  <div className="portfolio-project__visual">
                    <div className="portfolio-project__visual-grid" />
                    <div className="portfolio-project__orb" />
                    <div className="portfolio-project__signal"><ProjectIcon className="size-7" /><span>LIVE SYSTEM</span></div>
                    <div className="portfolio-project__bars" aria-hidden="true">{project.bars.map((bar, barIndex) => <span key={barIndex} style={{ "--bar-height": `${bar}%` } as CSSProperties} />)}</div>
                    <div className="portfolio-project__visual-label"><span>{project.category}</span><span>Verified outcome</span></div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{project.client}</p><h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{project.title}</h3></div><BadgeCheck className="size-5 shrink-0 text-success" /></div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-5"><div><strong className="font-display text-3xl font-extrabold">{project.metric}</strong><p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{project.metricLabel}</p></div><div className="flex flex-wrap justify-end gap-1.5">{project.tags.map((tag) => <span className="portfolio-tag" key={tag}>{tag}</span>)}</div></div>
                    {project.href && <Link to={project.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-bright">Read full case study <ArrowRight className="size-4" /></Link>}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative z-10 section-space border-y border-border bg-surface/35">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="kicker">THE SYSTEM BEHIND THE RESULT</span><h2 className="section-title mt-4">Strategy is only useful when it ships.</h2><p className="section-copy mt-5">Every project combines architecture, creative direction, automation, and measurement inside the client&apos;s own operating systems.</p></div><div className="portfolio-principles grid gap-3 sm:grid-cols-2">{[["01", "Build inside owned accounts", "Your data, domains, audiences, and workflows stay with your team."], ["02", "Connect every handoff", "Ads, website, CRM, calendar, and revenue share one operating picture."], ["03", "Measure closed outcomes", "We optimize toward qualified conversations, booked calls, and cash collected."], ["04", "Leave the team stronger", "Documentation and training make the system usable after launch day."]].map(([number, title, text]) => <div className="portfolio-principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div>
      </section>

      <section className="site-container relative z-10 py-24 sm:py-32"><div className="portfolio-cta"><div className="portfolio-cta__grid" /><div className="relative z-10 max-w-2xl"><span className="kicker">YOUR STORY COULD BE NEXT</span><h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.06em] sm:text-6xl">Ready to build your success story?</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Tell us what you want to grow, fix, or automate. We&apos;ll point you toward the most useful next step.</p><Button asChild variant="hero" size="xl" className="mt-8"><a href="/#pricing">Start a conversation <ArrowRight /></a></Button></div></div></section>
    </main>
  );
}
