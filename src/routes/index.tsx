import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import bgMountains from "@/assets/bg-mountains.jpeg";
import farmersGreen from "@/assets/farmers-green.jpeg";
import coffeeSorting from "@/assets/coffee-sorting.jpeg";
import coffeeHarvest from "@/assets/coffee-harvest.jpeg";
import farmerBasket from "@/assets/farmer-basket.jpeg";
import communityRwanda from "@/assets/community-rwanda.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imvelo Tech Group — Nature-Driven Technology for Africa" },
      {
        name: "description",
        content:
          "Imvelo Tech Group builds nature-driven technology empowering African farmers, communities and sustainable agriculture.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:imvelobusiness@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="imvelo-root">
      <style>{css}</style>

      <div className="bg" style={{ backgroundImage: `url(${bgMountains})` }} />
      <div className="bg-overlay" />

      <header className="nav glass">
        <a href="#" className="logo">
          <span className="logo-mark">IT</span>
          <span className="logo-text">Imvelo Tech Group</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Products</a>
          <a href="#impact">Impact</a>
          <Link to="/research">Research</Link>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="cta-mini">Get in touch</a>
      </header>

      <main>
        <section className="hero">
          <div className="glass hero-card">
            <span className="eyebrow">Rooted in nature · Built with code</span>
            <h1>
              Technology that grows <em>with</em> the land.
            </h1>
            <p>
              Imvelo Tech Group designs digital tools, data platforms and
              sustainable solutions that empower African farmers, cooperatives
              and communities — from the highlands to the harvest.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore our products</a>
              <a href="#about" className="btn btn-ghost">Who we are →</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="glass panel about">
            <div className="panel-text">
              <h2>About Imvelo</h2>
              <p>
                <strong>Imvelo</strong> means <em>nature</em>. We are a
                pan-African technology group bridging traditional farming
                wisdom with modern software — building tools that make
                agriculture more resilient, transparent and rewarding for the
                people doing the work.
              </p>
              <ul className="ticks">
                <li>Farmer-first product design</li>
                <li>Climate-aware data systems</li>
                <li>Fair, traceable supply chains</li>
              </ul>
            </div>
            <div className="panel-media">
              <img src={communityRwanda} alt="African farming community" />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <h2 className="section-title">Our products</h2>
          <div className="grid">
            <article className="glass card">
              <img src={farmersGreen} alt="Farmers using the Imvelo App" />
              <h3>Imvelo App</h3>
              <p>
                Mobile-first companion for farmers and cooperatives — track
                yields, manage payments and stay connected to buyers.
              </p>
            </article>
            <article className="glass card">
              <img src={coffeeSorting} alt="Imvelo Marketplace produce" />
              <h3>Imvelo Marketplace</h3>
              <p>
                A trusted marketplace connecting African producers directly to
                buyers with transparent pricing and verified origin.
              </p>
            </article>
            <article className="glass card">
              <img src={coffeeHarvest} alt="Es-Press coffee platform" />
              <h3>Es-Press</h3>
              <p>
                Our specialty-coffee platform — from cherry to cup, with
                traceability, quality data and fair-trade insights for every
                batch.
              </p>
            </article>
          </div>
        </section>

        <section id="impact" className="section">
          <div className="glass panel reverse">
            <div className="panel-media">
              <img src={farmerBasket} alt="Farmer with harvest basket" />
            </div>
            <div className="panel-text">
              <h2>Impact, measured in seasons.</h2>
              <p>
                Every product we ship is co-designed with the farmers who use
                it. We measure success in resilient harvests, healthier soil
                and stronger rural economies — not just downloads.
              </p>
              <div className="stats">
                <div><span>100+</span><small>Farmers onboarded</small></div>
                <div><span>3</span><small>Products live</small></div>
                <div><span>4</span><small>Countries served</small></div>
              </div>
              <p className="countries">
                Kenya · Burkina Faso · South Africa · Nigeria
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="glass contact">
            <div className="contact-intro">
              <h2>Let's build something rooted.</h2>
              <p>
                Partner with us on agri-tech, marketplaces or supply chain
                transparency.
              </p>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:imvelobusiness@gmail.com">imvelobusiness@gmail.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+25076790261">+250 76 790 261</a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                <span>Your name</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project…"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                {sent ? "Thank you — opening your mail app" : "Send message"}
              </button>
            </form>
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
.logo-mark { width:36px; height:36px; border-radius:10px; display:grid; place-items:center; background:linear-gradient(135deg,#4ade80,#0d7a5f); color:#06160f; font-weight:800; letter-spacing:0.5px; }
.nav nav { display:flex; gap:22px; }
.nav nav a { color:rgba(255,255,255,0.85); text-decoration:none; font-size:14px; }
.nav nav a:hover { color:#fff; }
.cta-mini { text-decoration:none; color:#06160f; background:#c9e4ce; padding:8px 14px; border-radius:999px; font-size:13px; font-weight:600; }
@media (max-width: 720px) { .nav nav { display:none; } }

main { padding:0 clamp(16px,4vw,48px) 60px; }
.section { margin:80px auto; max-width:1200px; }
.section-title { font-size:clamp(28px,4vw,44px); margin-bottom:28px; letter-spacing:-0.02em; }

.hero { max-width:1200px; margin:60px auto; }
.hero-card { padding:clamp(28px,5vw,64px); max-width:760px; }
.eyebrow { display:inline-block; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:#bde2c6; margin-bottom:18px; }
.hero h1 { font-size:clamp(40px,6.5vw,80px); line-height:1.02; letter-spacing:-0.03em; margin:0 0 20px; font-weight:600; }
.hero h1 em { font-style:italic; color:#9ee7b0; font-weight:500; }
.hero p { font-size:clamp(15px,1.4vw,18px); color:rgba(255,255,255,0.85); max-width:600px; }
.hero-actions { margin-top:28px; display:flex; gap:12px; flex-wrap:wrap; }

.btn { padding:12px 22px; border-radius:999px; text-decoration:none; font-weight:600; font-size:14px; transition:transform .2s; display:inline-block; border:none; cursor:pointer; }
.btn:hover { transform:translateY(-1px); }
.btn-primary { background:#9ee7b0; color:#06160f; }
.btn-ghost { color:#fff; border:1px solid rgba(255,255,255,0.3); background:transparent; }

.panel { display:grid; grid-template-columns:1.1fr 0.9fr; gap:32px; padding:clamp(24px,3vw,40px); align-items:center; }
.panel.reverse { grid-template-columns:0.9fr 1.1fr; }
.panel h2 { font-size:clamp(28px,3.4vw,40px); margin:0 0 14px; letter-spacing:-0.02em; }
.panel p { color:rgba(255,255,255,0.85); line-height:1.6; }
.panel-media img { width:100%; height:100%; max-height:360px; object-fit:cover; border-radius:14px; }
@media (max-width: 820px) { .panel, .panel.reverse { grid-template-columns:1fr; } }

.ticks { list-style:none; padding:0; margin:18px 0 0; }
.ticks li { padding:8px 0 8px 26px; position:relative; color:rgba(255,255,255,0.9); }
.ticks li::before { content:""; position:absolute; left:0; top:14px; width:14px; height:8px; border-left:2px solid #9ee7b0; border-bottom:2px solid #9ee7b0; transform:rotate(-45deg); }

.grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
@media (max-width: 880px) { .grid { grid-template-columns:1fr; } }
.card { padding:18px; display:flex; flex-direction:column; gap:14px; transition:transform .3s; }
.card:hover { transform:translateY(-4px); }
.card img { width:100%; height:200px; object-fit:cover; border-radius:14px; }
.card h3 { margin:0; font-size:20px; }
.card p { margin:0; color:rgba(255,255,255,0.8); font-size:14.5px; line-height:1.55; }

.stats { display:flex; gap:30px; margin-top:24px; flex-wrap:wrap; }
.stats div { display:flex; flex-direction:column; }
.stats span { font-size:32px; font-weight:700; color:#9ee7b0; }
.stats small { color:rgba(255,255,255,0.7); font-size:12px; letter-spacing:0.08em; text-transform:uppercase; }
.countries { margin-top:18px; color:rgba(255,255,255,0.75); font-size:14px; letter-spacing:0.04em; }

.contact { padding:clamp(28px,4vw,48px); display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:start; }
@media (max-width: 820px) { .contact { grid-template-columns:1fr; } }
.contact h2 { font-size:clamp(28px,4vw,40px); margin:0 0 12px; letter-spacing:-0.02em; }
.contact-intro p { color:rgba(255,255,255,0.85); margin:0 0 20px; }
.contact-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
.contact-list li { display:flex; flex-direction:column; gap:2px; }
.contact-list span { font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#bde2c6; }
.contact-list a { color:#fff; text-decoration:none; font-size:16px; }
.contact-list a:hover { color:#9ee7b0; }

.contact-form { display:flex; flex-direction:column; gap:14px; }
.contact-form label { display:flex; flex-direction:column; gap:6px; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#bde2c6; }
.contact-form input, .contact-form textarea {
  background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:12px;
  padding:12px 14px; color:#fff; font-size:14px; font-family:inherit; letter-spacing:normal; text-transform:none;
  outline:none; transition:border-color .2s, background .2s;
}
.contact-form input:focus, .contact-form textarea:focus { border-color:#9ee7b0; background:rgba(255,255,255,0.12); }
.contact-form textarea { resize:vertical; min-height:100px; }
.contact-form button { margin-top:6px; align-self:flex-start; }

.foot { margin:0 clamp(16px,4vw,48px) 24px; padding:16px 22px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; font-size:13px; color:rgba(255,255,255,0.75); }
`;
