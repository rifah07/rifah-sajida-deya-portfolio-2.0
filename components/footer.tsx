import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./ui/icons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/rifah07", label: "GitHub" },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/rifah-sajida-deya-1011/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rifahsajida7@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Rifah Sajida Deya · Built with Next.js
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
