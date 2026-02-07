import { useState } from "react";
import { Task } from "../types/Task";

// all task logic lives here, keeps components clean and this is separation of concerns. In a bigger app, this could be split into multiple hooks or use something like Zustand or Redux for state management of concerns
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      // using timestamp as id, good enough for now
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    // new tasks go at the top
    setTasks((prev) => [newTask, ...prev]);
  };

  // Toggle the completed status
  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleComplete,
    deleteTask,
  };
}
