export default function TaskCard({ task, deleteTask, editTask }) {
  const colors = {
    "Very Important": "bg-red-200 rotate-1",
    Important: "bg-yellow-200 -rotate-1",
    Normal: "bg-green-200 rotate-2",
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md relative ${colors[task.importance]} transition-transform hover:scale-105`}
    >
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{task.desc}</p>
      <p className="text-xs text-gray-500">📅 {task.date}</p>

      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          onClick={() => editTask(task)}
          className="text-blue-600 hover:scale-110 transition"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 hover:scale-110 transition"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
