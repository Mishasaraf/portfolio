import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  note?: ReactNode; // short line under the title
  children: ReactNode;
}

// Every section: title in the left margin, content on the right.
export default function Section({ id, title, note, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container section-grid">
        <header className="rail">
          <h2>{title}</h2>
          {note && <p>{note}</p>}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}
