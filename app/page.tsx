import { homeContent } from "../content/home";

function Story({ item }: { item: (typeof homeContent.items)[number] }) {
  return (
    <article className={`story story--${item.kind}`}>
      <p className="eyebrow">{item.eyebrow}</p>
      <h2>{item.title}</h2>
      <p className="story__body">{item.body}</p>
      {"href" in item && item.href ? (
        <a className="story__link" href={item.href}>
          {item.linkLabel}
        </a>
      ) : null}
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="masthead">
        <div className="masthead__topline">
          <p>Independent family company</p>
          <p>Missouri, USA</p>
        </div>
        <h1>{homeContent.masthead}</h1>
        <nav aria-label="Primary navigation">
          {homeContent.nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="editorial-grid" aria-label="Current work">
        {homeContent.items.map((item) => (
          <Story key={`${item.eyebrow}-${item.title}`} item={item} />
        ))}
      </section>

      <footer id="about" className="site-footer">
        <p>Optical Lift</p>
        <p>{homeContent.footer.location}</p>
        <a href={`mailto:${homeContent.footer.email}`}>{homeContent.footer.email}</a>
      </footer>
    </main>
  );
}
