import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggleComplete,
  onDelete,
}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => onToggleComplete(task.id)}
      >
        <View
          style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.title, task.completed && styles.titleCompleted]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxCompleted: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteButton: {
    padding: 8,
  },
  deleteText: {
    color: "#FF3B30",
    fontSize: 18,
    fontWeight: "600",
  },
});
