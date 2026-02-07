import React from "react";
import {FlatList, StyleSheet,Text, View} from "react-native";
import { Task } from "../types/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

// renders the task list or empty state
export default function TaskList({tasks, onToggleComplete,onDelete}: TaskListProps) {

  // show empty msg when theres nothing to display
  if(tasks.length === 0){
    return (
      <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tasks yet. Add one above!</Text>
      </View>
    );
  }

  return (
    <FlatList
    data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggleComplete={onToggleComplete} onDelete={onDelete}/>
      )}
        style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  emptyContainer: {
    flex: 1,
      justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    color: "#888"
  }
});
