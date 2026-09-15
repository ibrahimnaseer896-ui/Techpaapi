import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, CheckCheck, CircleDollarSign, FlaskConical, Gauge, LineChart, Megaphone, Target, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/case-studies/meta-lead-gen")({
  component: MetaLeadGenCaseStudy,
});

const strategySteps = [
  { number: "01", title: "Isolate the avatar", text: "Held the best-performing script constant and tested presenters independently, surfacing the winning audience fit without creative noise.", icon: Target },
  { number: "02", title: "Expand scripts and angles", text: "Used the proven script as a template for news hooks, supporting stats, urgency, objection flips, and low-friction calls to action.", icon: Megaphone },
  { number: "03", title: "Optimize the conversion surface", text: "Tested Meta lead-form architectures including background image, hero image, review carousel, bullets, and paragraph layouts.", icon: FlaskConical },
  { number: "04", title: "Compound the winners", text: "Combined the validated avatar, script, angle, and form into one configuration instead of reintroducing guesswork.", icon: CheckCheck },
  { number: "05", title: "Close the loop with backend data", text: "Connected Zoho CRM events to Meta so qualified leads, scheduled calls, and signed contracts could guide budget decisions.", icon: Workflow },
];

const monthlyData = [
  { month: "Feb", spend: "$25K", cpl: "$9.24", leads: "2,733", height: 36 },
  { month: "Mar", spend: "$64K", cpl: "$11.94", leads: "5,384", height: 58 },
  { month: "Apr", spend: "$95K", cpl: "$12.61", leads: "7,517", height: 78 },
  { month: "May", spend: "$101K", cpl: "$10.46", leads: "9,697", height: 100 },
];

