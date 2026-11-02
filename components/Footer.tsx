import { Info } from "lucide-react";
import Logo from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import { copyrightYear, disclaimer, footerColumns, socialLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer id="site-footer" className="on-dark bg-navy-deep text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Cost-effective, reliable courier services for South African businesses.
            </p>
          </div>
          <ul aria-label="Social media" className="flex gap-2">
            {socialLinks.map(({ platform, label, href }) => (
              <li key={platform}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <SocialIcon platform={platform} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {copyrightYear} Fastway Couriers redesign concept. Built as a portfolio project.</p>
          <p className="inline-flex items-start gap-1.5 text-white/90">
            <Info aria-hidden className="mt-px size-3.5 shrink-0" />
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
