import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  alt: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px]">
      <Image
        src={images[currentIndex]}
        alt={alt}
        width={850}
        height={350}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default Slideshow;
