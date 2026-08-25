import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PLANS = [
  {
    name: "Basic",
    price: 29,
    features: ["Gym Access", "Cardio Area", "Locker Access", "Free Fitness Assessment"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: 59,
    features: [
      "Everything in Basic",
      "Group Classes",
      "Personal Training Session",
      "Nutrition Guidance",
    ],
    cta: "Join Pro",
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    features: [
      "Everything in Pro",
      "Unlimited Personal Training",
      "Custom Workout Plan",
      "Custom Nutrition Plan",
      "Priority Support",
    ],
    cta: "Go Elite",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Membership"
          title={
            <>
              Choose Your <span className="text-primary">Membership</span>
            </>
          }
          description="No hidden fees. No lock-in contracts. Just everything you need to get results."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 120} className="h-full">
              <article
                className={`relative flex h-full flex-col border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary bg-card shadow-glow"
                    : "border-border bg-card hover:border-foreground/30"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.35em] text-muted-foreground">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-display text-6xl font-extrabold tracking-tight ${
                      plan.popular ? "text-primary" : "text-foreground"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    / Month
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center ${
                          plan.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 block px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:shadow-glow"
                      : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
