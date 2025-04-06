"use client"; // This must be the first line

import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectGallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-[500px] mt-6 flex justify-center">
      <Image
        src={images[index]}
        alt={`Project Screenshot ${index + 1}`}
        width={640}
        height={640}
        className="rounded-lg object-cover"
        priority={index === 0}
      />
    </div>
  );
};

export default ProjectGallery;
