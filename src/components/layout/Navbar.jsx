import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../../data/profile.js';

const headerClass =
  'fixed top-0 left-0 z-[40] w-full border-b border-[var(--rule)] bg-[rgba(250,250,248,0.9)] backdrop-blur-[10px]';

const shellClass =
  'grid min-h-[76px] grid-cols-[1fr_auto_1fr] items-center px-[var(--gutter)] max-[1180px]:min-h-[68px] min-[960px]:max-[1100px]:min-h-[68px] min-[960px]:max-[1100px]:px-[clamp(28px,3.4vw,38px)] max-[900px]:grid-cols-[auto_1fr] max-[680px]:min-h-[64px] max-[680px]:px-4';

const logoClass =
  'justify-self-start text-[clamp(1.18rem,1.35vw,1.55rem)] font-[760] tracking-[0]';

const linksClass =
  'flex items-center justify-center gap-[clamp(32px,4vw,62px)] text-[0.88rem] font-[450] max-[1180px]:gap-6 min-[960px]:max-[1100px]:gap-[clamp(16px,2vw,22px)] min-[960px]:max-[1100px]:text-[0.8rem] max-[900px]:hidden';

const actionsClass =
  'flex items-center justify-self-end gap-2 min-[960px]:max-[1100px]:gap-1.5';

const socialCircleClass =
  'group inline-grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-[rgba(17,17,15,0.2)] bg-transparent text-[var(--ink)] transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:scale-[1.04] focus-visible:border-[var(--ink)] focus-visible:bg-[var(--ink)] focus-visible:text-[var(--paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] [&_svg]:stroke-current';

const iconButtonClass =
  `${socialCircleClass} min-[960px]:max-[1100px]:h-[34px] min-[960px]:max-[1100px]:w-[34px] max-[900px]:[&:not(:last-child)]:hidden`;

const menuButtonClass = `${iconButtonClass} min-[901px]:hidden`;

const navLinkClass =
  "relative inline-flex py-1 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ink)] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] focus-visible:after:scale-x-100";

const mobileMenuClass =
  'fixed inset-x-0 top-[68px] z-[39] border-b border-[var(--rule)] bg-[var(--paper)] px-[var(--gutter)] py-8 text-[var(--ink)] transition-all duration-300 ease-out max-[680px]:top-[64px] max-[680px]:px-4';

const mobileLinkClass =
  "relative flex items-center justify-between border-b border-[var(--rule)] py-4 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[1.25rem] font-[620] uppercase tracking-[-0.018em] after:h-px after:w-12 after:bg-[var(--ink)] after:opacity-0 after:transition-opacity after:duration-300 after:ease-out hover:after:opacity-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] focus-visible:after:opacity-100";

const mobileSocialClass = `${socialCircleClass} h-11 w-11`;

const iconLinks = [
  {
    label: 'Email',
    ariaLabel: 'Email Houssen',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    ariaLabel: 'Houssen on LinkedIn',
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    ariaLabel: 'Houssen on GitHub',
    href: profile.links.github,
    icon: Github,
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (
        menuRef.current?.contains(event.target) ||
        buttonRef.current?.contains(event.target)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={headerClass} data-nav>
        <div className={shellClass}>
          <a className={logoClass} href="/" aria-label="Houssen Doudli home">
            {profile.logo}
          </a>

          <nav className={linksClass} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a className={navLinkClass} href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className={actionsClass} aria-label="Contact and social links">
            {iconLinks.map(({ label, ariaLabel, href, icon: Icon }) => (
              <a
                className={iconButtonClass}
                href={href}
                aria-label={ariaLabel}
                title={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                key={label}
              >
                <Icon aria-hidden="true" color="currentColor" size={16} strokeWidth={1.7} />
              </a>
            ))}
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className={menuButtonClass}
              onClick={() => setIsMenuOpen((current) => !current)}
              ref={buttonRef}
              title={isMenuOpen ? 'Close menu' : 'Menu'}
              type="button"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" color="currentColor" size={17} strokeWidth={1.7} />
              ) : (
                <Menu aria-hidden="true" color="currentColor" size={17} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>
      </header>

      <nav
        aria-label="Mobile navigation"
        className={`${mobileMenuClass} ${
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        } min-[901px]:hidden`}
        id="mobile-navigation"
        ref={menuRef}
      >
        {navItems.map((item) => (
          <a
            className={mobileLinkClass}
            href={`#${item.toLowerCase()}`}
            key={item}
            onClick={closeMenu}
          >
            {item.toUpperCase()}
          </a>
        ))}

        <div className="mt-6 border-t border-[var(--rule)] pt-5">
          <div className="flex items-center gap-3" aria-label="Social links">
            {iconLinks.map(({ label, ariaLabel, href, icon: Icon }) => (
              <a
                aria-label={ariaLabel}
                className={mobileSocialClass}
                href={href}
                key={label}
                onClick={closeMenu}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                target={label === 'Email' ? undefined : '_blank'}
                title={label}
              >
                <Icon aria-hidden="true" color="currentColor" size={17} strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
