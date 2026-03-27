export default function Home() {
  const navItems = ["Home", "About", "Services", "Careers & Talents"];
  const serviceItems = [
    "Our Services",
    "Talent Acquisition",
    "Digital Marketing",
    "Website Development",
  ];
  const trustPillars = [
    {
      title: "Strategic Team Growth",
      description: "Build teams aligned with your goals, culture, and long-term vision.",
      iconLabel: "TG",
    },
    {
      title: "Stronger Brand Foundations",
      description: "Clarify your message and create a brand that builds trust across markets.",
      iconLabel: "BF",
    },
    {
      title: "Operational Clarity",
      description: "Simplified processes that give leaders more time to focus on impact.",
      iconLabel: "OC",
    },
    {
      title: "Cost-Smart Growth",
      description: "Invest wisely while protecting revenue and momentum.",
      iconLabel: "CS",
    },
    {
      title: "Long-Term Confidence",
      description: "Teams that stay. Brands that last. Growth that is sustainable.",
      iconLabel: "LC",
    },
    {
      title: "Global Perspective",
      description: "Supporting businesses across borders with insight and experience.",
      iconLabel: "GP",
    },
  ];

  return (
    <div className="site-shell" id="top">
      <header className="top-nav">
        <div className="top-nav-inner">
          <a href="#" className="brand-mark" aria-label="Romega Solutions home">
            <span className="brand-mark-icon" aria-hidden="true">
              RS
            </span>
            <span className="brand-mark-text">Romega Solutions</span>
          </a>

          <nav className="nav-menu">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`menu-link ${item === "Home" ? "menu-link-active" : ""}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-cta-wrap">
            <span className="nav-cta-arrow" aria-hidden="true">
              →
            </span>
            <a href="#" className="cta-chip">
              Work with us
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <h1 className="headline">
              <span className="hero-line hero-line-one">
                Built for <span className="growing-word">growing</span> businesses.
              </span>
            </h1>
            <p className="hero-line hero-subtitle">
              Designed for <span className="accent-slab">what&apos;s next.</span>
            </p>

            <p className="hero-copy">
              Partnering with businesses to grow teams, strengthen brands, and
              scale with confidence.
            </p>

            <a href="#" className="hero-action">
              Explore Our Services
            </a>
          </div>
        </section>

        <section className="service-strip">
          <div className="service-strip-track">
            {[...serviceItems, ...serviceItems].map((item, index) => (
              <span key={`${item}-${index}`} className="service-strip-item">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="growth-section">
          <div className="growth-grid" aria-hidden="true" />

          <div className="growth-inner">
            <div className="growth-copy-wrap">
              <h2 className="growth-title">
                Growth feels easier when you have the right partner.
              </h2>
              <div className="growth-brush" aria-hidden="true" />
            </div>

            <div className="growth-side">
              <div className="growth-photo" aria-hidden="true" />
              <p className="growth-text">
                We work alongside founders and leaders who want to scale
                without chaos. From talent and operations to brand support,
                Romega brings structure, perspective, and steady guidance so
                growth feels intentional, not overwhelming.
              </p>
            </div>
          </div>

          <div className="growth-banner">
            <div className="growth-banner-overlay" aria-hidden="true" />
            <div className="growth-banner-content">
              <h3 className="growth-banner-title">Let&apos;s Build What&apos;s Next</h3>
              <a href="#" className="growth-banner-action">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="trust-inner">
            <h2 className="trust-title">Why Businesses Trust Romega</h2>
            <p className="trust-kicker">
              Not just another service provider.
              <span className="trust-kicker-emphasis"> A long-term growth partner.</span>
            </p>
            <p className="trust-intro">
              Businesses choose Romega because we do not offer one-size-fits-all
              solutions. We take the time to understand your goals, your
              challenges, and where you are headed, then build the teams and
              brand foundations that support real, lasting growth.
            </p>

            <div className="trust-grid">
              {trustPillars.map((pillar) => (
                <article key={pillar.title} className="trust-card">
                  <div className="trust-icon-frame" aria-hidden="true">
                    <div className="trust-icon-core">{pillar.iconLabel}</div>
                  </div>
                  <h3 className="trust-card-title">{pillar.title}</h3>
                  <p className="trust-card-copy">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section">
          <div className="approach-grid" aria-hidden="true" />

          <div className="approach-inner">
            <div className="approach-left">
              <h2 className="approach-title">
                We don&apos;t
                <br />
                rush growth.
                <br />
                <span className="approach-emphasis">We build it</span>
                <br />
                <span className="approach-circled">right.</span>
              </h2>
            </div>

            <div className="approach-right">
              <h3 className="approach-heading">Our approach is simple:</h3>
              <p className="approach-copy">
                Understand your business, align people and brand, and support
                every step with clarity and care. We believe growth works best
                when teams and brands are built side by side, with intention.
              </p>
            </div>
          </div>
        </section>

        <section className="services-spotlight">
          <div className="services-spotlight-arrow" aria-hidden="true">
            <span className="services-spotlight-chevron" />
          </div>

          <div className="services-spotlight-inner">
            <p className="services-spotlight-intro">
              Whether you are building your team, refining your brand, or
              preparing for your next stage of growth, Romega Solutions brings
              the people, insight, and support to move your business forward
              with confidence.
            </p>

            <div className="services-spotlight-grid">
              <article className="services-spotlight-card services-card-talent">
                <h3 className="services-spotlight-title">Talent Solutions</h3>
              </article>

              <article className="services-spotlight-card services-card-brand">
                <h3 className="services-spotlight-title">Brand &amp; Growth Support</h3>
              </article>

              <article className="services-spotlight-card services-card-ops">
                <h3 className="services-spotlight-title">Strategic Operations</h3>
              </article>
            </div>

            <a href="#" className="services-spotlight-cta">
              See How We Can Help
            </a>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-backdrop" aria-hidden="true" />
          <div className="testimonial-overlay" aria-hidden="true" />

          <button className="testimonial-arrow testimonial-arrow-left" aria-label="Previous testimonial">
            &lt;
          </button>
          <button className="testimonial-arrow testimonial-arrow-right" aria-label="Next testimonial">
            &gt;
          </button>

          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              "Romega placed three VP-level executives in record time, helping
              us avoid months of lost revenue"
            </blockquote>
            <p className="testimonial-author">Martin Reyes, CEO</p>

            <div className="testimonial-dots" aria-hidden="true">
              <span className="testimonial-dot testimonial-dot-active" />
              <span className="testimonial-dot" />
              <span className="testimonial-dot" />
              <span className="testimonial-dot" />
              <span className="testimonial-dot" />
            </div>
          </div>
        </section>

        <section className="social-connect">
          <div className="social-connect-inner">
            <div className="social-connect-copy">
              <h2 className="social-connect-title">STAY CONNECTED.</h2>

              <p className="social-connect-text">
                Growth does not stop at hiring or branding. On LinkedIn, we
                share real-world insights on building high-performing teams,
                strengthening brands, and navigating growth in today&apos;s evolving
                business landscape.
              </p>

              <p className="social-connect-text social-connect-text-last">
                Follow Romega and be part of the conversation shaping what&apos;s
                next.
              </p>
            </div>

            <div className="social-connect-visual" aria-hidden="true">
              <div className="social-connect-arrow" />
              <div className="social-phone">
                <div className="social-phone-notch" />
                <div className="social-phone-screen" />
              </div>
              <div className="social-card social-card-one" />
              <div className="social-card social-card-two" />
              <div className="social-linkedin-badge">in</div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-brand">
              <div className="site-footer-logo-wrap">
                <span className="site-footer-logo-mark">RS</span>
                <div className="site-footer-logo-text">
                  <strong>ROMEGA SOLUTIONS</strong>
                  <span>HR AND MARKETING SERVICES</span>
                </div>
              </div>
              <p className="site-footer-tagline">
                We provide talent solutions, brand support, and strategic
                guidance designed for sustainable growth in a global landscape.
              </p>
            </div>

            <div className="site-footer-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Careers</a>
              <a href="#">Talents</a>
            </div>

            <div className="site-footer-connect">
              <h3>Connect With Us</h3>
              <div className="site-footer-socials" aria-hidden="true">
                <span className="site-footer-social">in</span>
                <span className="site-footer-social">f</span>
                <span className="site-footer-social">ig</span>
              </div>

              <p className="site-footer-contact">
                <span>@</span>
                <a href="mailto:info@romega-solutions.com">info@romega-solutions.com</a>
              </p>
              <p className="site-footer-contact">
                <span>o</span>
                <a href="mailto:info@romega-solutions.com">info@romega-solutions.com</a>
              </p>
            </div>

            <a href="#top" className="site-footer-backtop">
              <span className="site-footer-backtop-arrow">^</span>
              <span>back to top</span>
            </a>
          </div>

          <div className="site-footer-legal">
            <p>
              © 2026 Romega Solutions. All rights reserved.
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
