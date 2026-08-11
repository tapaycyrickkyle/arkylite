import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Completed Architecture & Construction Projects",
  description:
    "Browse Arkylite Design + Build's completed residential, commercial, and industrial architecture and construction projects in the Philippines.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#ECE9E6] min-h-screen pt-16 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <ProjectsClient />
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
