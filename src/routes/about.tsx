import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Noorix Digital Lab Pakistan" },
      {
        name: "description",
        content:
          "Noorix Digital Lab hand-verifies every subscription, software licence and service before it's delivered anywhere in Pakistan.",
      },
      { property: "og:title", content: "Our Story — Noorix Digital Lab" },
      {
        property: "og:description",
        content: "Why thousands of Pakistani customers trust Noorix Digital Lab.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold font-display leading-tight">From a Dream to Noorix Digital Lab</h1>
        <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Every beautiful journey begins with a single step, and so did Noorix Digital Lab. We started with
            absolutely zero knowledge of the digital products industry. We learned everything step by step —
            testing every tool, comparing every provider, and understanding what Pakistani customers actually
            needed from software subscriptions, AI tools and online services. With time, effort and patience,
            we took our first real step with just a handful of accounts and a lot of determination.
          </p>

          <p>
            There were countless moments of uncertainty, doubt and challenges behind the scenes. From carefully
            vetting every subscription provider to delivering each order with speed and care, every small step
            carried our dedication and heart. Every customer who trusted Noorix Digital Lab became a part of
            this journey, and their support gave us the strength to keep going even when things felt difficult.
          </p>

          <p>
            Today, Noorix Digital Lab is more than just a digital storefront — it is a growing community of
            people who believe that premium tools shouldn't be out of reach. Every subscription, licence and
            service we offer is a reflection of reliability, speed and honest pricing, delivered with sincerity
            and care.
          </p>

          <p>
            This is only the beginning of our story. With your continued trust and support, we hope to grow
            further, add more services, and serve you with even more passion and dedication in the years to
            come. ❤️
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {[
          "6,000+ orders delivered nationwide",
          "Every provider and licence hand-verified",
          "Instant to same-day delivery on most orders",
          "Secure payments & cash on delivery",
          "24/7 WhatsApp support",
          "Real reviews — we never delete them",
        ].map((t, i) => (
          <Reveal key={t} delay={i * 0.05} className="premium-card flex items-start gap-3 p-6 bg-surface/50">
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm font-medium">{t}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
