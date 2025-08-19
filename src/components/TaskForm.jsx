import { useState, useEffect } from "react";

export default function TaskForm({ saveTask, initialTask, cancelEdit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [importance, setImportance] = useState("Normal");

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDesc(initialTask.desc);
      setImportance(initialTask.importance);
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    saveTask({
      id: initialTask ? initialTask.id : Date.now(),
      title,
      desc,
      importance,
      date: new Date().toLocaleDateString()
    });

    setTitle("");
    setDesc("");
    setImportance("Normal");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-lg mx-auto mb-8"
    >
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <textarea
        placeholder="Task description..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full mb-3 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
      ></textarea>
      <select
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
      >
        <option value="Very Important">🔥 Muy importante</option>
        <option value="Important">⚡ Importante</option>
        <option value="Normal">🌸 Normal</option>
      </select>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-purple-500 text-white px-5 py-2 rounded-xl shadow hover:bg-purple-600 transition"
        >
          {initialTask ? "💾 Guardar cambios" : "➕ Añadir tarea"}
        </button>
        {initialTask && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-400 text-white px-5 py-2 rounded-xl shadow hover:bg-gray-500 transition"
          >
            ❌ Cancel
          </button>
        )}
      </div>
    </form>
  );
}
