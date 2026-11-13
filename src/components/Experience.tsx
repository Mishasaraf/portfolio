import { internships } from "../data/profile";
import DocLink from "./DocLink";
import { IconClip } from "./Icons";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" note="Internships and roles">
      <ol className="list">
        {internships.map((job) => (
          <li className="job" key={job.id}>
            <p className="muted">{job.period}</p>
            <div>
              <h3 className="title-md">{job.org}</h3>
              <p className="accent">{job.role}</p>
              <p>{job.description}</p>
              {job.lor && (
                <DocLink
                  file={job.lor}
                  title={`Letter of recommendation, ${job.org}`}
                  subtitle={job.role}
                  className="lor-link"
                >
                  <IconClip className="icon" /> Here's what they had to say
                </DocLink>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
