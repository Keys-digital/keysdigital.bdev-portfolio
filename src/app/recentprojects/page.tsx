import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectMilestones from "@/components/ProjectMilestones";
import LiveUpdateFeed from "@/components/LiveUpdateFeed";
import TechStackBadges from "@/components/TechStackBadges";
import ProjectGallery from "@/components/ProjectGallery";

const RecentProjects = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-black">
        <Image
          src="/backenddev.jpg"
          alt="Backend Development"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute text-center">
          <h1 className="text-4xl font-bold text-white">Recent Projects</h1>
          <p className="text-lg text-gray-300">
            Engineering Scalable Solutions – From Code to Deployment
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">
          Featured Projects
        </h2>

        {/* ShopInKeys Project */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <Image
            src="/shopinkeysbanner.jpg"
            alt="ShopInKeys Banner"
            width={1200}
            height={500}
            className="rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-2xl font-bold">
              ShopInKeys – The Ultimate Tech & Wellness Affiliate Hub
            </h3>
            <p className="text-gray-400 italic">
              "Empowering Smart Shopping & Wellness Through Tech-Driven
              Insights" 🚀
            </p>
            <p className="mt-4 text-gray-300">
              In the growing world of wearable tech and wellness, consumers
              struggle to find trusted insights. ShopInKeys is a **one-stop
              platform** integrating expert reviews, community engagement, and
              seamless affiliate shopping to enhance decision-making.
            </p>
          </div>

          {/* Live Updates & Milestones */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold">Development Status</h4>
            <LiveUpdateFeed />
            <ProjectMilestones />
          </div>

          {/* Tech Stack Badges */}
          <TechStackBadges
            stack={[
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "AWS",
              "Docker",
            ]}
          />

          {/* Screenshot Gallery */}
          <ProjectGallery
            images={[
              "/shopinkeyslogo.jpg",
              "/promopix.jpg",
              "/techworkspace.jpg",
            ]}
          />

          {/* Links & CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://github.com/Keys-digital/shopinkeys"
              target="_blank"
              className="flex items-center bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </Link>
            <button className="bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-500 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentProjects;
