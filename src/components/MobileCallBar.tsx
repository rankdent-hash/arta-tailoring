import { business } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-navy/10 bg-cream shadow-[0_-4px_16px_rgba(16,25,46,0.12)] lg:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-navy/10 py-3 text-sm font-semibold text-navy"
      >
        Call {business.phone}
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3 text-sm font-semibold text-cream"
      >
        Book a Consultation
      </a>
    </div>
  );
}
