const updates = [
  { date: "March 20, 2025", detail: "Implemented JWT authentication" },
  { date: "March 22, 2025", detail: "CI/CD pipeline configured" },
  { date: "March 24, 2025", detail: "Frontend integration in progress" },
];

const LiveUpdateFeed = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mt-4">
      <h4 className="text-lg font-semibold">Live Development Updates</h4>
      <ul className="mt-2 text-gray-300">
        {updates.map((update, index) => (
          <li key={index} className="py-1 border-b border-gray-600">
            <strong>{update.date}:</strong> {update.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveUpdateFeed;
