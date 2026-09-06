import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dire Dawa Schools" },
      {
        name: "description",
        content:
          "Dire Dawa Schools portal — public site and all 8 school portals (super admin, admin, teacher, librarian, sub-admin, staff, student, parent).",
      },
      { property: "og:title", content: "Dire Dawa Schools" },
      {
        property: "og:description",
        content: "Public site and all 8 school portals for Dire Dawa Schools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The PHP school site is snapshotted as static HTML under public/site/.
// The home route embeds it full-screen so the preview shows the real site.
function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Dire Dawa Schools"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
