import {
  achievementGroups,
  flagshipAwards,
  hobbies,
  linguistics,
  publication,
  volunteer,
  volunteerHoursTotal,
  workshops,
} from "../data/profile";
import DocLink from "./DocLink";
import { IconClip } from "./Icons";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      note={
        <>
          Click <IconClip className="icon" aria-label="the paper clip" /> to view a certificate.
        </>
      }
    >
      {/* Headline honours */}
      <div className="two-up tight">
        {linguistics.map((l) => (
          <div className="card honour" key={l.code}>
            <p className="label accent">{l.badge}</p>
            <h3 className="title-md">{l.name}</h3>
            <p className="muted">{l.scope} linguistics olympiad</p>
            <p>{l.description}</p>
            {l.certificate && <DocLink file={l.certificate} title={l.name} />}
          </div>
        ))}
        {flagshipAwards.map((a) => (
          <div className="card honour" key={a.title}>
            <h3 className="title-md">{a.title}</h3>
            <p>{a.detail}</p>
            {a.certificate && <DocLink file={a.certificate} title={a.title} />}
          </div>
        ))}
      </div>

      {/* Lists by category */}
      <div className="two-up wide-gap spaced">
        {achievementGroups.map((group) => (
          <div key={group.id}>
            <h3 className="label">{group.title}</h3>
            <ul className="list">
              {group.items.map((item, i) => (
                <li className="row" key={i}>
                  <span>{item.event}</span>
                  <span className={item.result === "Participation" ? "result" : "result win"}>
                    {item.result}
                    <small>{[item.level, item.grade && `Grade ${item.grade}`].filter(Boolean).join(", ")}</small>
                  </span>
                  {item.certificate && <DocLink file={item.certificate} title={item.event} />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Beyond the classroom */}
      <div className="two-up wide-gap spaced">
        <div>
          <h3 className="label">Workshops</h3>
          <ul className="list">
            {workshops.map((w) => (
              <li className="row" key={w.event}>
                <span>
                  <span className={w.type === "Conducted" ? "tag accent" : "tag"}>{w.type}</span>
                  {w.event}
                  <small>{w.note}</small>
                </span>
                {w.certificate && <DocLink file={w.certificate} title={w.event} />}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label">Community service</h3>
          <ul className="list">
            {volunteer.map((v) => (
              <li className="row" key={v.activity}>
                <span>{v.activity}</span>
                <span>{v.hoursPerWeek * v.weeks} h</span>
              </li>
            ))}
            <li className="row">
              <strong>Total</strong>
              <strong>{volunteerHoursTotal} h</strong>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="label">Publication</h3>
          <p className="title-md">{publication.name}</p>
          <p className="muted">{publication.type}</p>
          <p>{publication.blurb}</p>
          <a href={publication.link} target="_blank" rel="noopener noreferrer">
            See the book on BriBooks
          </a>
        </div>

        <div>
          <h3 className="label">Off the clock</h3>
          <p className="lede">{hobbies.join(", ")}.</p>
        </div>
      </div>
    </Section>
  );
}
