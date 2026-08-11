import fs from "fs";
import path from "path";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface VideoEntry {
  url: string;
  title: string;
}

export function getGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs.readdirSync(galleryDir);

  const jpgFiles = files.filter(
    (f) => f.endsWith(".jpg")
  );

  const withStats = jpgFiles.map((f) => ({
    name: f,
    mtime: fs.statSync(path.join(galleryDir, f)).mtimeMs,
  }));

  withStats.sort((a, b) => b.mtime - a.mtime);

  return withStats.map((f, i) => ({
    src: `/images/gallery/${f.name}`,
    alt: `Arkylite Design + Build project gallery photo ${i + 1}`,
  }));
}

export const VIDEOS: VideoEntry[] = [
  { url: "https://web.facebook.com/reel/1024834100281107/", title: "Project Reel 11" },
  { url: "https://web.facebook.com/reel/1015512947745483/", title: "Project Reel 10" },
  { url: "https://web.facebook.com/reel/2526465537832981/", title: "Project Reel 9" },
  { url: "https://web.facebook.com/reel/1517915193217625/", title: "Project Reel 8" },
  { url: "https://web.facebook.com/reel/2145247052875047/", title: "Project Reel 7" },
  { url: "https://web.facebook.com/reel/2066463024302351/", title: "Project Reel 6" },
  { url: "https://web.facebook.com/reel/1554074339413022/", title: "Project Reel 5" },
  { url: "https://web.facebook.com/reel/868604082339294/", title: "Project Reel 4" },
  { url: "https://web.facebook.com/reel/2598454797263565/", title: "Project Reel 3" },
  { url: "https://web.facebook.com/reel/1005261031918696/", title: "Project Reel 2" },
  { url: "https://web.facebook.com/reel/1893603844616152/", title: "Project Reel 1" },
];
