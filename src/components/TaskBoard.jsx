import TaskCard from "./TaskCard";

export default function TaskBoard({ tasks, deleteTask, editTask }) {
  const groups = {
    "Muy Importante": tasks.filter((t) => t.importance === "Very Important"),
    Importante: tasks.filter((t) => t.importance === "Important"),
    Normal: tasks.filter((t) => t.importance === "Normal"),
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Object.entries(groups).map(([level, group]) => (
        <div key={level}>
          <h2 className="text-xl font-bold text-gray-700 mb-4">{level}</h2>
          <div className="space-y-4">
            {group.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
