import type { Metadata } from "next";
import ExploreContent from "@/components/ExploreContent";

export const metadata: Metadata = {
  title: "Explore Norway | Spherule",
  description:
    "Find your next Norwegian escape, from quiet fjord villages to Arctic adventures and vibrant city stays.",
};

export default function ExplorePage() {
  return <ExploreContent />;
}
