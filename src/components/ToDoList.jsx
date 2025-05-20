import useToDoStore
from "../ZultanStore/store";

export default function TodoList() {
    const { tasks, addTask } = useToDoStore();

    return (
        <div>
            <h2>Todo List avec Zustand</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
            <button onClick={() => addTask(prompt("Nouvelle tâche :"))}>Ajouter une tâche</button>
        </div>
    );
}