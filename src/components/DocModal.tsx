import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { IconClose, IconExternal } from "./Icons";

interface Props {
  title: string;
  subtitle?: string;
  file?: string; // image or PDF in public/
  onClose: () => void;
  children?: ReactNode; // custom content instead of the file (e.g. a letter's text)
}

// A pop-up that shows an image, a PDF, or custom content.
// The native <dialog> handles Escape, focus and the dimmed backdrop for us.
export default function DocModal({ title, subtitle, file, onClose, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current?.open) ref.current?.showModal();
  }, []);

  const close = () => ref.current?.close();
  const isPdf = file?.toLowerCase().endsWith(".pdf");

  return (
    <dialog
      ref={ref}
      className="modal"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()} // click outside to close
    >
      <header className="modal-head">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {file && (
          <a className="btn btn-quiet" href={file} target="_blank" rel="noopener noreferrer">
            <IconExternal className="icon" /> Open in new tab
          </a>
        )}
        <button className="btn-icon" onClick={close} aria-label="Close">
          <IconClose className="icon" />
        </button>
      </header>

      <div className="modal-body">
        {children ??
          (isPdf ? <iframe src={file} title={title} /> : <img src={file} alt={title} />)}
      </div>
    </dialog>
  );
}