function MetaLeadGenCaseStudy() {
  return (
    <main className="case-study-page min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="case-study-backdrop" aria-hidden="true" />
      <header className="nav-shell">
        <div className="site-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-0 font-display text-xl font-extrabold"><span>Tech</span><span className="text-[#F5730C]">Paapi</span></Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-7" aria-label="Case study navigation">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/" className="nav-link">Home</Link>
            <Button asChild variant="hero" className="hidden sm:inline-flex"><a href="/#pricing">Start a project <ArrowRight /></a></Button>
          </nav>
        </div>
      </header>

      <section className="relative z-10 case-study-hero">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"><ArrowLeft className="size-4" /> Back to portfolio</Link>
          <div className="mt-12 max-w-5xl"><span className="eyebrow"><Megaphone /> CASE STUDY · META LEAD GEN</span><h1 className="mt-8 font-display text-5xl font-extrabold tracking-[-0.07em] sm:text-6xl lg:text-[6.25rem]">How we cut cost per lead <span className="text-gradient">37%</span> while nearly doubling monthly lead volume.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">In February 2026, TechPaapi took over Meta advertising for a VA disability claims consulting firm with strong demand but no reliable signal. Four months later, efficiency and scale were moving in the same direction.</p></div>
          <div className="mt-10 flex flex-wrap gap-3"><Button asChild variant="hero" size="xl"><a href="/#pricing">Build a system like this <ArrowRight /></a></Button><a href="#strategy" className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card/60 px-5 text-sm font-medium transition hover:bg-accent">See the strategy</a></div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-surface/45">
        <div className="site-container grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[["-37%", "cost per lead", "$17.83 to $11.23 blended"], ["+89%", "monthly lead volume", "~3,410 to ~6,460 leads"], ["27,371", "veteran leads", "Generated since takeover"]].map(([value, label, detail]) => <div className="case-study-stat" key={label}><strong>{value}</strong><span>{label}</span><small>{detail}</small></div>)}
        </div>
      </section>

      <section className="relative z-10 section-space site-container">
        <div className="case-study-split"><div><span className="kicker">THE CHALLENGE</span><h2 className="section-title mt-4">A fragmented account with no signal.</h2><p className="mt-6 text-base leading-7 text-muted-foreground">The client helps veterans file and maximize the disability ratings they have earned. The offer was differentiated and the demand was real, but the advertising account could not reveal what was actually working.</p></div><div className="case-study-panel"><div className="case-study-panel__label"><Gauge className="size-4 text-primary" /> Baseline CPL</div><div className="mt-4 flex items-end gap-3"><strong>$17.83</strong><span>prior structure</span></div><div className="case-study-cpl"><span style={{ width: "92%" }} /><span style={{ width: "58%" }} /><span style={{ width: "48%" }} /></div><div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground"><span>$17.83<br />Baseline</span><span>$11.23<br />Takeover</span><span>$10.46<br />May 2026</span></div></div></div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Fragmented structure", "Six-plus overlapping lead-form campaigns competed for the same veterans."], ["No creative testing system", "Legacy static and video assets ran indefinitely without a controlled read."], ["Untested conversion surface", "The Meta form itself had never been treated as a conversion lever."], ["No variable isolation", "Creative, audience, and form changes happened at the same time."]].map(([title, text], index) => <article className="case-study-problem" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="strategy" className="relative z-10 section-space border-y border-border bg-surface/35">
        <div className="site-container"><div className="section-heading"><div><span className="kicker">THE STRATEGY</span><h2>Isolate one variable, then compound the winners.</h2></div><p>We collapsed the fragmented structure into a controlled testing rig with one rule: never test more than one variable at a time.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-5">{strategySteps.map((step, index) => { const Icon = step.icon; return <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08 }} className="case-study-strategy" key={step.number}><div className="case-study-strategy__node"><span>{step.number}</span><Icon className="size-5" /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div></div>
      </section>

      <section className="relative z-10 section-space site-container">
        <div className="section-heading"><div><span className="kicker">THE BREAKTHROUGH</span><h2>The compounding effect.</h2></div><p>Spend scaled roughly fourfold from February to May while cost per lead held in a tight band and fell to its lowest point at scale.</p></div>
        <div className="case-study-chart mt-14"><div className="case-study-chart__head"><span><LineChart className="size-4" /> Spend vs CPL</span><span>February–May 2026</span></div><div className="case-study-chart__area"><div className="case-study-chart__grid" />{monthlyData.map((item, index) => <div className="case-study-chart__column" key={item.month}><motion.div initial={{ height: 0 }} whileInView={{ height: `${item.height}%` }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .12 }} className="case-study-chart__bar" /><span>{item.month}</span><small>{item.spend}</small></div>)}</div><div className="case-study-chart__legend"><span><i className="case-study-dot case-study-dot--orange" /> Spend scaled to $101,350</span><span><i className="case-study-dot case-study-dot--teal" /> May CPL: $10.46</span><span><i className="case-study-dot case-study-dot--violet" /> May leads: 9,697</span></div></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">{[["$101,350", "May spend"], ["$10.46", "May CPL"], ["9,697", "May leads"]].map(([value, label]) => <div className="case-study-proof" key={label}><CircleDollarSign className="size-4 text-accent" /><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="relative z-10 section-space border-y border-border bg-surface/35">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="kicker">WHY IT WORKED</span><h2 className="section-title mt-4">A testing engine, not a lucky creative.</h2><p className="section-copy mt-5">The result came from a repeatable operating system: isolate, validate, compound, and feed the real downstream signal back into the platform.</p></div><div className="grid gap-3 sm:grid-cols-2">{[["One variable at a time", "Every test produced a clean, attributable read."], ["The form is a lever", "The lead form was treated as a dedicated CRO surface."], ["Consolidation over fragmentation", "One structure gave Meta a clean signal and the team budget control."], ["The system is repeatable", "The same testing engine can be rebuilt on another lead-gen account."]].map(([title, text], index) => <div className="case-study-proof-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div>
      </section>

      <section className="site-container relative z-10 py-24 sm:py-32"><div className="portfolio-cta"><div className="portfolio-cta__grid" /><div className="relative z-10 max-w-2xl"><span className="kicker">READY TO BUILD RESULTS LIKE THESE?</span><h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.06em] sm:text-6xl">Turn scattered demand into a system that compounds.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Tell us what you want to grow, fix, or automate. We&apos;ll point you toward the most useful next step.</p><Button asChild variant="hero" size="xl" className="mt-8"><a href="/#pricing">Start a conversation <ArrowRight /></a></Button></div></div></section>
    </main>
  );
}
