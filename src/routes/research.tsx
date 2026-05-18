import { createFileRoute, Link } from "@tanstack/react-router";
import bgMountains from "@/assets/bg-mountains.jpeg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Imvelo Tech Group" },
      {
        name: "description",
        content:
          "Research papers and field studies from Imvelo Tech Group on agri-tech, climate intelligence and African supply chains.",
      },
    ],
  }),
  component: ResearchPage,
});

// Edit this list to publish a new paper.
const papers = [
  {
    title: "Smallholder Coffee Yields Under Shifting Rainfall Patterns",
    authors: "Imvelo Research Team",
    year: 2025,
    summary:
      "A two-season study across cooperatives in Kenya and Burkina Faso analysing rainfall variability and yield outcomes.",
    url: "#",
  },
  {
    title: "Mobile-First Traceability for Cooperative Supply Chains",
    authors: "Imvelo Research Team",
    year: 2024,
    summary:
      "How lightweight mobile tooling enables verifiable origin tracking from farm gate to export.",
    url: "#",
  },
];

function ResearchPage() {
  return (
    <div className="imvelo-root">
      <style>{css}</style>
      <div className="bg" style={{ backgroundImage: `url(${bgMountains})` }} />
      <div className="bg-overlay" />

      <header className="nav glass">
        <Link to="/" className="logo">
          <span className="logo-mark">IT</span>
          <span className="logo-text">Imvelo Tech Group</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
        </nav>
        <a href="mailto:imvelobusiness@gmail.com" className="cta-mini">Get in touch</a>
      </header>

      <main>
        <section className="hero">
          <div className="glass hero-card">
            <span className="eyebrow">Research · Field studies · Whitepapers</span>
            <h1>Research from the field.</h1>
            <p>
              Peer-reviewed and field-tested research on African agriculture,
              climate resilience and rural technology.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="papers">
            {papers.map((p) => (
              <article key={p.title} className="glass paper">
                <div className="paper-year">{p.year}</div>
                <h2>{p.title}</h2>
                <p className="paper-meta">{p.authors}</p>
                <p>{p.summary}</p>
                <a href={p.url} className="btn btn-primary">Read paper →</a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="glass foot">
        <span>© {new Date().getFullYear()} Imvelo Tech Group</span>
        <span>Made with care across Africa 🌍</span>
      </footer>
    </div>
  );
}

const css = `
.imvelo-root { min-height:100vh; color:#f3f6f2; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Inter",system-ui,sans-serif; position:relative; overflow-x:hidden; }
.bg { position:fixed; inset:0; z-index:-2; background-size:cover; background-position:center; background-attachment:fixed; }
.bg-overlay { position:fixed; inset:0; z-index:-1; background: radial-gradient(1200px 600px at 20% 10%, rgba(40,80,55,0.35), transparent 60%), linear-gradient(180deg, rgba(10,20,15,0.45), rgba(10,20,15,0.7)); }
.glass { background:rgba(255,255,255,0.08); backdrop-filter:blur(18px) saturate(140%); -webkit-backdrop-filter:blur(18px) saturate(140%); border:1px solid rgba(255,255,255,0.18); border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.25); }
.nav { display:flex; align-items:center; justify-content:space-between; gap:24px; margin:20px clamp(16px,4vw,48px); padding:14px 20px; position:sticky; top:20px; z-index:10; }
.logo { display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; font-weight:600; }
.logo-mark { width:36px; height:36px; border-radius:10px; display:grid; place-items:center; background:linear-gradient(135deg,#4ade80,#0d7a5f); color:#06160f; font-weight:800; }
.nav nav { display:flex; gap:22px; }
.nav nav a { color:rgba(255,255,255,0.85); text-decoration:none; font-size:14px; }
.cta-mini { text-decoration:none; color:#06160f; background:#c9e4ce; padding:8px 14px; border-radius:999px; font-size:13px; font-weight:600; }
main { padding:0 clamp(16px,4vw,48px) 60px; }
.section { margin:60px auto; max-width:1100px; }
.hero { max-width:1100px; margin:60px auto; }
.hero-card { padding:clamp(28px,5vw,56px); max-width:760px; }
.eyebrow { display:inline-block; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:#bde2c6; margin-bottom:18px; }
.hero h1 { font-size:clamp(36px,5.5vw,64px); line-height:1.05; margin:0 0 18px; letter-spacing:-0.03em; font-weight:600; }
.hero p { color:rgba(255,255,255,0.85); max-width:600px; }
.papers { display:grid; grid-template-columns:1fr 1fr; gap:22px; }
@media (max-width: 820px) { .papers { grid-template-columns:1fr; } }
.paper { padding:28px; display:flex; flex-direction:column; gap:10px; }
.paper-year { font-size:12px; letter-spacing:0.18em; color:#9ee7b0; text-transform:uppercase; }
.paper h2 { margin:0; font-size:22px; letter-spacing:-0.01em; }
.paper-meta { color:rgba(255,255,255,0.65); font-size:13px; margin:0; }
.paper p { color:rgba(255,255,255,0.85); line-height:1.55; margin:0; }
.btn { padding:10px 18px; border-radius:999px; text-decoration:none; font-weight:600; font-size:13px; display:inline-block; align-self:flex-start; margin-top:6px; }
.btn-primary { background:#9ee7b0; color:#06160f; }
.foot { margin:0 clamp(16px,4vw,48px) 24px; padding:16px 22px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; font-size:13px; color:rgba(255,255,255,0.75); }
`;
