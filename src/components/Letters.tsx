import { useState } from "react";
import { recommendations } from "../data/profile";
import type { RecommendationLetter } from "../types";
import DocModal from "./DocModal";
import { IconDownload } from "./Icons";
import Section from "./Section";

export default function Letters() {
  const [reading, setReading] = useState<RecommendationLetter | null>(null);

  return (
    <Section id="letters" title="Letters" note="Letters of recommendation">
      <div className="two-up">
        {recommendations.map((letter) => (
          <article className="letter" key={letter.id}>
            <blockquote>“{letter.excerpt}”</blockquote>
            <p className="muted">
              {letter.role}, {letter.school}
            </p>
            <div className="buttons">
              <button className="btn btn-primary" onClick={() => setReading(letter)}>
                Read the full letter
              </button>
              {letter.pdf && (
                <a className="btn btn-quiet" href={letter.pdf} download>
                  <IconDownload className="icon" /> Signed PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {reading && (
        <DocModal
          title={`Letter from the ${reading.role}`}
          subtitle={reading.school}
          file={reading.pdf}
          onClose={() => setReading(null)}
        >
          <article className="letter-text">
            {reading.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </DocModal>
      )}
    </Section>
  );
}
