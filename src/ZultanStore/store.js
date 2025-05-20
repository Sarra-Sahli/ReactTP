import { create } from "zustand";

const useToDoStore = create((set) => ({
    tasks: [{ id: 1, name: "Apprendre Zustand" }],
    addTask: (name) =>
        set((state) => ({
            tasks: [...state.tasks, { id: state.tasks.length + 1, name }],
        })),
}));

export default useToDoStore;