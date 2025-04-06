const milestones = [
  { name: "Authentication & RBAC", status: " Completed" },
  { name: "Frontend UI & Dashboard", status: " Completed" },
  { name: "Vercel Deployment", status: " Completed" },
];

const ProjectMilestones = () => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold">Development Milestones</h4>
      <ul className="mt-2 text-gray-300">
        {milestones.map((milestone, index) => (
          <li key={index} className="py-1">
            {milestone.name}:{" "}
            <span className="font-semibold">{milestone.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMilestones;
