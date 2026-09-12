"use client";

import { FormEvent, useState } from "react";
import { business } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const contactMethod = String(data.get("contactMethod") ?? "");
    const message = String(data.get("message") ?? "");
    const phone = String(data.get("phone") ?? "");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred reply: ${contactMethod}`,
      "",
      message,
    ].join("\n");

    const subject = encodeURIComponent(`Appointment request from ${name || "website"}`);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-navy/10 bg-cream p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2 text-sm transition-shadow focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/25"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-navy">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2 text-sm transition-shadow focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/25"
        />
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-navy">Preferred reply</legend>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-charcoal/75">
          {["Email", "Phone", "Either"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value={option}
                defaultChecked={option === "Either"}
                className="accent-brass"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2 text-sm transition-shadow focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/25"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-md"
      >
        Send Request
      </button>
      {sent ? (
        <p role="status" className="text-sm text-brass">
          Your email app should now be open with this message ready to send. If it didn&apos;t
          open, email us directly at {business.email}.
        </p>
      ) : null}
    </form>
  );
}
