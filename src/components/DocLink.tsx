import { useState } from "react";
import type { ReactNode } from "react";
import DocModal from "./DocModal";
import { IconClip } from "./Icons";

interface Props {
  file: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode; // button content; defaults to a paper-clip icon
}

// A button that opens a document in the pop-up.
export default function DocLink({ file, title, subtitle, className = "clip", children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-label={children ? undefined : `View certificate: ${title}`}
        title={children ? undefined : "View certificate"}
      >
        {children ?? <IconClip className="icon" />}
      </button>
      {open && <DocModal title={title} subtitle={subtitle} file={file} onClose={() => setOpen(false)} />}
    </>
  );
}
