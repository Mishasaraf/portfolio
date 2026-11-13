import { munEntries, munFounding } from "../data/profile";
import type { MunRole } from "../types";
import DocLink from "./DocLink";
import Section from "./Section";

const GROUPS: { title: string; roles: MunRole[] }[] = [
  { title: "On the dais", roles: ["Chair", "Co-Chair", "Vice Chair", "Rapporteur"] },
  { title: "As a delegate", roles: ["Delegate"] },
  { title: "In the secretariat", roles: ["Co-Head, Marketing"] },
];

export default function ModelUN() {
  return (
    <Section id="mun" title="Model UN" note={`${munEntries.length} conferences`}>
      <p className="lede">{munFounding}</p>

      {GROUPS.map((group) => {
        const entries = munEntries.filter((e) => group.roles.includes(e.role));
        return (
          <div className="stamp-group" key={group.title}>
            <h3 className="label">{group.title}</h3>
            <div className="stamps">
              {entries.map((e, i) => (
                <div className="stamp" key={i}>
                  <span className="stamp-name">{e.conference}</span>
                  <span className="stamp-role">{e.role}</span>
                  {e.award && <span className="italic">{e.award}</span>}
                  <span className="stamp-when">
                    {[e.year, e.grade && `Grade ${e.grade}`].filter(Boolean).join(", ")}
                  </span>
                  {e.certificate && (
                    <DocLink file={e.certificate} title={`${e.conference} ${e.year ?? ""}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
