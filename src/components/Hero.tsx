import { heroFacts, profile } from "../data/profile";

// The tagline is set as a linguist's "interlinear gloss":
// word split into parts / meaning of each part / plain-English translation.
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <h1 className="hero-name">{profile.name}</h1>

          <div className="gloss" role="img" aria-label="Coder, linguist, delegate.">
            <div className="gloss-words">
              <p>
                <i>code-r</i>
                <span>code-<b>agt</b></span>
                <p className="gloss-translation">
                  one who writes code
                </p>
              </p>
              <p>
                <i>lingu-ist</i>
                <span>tongue-<b>agt</b></span>
                <p className="gloss-translation">
                  one who studies tongues
                </p>
              </p>
              <p>
                <i>de-leg-ate</i>
                <span>away-send-<b>ptcp</b></span>
                <p className="gloss-translation">
                  one who is sent to speak for others
                </p>
              </p>
            </div>
          </div>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-buttons">
            <a href="#research" className="btn btn-primary">
              Read her research
            </a>
            <a href="#letters" className="btn btn-outline">
              Recommendation letters
            </a>
          </div>
        </div>

        <dl className="hero-facts">
          {heroFacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>
                <strong>{f.value}</strong>
                <span>{f.note}</span>
              </dd>
            </div>
          ))}
          <div>
            <dt>Now</dt>
            <dd>
              <span>
                {profile.grade} at {profile.school}, {profile.location}. Class of {profile.classOf}.
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
