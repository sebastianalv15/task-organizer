import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskBoard from "./components/TaskBoard";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 drop-shadow">
        Task Organizer 
      </h1>

      {editingTask ? (
        <TaskForm
          saveTask={updateTask}
          initialTask={editingTask}
          cancelEdit={() => setEditingTask(null)}
        />
      ) : (
        <TaskForm saveTask={addTask} />
      )}

      <TaskBoard
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={setEditingTask}
      />
    </div>
  );
}
