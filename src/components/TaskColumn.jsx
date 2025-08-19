import TaskCard from "./TaskCard";

export default function TaskColumn({ title, tasks, removeTask }) {
  return (
    <div className="bg-white/70 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">{title}</h2>
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 italic text-sm">Sin tareas</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} removeTask={removeTask} />
          ))
        )}
      </div>
    </div>
  );
}
