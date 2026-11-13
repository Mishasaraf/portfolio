import { research } from "../data/profile";
import DocLink from "./DocLink";
import Section from "./Section";

export default function Research() {
  return (
    <Section id="research" title="Research" note={`${research.length} independent papers`}>
      <div className="two-up">
        {research.map((paper) => (
          <article className="card paper" key={paper.id}>
            <p className="label accent">{paper.field}</p>
            <h3 className="title-lg">{paper.title}</h3>
            {(paper.status || paper.venue || paper.year) && (
              <p className="muted">
                {[paper.status, paper.venue, paper.year].filter(Boolean).join(", ")}
              </p>
            )}
            <p>{paper.summary}</p>
            {paper.abstract && (
              <details>
                <summary>Abstract</summary>
                <p>{paper.abstract}</p>
              </details>
            )}
            {paper.keywords && <p className="muted italic">{paper.keywords.join(", ")}</p>}
            

            <div className="buttons">
              {paper.pdf && (
                <DocLink file={paper.pdf} title={paper.title} className="btn btn-primary">
                  Read the paper
                </DocLink>
              )}
              {paper.url && (
                <a className="btn btn-outline" href={paper.url} target="_blank" rel="noopener noreferrer">
                  View publication
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
