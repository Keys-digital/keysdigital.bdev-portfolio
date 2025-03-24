const TechStackBadges = ({ stack }: { stack: string[] }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-gray-700 rounded-md text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStackBadges;
