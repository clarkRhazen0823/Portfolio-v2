import { useEffect, useRef } from 'react';
import { LuX, LuCircleAlert } from 'react-icons/lu';

export const UnavailableDialog = ({ isOpen, onClose, projectTitle, type }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto w-full max-w-md rounded-2xl border border-border/50 bg-card/95 p-0 text-foreground shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-primary">
            <LuCircleAlert className="w-5 h-5" />
            <h3 className="text-lg font-semibold text-foreground">
              Link Unavailable
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
            aria-label="Close dialog"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The <span className="text-foreground font-medium">{type}</span> for{' '}
          <span className="text-foreground font-medium">{projectTitle}</span> is
          currently private or unavailable to the public.
        </p>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
        </div>
      </div>
    </dialog>
  );
};
