import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noorix Digital Lab | Premium Subscriptions & Digital Services" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <iframe
      title="Noorix Digital Lab"
      src="/noorix-static.html"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  );
}
