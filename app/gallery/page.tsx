import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingMessenger from "@/app/components/FloatingMessenger";
import GalleryClient from "./GalleryClient";
import { getGalleryImages, VIDEOS } from "@/lib/get-gallery-images";

export const metadata: Metadata = {
  title: "Architecture & Construction Gallery",
  description:
    "Explore photos and project walkthroughs from Arkylite Design + Build's architecture, engineering, and construction work in the Philippines.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <Navbar />
      <main className="bg-[#2B2926] min-h-screen pt-16 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <GalleryClient images={images} videos={VIDEOS} />
        </div>
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  );
}
