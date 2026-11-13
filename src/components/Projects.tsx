import { profile, projects } from "../data/profile";
import { IconExternal, IconGithub } from "./Icons";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      note={
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          All code on GitHub
        </a>
      }
    >
      <div className="two-up">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <h3 className="title-lg">{p.title}</h3>
            <p>{p.description}</p>
            {p.context && <p className="muted italic">{p.context}</p>}
            <ul className="tags">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="buttons">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  <IconGithub className="icon" /> Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  <IconExternal className="icon" /> Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
