import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
        {tasks.length > 0 && <Text style={styles.subtitle}>{completed}/{tasks.length} done</Text>}
      </View>

      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: "#f5f5f5"},
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  title: {fontSize: 28,fontWeight: "bold",color: "#333"},
  subtitle: {fontSize: 14,color: "#666",marginTop: 4}
});
