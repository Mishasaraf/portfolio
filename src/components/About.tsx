import { codingLanguages, languagesSpoken, sat, schools } from "../data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <div className="prose">
          <p>
            Misha is a computer science and linguistics enthusiast — two fields
            that, for her, ask the same question in different fonts: how do complex systems emerge
            from simple, rule-based structures?
          </p>
          <p>
            Whether she is solving algorithmic problems in national coding competitions or analysing
            unfamiliar languages, she is drawn to the patterns that involve
            both technology and human communication.
          </p>
          <p>
            The linguistics side is grounded in a multilingual life: fluent in English and Hindi,
            with working knowledge of German, Gujarati and Marathi and a beginner's grasp of Dutch,
            Marwari and Punjabi.
          </p>
          <p>
            Outside the classroom, she is the student who introduced Model United Nations to her
            School. From starting as a delegate and earning Best Delegate honours, to helping organise 
            the school's first intra-school conference and chairing it, she has worked towards 
            pioneering MUNs and encouraging public speaking in young kids. In 2025, taking this 
            initiative nationally, she founded and presided over her own debate and MUN society, the 
            Global Affairs and Debate Society.
          </p>
          <p>
                          She has also conducted a four-hour AI-in-education workshop for her school's
              teaching faculty, published a book on climate change for young readers, and logged
              150+ hours of community service.



          </p>
        </div>

        <aside className="record">
          <h3 className="label">Education</h3>
          {schools.map((s) => (
            <div className="school" key={s.name}>
              <p className="school-name">{s.name}</p>
              <p className="muted">
                {s.board}, {s.period}
              </p>
              <p>{s.detail}</p>
              <table className="rows">
                <tbody>
                  {s.grades.map((g) => (
                    <tr key={g.grade}>
                      <th>{g.grade}</th>
                      <td>{g.percentage}</td>
                      <td className="muted">{g.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <h3 className="label">SAT</h3>
          <p className="big-number">{sat.score}</p>
          <p className="muted">{sat.breakdown}</p>

          <h3 className="label">Programming</h3>
          <dl className="levels">
            <Level label="Expert" items={codingLanguages.filter((c) => c.level === "Expert")} />
            <Level label="Comfortable" items={codingLanguages.filter((c) => c.level === "Mid")} />
            <Level label="Learning" items={codingLanguages.filter((c) => c.level === "Beginner")} />
          </dl>

          <h3 className="label">Languages spoken</h3>
          <dl className="levels">
            <Level label="Fluent" items={languagesSpoken.filter((l) => l.level === "Fluent")} />
            <Level label="Working" items={languagesSpoken.filter((l) => l.level === "Working")} />
            <Level label="Beginner" items={languagesSpoken.filter((l) => l.level === "Beginner")} />
          </dl>
        </aside>
      </div>
    </Section>
  );
}

// One row: "Fluent   English, Hindi"
function Level({ label, items }: { label: string; items: { name: string }[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <dt>{label}</dt>
      <dd>{items.map((i) => i.name).join(", ")}</dd>
    </div>
  );
}
