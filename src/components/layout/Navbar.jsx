import { Github, Linkedin, Mail, Menu } from 'lucide-react';
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

const iconButtonClass =
  'inline-grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-[rgba(17,17,15,0.2)] bg-transparent text-[var(--ink)] min-[960px]:max-[1100px]:h-[34px] min-[960px]:max-[1100px]:w-[34px] max-[680px]:[&:not(:last-child)]:hidden';

const iconLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: profile.links.github,
    icon: Github,
  },
];

export function Navbar() {
  return (
    <header className={headerClass} data-nav>
      <div className={shellClass}>
        <a className={logoClass} href="/" aria-label="Houssen Doudli home">
          {profile.logo}
        </a>

        <nav className={linksClass} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className={actionsClass} aria-label="Contact and social links">
          {iconLinks.map(({ label, href, icon: Icon }) => (
            <a
              className={iconButtonClass}
              href={href}
              aria-label={label}
              title={label}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              key={label}
            >
              <Icon aria-hidden="true" size={16} strokeWidth={1.7} />
            </a>
          ))}
          <button className={iconButtonClass} type="button" aria-label="Open menu" title="Menu">
            <Menu aria-hidden="true" size={17} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </header>
  );
}
