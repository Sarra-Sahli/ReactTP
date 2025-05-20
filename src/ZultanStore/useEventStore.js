import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getallEvents } from "../services/api";

const useEventStore = create(
    persist(
        (set) => ({
            events: [],
            errors: "",
            populateEvents: (events) => set({ events }),
            deleteEventObject: (id) =>
                set((state) => ({
                    events: state.events.filter((item) => item.id !== id),
                })),
            updateEventObject: (updatedEvent) =>
                set((state) => ({
                    events: state.events.map((item) =>
                        item.id === updatedEvent.id ? updatedEvent : item
                    ),
                })),
            addEventObject: (event) =>
                set((state) => ({
                    events: [...state.events, event],
                })),
            fetchEvents: async () => {
                try {
                    const response = await getallEvents();
                    set({ events: response.data, errors: null });
                } catch (error) {
                    set({ errors: error.message });
                }
            },
        }),
        {
            name: "event-storage", // Nom de la clé dans le localStorage
            getStorage: () => localStorage, // Utilisation du localStorage
        }
    )
);

export default useEventStore;