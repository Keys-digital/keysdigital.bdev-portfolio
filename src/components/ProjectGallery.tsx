// 📂 src/components/ProjectGallery.tsx
"use client"; // ✅ This must be the first line

import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectGallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-[300px] mt-6">
      <Image
        src={images[index]}
        alt="Project Screenshot"
        width={800}
        height={300}
        className="rounded-lg mx-auto"
      />
    </div>
  );
};

export default ProjectGallery;
