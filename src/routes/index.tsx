import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forazi Tech — Q3 Achievement & Q4 Plan" },
      {
        name: "description",
        content:
          "Forazi Tech Q3 achievement and Q4 plan: sales results, quarter comparison, challenges and future strategy.",
      },
      { property: "og:title", content: "Forazi Tech — Q3 Achievement & Q4 Plan" },
      {
        property: "og:description",
        content:
          "Forazi Tech Q3 achievement and Q4 plan: sales results, quarter comparison, challenges and future strategy.",
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
