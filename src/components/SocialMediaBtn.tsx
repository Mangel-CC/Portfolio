import { Mail } from "lucide-react";
import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";

const socialLinks = [
    {
        label: "GitHub",
        icon: GithubIcon,
        url: "https://github.com/Mangel-CC",
        hoverColor: "hover:border-foreground/30 hover:shadow-foreground/10",
    },
    {
        label: "LinkedIn",
        icon: LinkedinIcon,
        url: "#",
        hoverColor: "hover:border-[#0077B7]/40 hover:shadow-[#0077B7]/10",
    },
    {
        label: "Email",
        icon: Mail,
        url: "mailto:miguelangtee@outlook.es",
        hoverColor: "hover:border-accent/40 hover:shadow-accent/10",
    },
];

export default function SocialMediaBtn() {
    return (
        <div className="flex items-center gap-5 mt-6">
            {socialLinks.map(({ label, icon: Icon, url, hoverColor }) => (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-14 h-14 flex items-center justify-center rounded-full
          backdrop-blur-lg border border-border bg-card
          shadow-lg hover:shadow-xl hover:scale-110
          active:scale-95 transition-all duration-300 ease-out
          text-muted-foreground hover:text-foreground
          ${hoverColor}`}
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );
}