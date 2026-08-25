import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PROGRAM_OPTIONS = [
  "Strength Training",
  "Personal Training",
  "HIIT",
  "Weight Loss",
  "Muscle Building",
  "Functional Fitness",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", email: "", phone: "", program: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.program) nextErrors.program = "Please select a program.";
    if (!form.message.trim()) nextErrors.message = "Please tell us about your goals.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s Get You <span className="text-primary">Moving</span>
            </>
          }
          description="Tell us where you are and where you want to be. We'll get back to you within 24 hours."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-8 border border-border bg-card p-8 sm:p-10">
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-foreground">
                  Start Today
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Whether you&rsquo;re a complete beginner or a seasoned athlete, our team
                  will help you find the right program and membership.
                </p>
              </div>
              <a
                href="mailto:ismaildigital929@gmail.com"
                className="group flex items-center gap-4 border border-border bg-background p-5 transition-colors duration-200 hover:border-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-foreground">
                    ismaildigital929@gmail.com
                  </span>
                </span>
              </a>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open 24/7 for members. Walk-ins welcome for a free fitness assessment —
                just send us a message first.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 border border-primary/40 bg-card p-10 text-center animate-scale-in">
                <span className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-foreground">
                  Message Sent
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thanks, {form.name.split(" ")[0]} — your message is on its way. A coach
                  from Ismail Digital will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-2 border border-foreground/30 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-border bg-card p-8 sm:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs font-semibold text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs font-semibold text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+1 555 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-program"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Select Program *
                    </label>
                    <select
                      id="contact-program"
                      value={form.program}
                      onChange={(e) => update("program", e.target.value)}
                      className={`${inputClass} appearance-none ${form.program ? "" : "text-muted-foreground/60"}`}
                      aria-invalid={Boolean(errors.program)}
                    >
                      <option value="" disabled>
                        Choose a program
                      </option>
                      {PROGRAM_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-background text-foreground">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.program && (
                      <p className="mt-2 text-xs font-semibold text-destructive">{errors.program}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your goals..."
                      className={`${inputClass} resize-none`}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs font-semibold text-destructive">{errors.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-glow sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
