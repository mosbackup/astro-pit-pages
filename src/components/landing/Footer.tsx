import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Product: [
    { label: "Models", href: "#models" },
    { label: "Pricing", href: "#pricing" },
    { label: "API Documentation", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Research: [
    { label: "Look-Ahead-Bench", href: "#" },
    { label: "Paper", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#blog" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@pitinference.ai", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 rounded-2xl border border-border bg-secondary/30 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-4 text-2xl font-bold">Stay Updated</h3>
            <p className="mb-6 text-muted-foreground">
              Get the latest research updates, product news, and insights on financial AI 
              delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-sm font-bold text-primary-foreground">Pi</span>
              </div>
              <span className="text-lg font-bold">
                PiT<span className="text-primary">-Inference</span>
              </span>
            </a>
            <p className="mb-6 text-sm text-muted-foreground">
              Point-in-Time LLMs for financial AI. Eliminate lookahead bias and 
              build reliable predictive systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-semibold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PiT-Inference. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for the quantitative finance community
          </p>
        </div>
      </div>
    </footer>
  );
};
