import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile.js';

const fields = [
  {
    label: 'NAME',
    name: 'name',
    type: 'text',
    placeholder: 'Your name',
  },
  {
    label: 'EMAIL',
    name: 'email',
    type: 'email',
    placeholder: 'your@email.com',
  },
  {
    label: 'SUBJECT',
    name: 'subject',
    type: 'text',
    placeholder: 'Project inquiry',
  },
];

const backdropClass =
  'fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-[rgba(17,17,15,0.72)] p-4 backdrop:bg-transparent';

const modalClass =
  'relative w-[min(520px,calc(100vw-32px))] bg-[var(--paper)] p-6 text-[var(--ink)] shadow-none max-[680px]:w-[calc(100vw-24px)] max-[680px]:max-h-[92vh] max-[680px]:overflow-y-auto max-[680px]:p-5';

const labelClass =
  "mb-1 block font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.68rem] font-[560] uppercase leading-none tracking-[0.055em] text-[var(--muted)]";

const fieldClass =
  "h-[42px] w-full border border-[rgba(17,17,15,0.2)] bg-[var(--paper)] px-3.5 py-2 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.95rem] font-[410] leading-[1.2] text-[var(--ink)] outline-none transition-colors duration-300 ease-out placeholder:text-[rgba(17,17,15,0.36)] focus:border-[var(--ink)] focus-visible:border-[var(--ink)]";

const submitClass =
  "group inline-flex h-[44px] w-full items-center justify-center gap-3 bg-[var(--ink)] px-5 py-2.5 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.78rem] font-[560] uppercase tracking-[0.025em] text-[var(--paper)] transition-colors duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]";

const statusText = {
  success: {
    title: 'MESSAGE SENT',
    message: "Thanks — I'll get back to you as soon as I can.",
  },
  error: {
    title: 'SOMETHING WENT WRONG',
    message: `Please try again or email me directly at ${profile.email}`,
  },
};

export function ContactModal({ isOpen, onClose, onSuccessComplete }) {
  const [status, setStatus] = useState('idle');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const nameRef = useRef(null);
  const successTimerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => nameRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  useEffect(() => {
    if (status !== 'success') {
      return undefined;
    }

    successTimerRef.current = window.setTimeout(() => {
      onSuccessComplete();
    }, 1200);

    return () => {
      window.clearTimeout(successTimerRef.current);
    };
  }, [onSuccessComplete, status]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <div
      className={backdropClass}
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        aria-labelledby="contact-modal-title"
        aria-modal="true"
        className={modalClass}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <h3
              className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(2.55rem,3.7vw,3.3rem)] font-[780] uppercase leading-[0.9] tracking-[-0.055em]"
              id="contact-modal-title"
            >
              LET&apos;S TALK
            </h3>
            <p className="mt-1.5 m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-sm font-[410] leading-[1.3] tracking-[-0.01em] text-[var(--muted)]">
              Tell me about your project, idea, or opportunity.
            </p>
          </div>

          <button
            aria-label="Close contact form"
            className="grid h-9 w-9 shrink-0 place-items-center border border-[rgba(17,17,15,0.2)] bg-transparent font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[1.45rem] leading-none text-[var(--ink)] transition-colors duration-300 ease-out hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
            onClick={onClose}
            type="button"
          >
            {'\u00d7'}
          </button>
        </div>

        <form className="grid gap-3" onSubmit={handleSubmit}>
          <label className="hidden" aria-hidden="true">
            Website
            <input
              autoComplete="off"
              name="website"
              onChange={handleChange}
              tabIndex={-1}
              type="text"
              value={formValues.website}
            />
          </label>

          <div className="grid gap-3 min-[681px]:grid-cols-2">
            {fields.slice(0, 2).map((field) => (
              <label key={field.name}>
                <span className={labelClass}>{field.label}</span>
                <input
                  className={fieldClass}
                  name={field.name}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  ref={field.name === 'name' ? nameRef : undefined}
                  required
                  type={field.type}
                  value={formValues[field.name]}
                />
              </label>
            ))}
          </div>

          {fields.slice(2).map((field) => (
            <label key={field.name}>
              <span className={labelClass}>{field.label}</span>
              <input
                className={fieldClass}
                name={field.name}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                type={field.type}
                value={formValues[field.name]}
              />
            </label>
          ))}

          <label>
            <span className={labelClass}>MESSAGE</span>
            <textarea
              className={`${fieldClass} h-[96px] min-h-[96px] max-h-[110px] resize-y`}
              name="message"
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              value={formValues.message}
            />
          </label>

          {status === 'success' || status === 'error' ? (
            <div
              className="border border-[rgba(17,17,15,0.16)] px-3.5 py-2.5"
              role="status"
            >
              <p className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[620] uppercase tracking-[0.035em] text-[var(--ink)]">
                {statusText[status].title}
              </p>
              <p className="mt-1.5 m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-sm font-[410] leading-[1.3] text-[var(--muted)]">
                {status === 'error' ? (
                  <>
                    Please try again or email me directly at{' '}
                    <a
                      className="text-[var(--ink)] underline underline-offset-4"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </a>
                  </>
                ) : (
                  statusText[status].message
                )}
              </p>
            </div>
          ) : null}

          <button className={submitClass} disabled={isSubmitting} type="submit">
            <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
            {!isSubmitting ? (
              <span
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
                aria-hidden="true"
              >
                {'\u2192'}
              </span>
            ) : null}
          </button>
        </form>

        <div className="mt-3 border-t border-[rgba(17,17,15,0.14)] pt-3">
          <p className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-sm font-[410] leading-[1.3] text-[var(--muted)]">
            Or email me directly:{' '}
            <a
              className="text-[var(--ink)] underline underline-offset-4"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
