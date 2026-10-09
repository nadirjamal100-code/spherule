import type { Metadata } from "next";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "The Spherule Journal | Stories from Norway",
  description:
    "Thoughtful Norway travel guides, local finds, and inspiration for taking the scenic route.",
};

export default function BlogPage() {
  return <BlogContent />;
}
