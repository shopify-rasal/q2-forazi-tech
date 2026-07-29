import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forazi Tech — Q2 Sales Report" },
      {
        name: "description",
        content:
          "Forazi Tech Q2 sales report deck: revenue, targets, order mix and conversion performance.",
      },
      { property: "og:title", content: "Forazi Tech — Q2 Sales Report" },
      {
        property: "og:description",
        content:
          "Forazi Tech Q2 sales report deck: revenue, targets, order mix and conversion performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/report.html"
      title="Forazi Tech Q2 Sales Report"
      style={{ border: "none", width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
