import React, { useEffect, useState } from "react";
import { getallEvents, editEvent, addEvent, deleteEvent } from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ name: "", date: "" });

  // Récupérer tous les événements au chargement du composant
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getallEvents();
    setEvents(response?.data || []);
  };

  const handleAddEvent = async () => {
    await addEvent(newEvent);
    setNewEvent({ name: "", date: "" }); // Réinitialiser le formulaire
    fetchEvents(); // Rafraîchir la liste après l'ajout
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    fetchEvents();
  };

  const handleEditEvent = async (id) => {
    const eventToEdit = events.find(event => event.id === id);
    setEditingEvent(eventToEdit);
  };

  const handleUpdateEvent = async () => {
    await editEvent(editingEvent.id, editingEvent);
    setEditingEvent(null); // Réinitialiser l'édition
    fetchEvents(); // Rafraîchir la liste après la mise à jour
  };

  return (
    <div>
      <h2>Liste des événements</h2>

      {/* Formulaire d'ajout d'événement */}
      <div>
        <h3>Ajouter un événement</h3>
        <input
          type="text"
          placeholder="Nom de l'événement"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <button onClick={handleAddEvent}>Ajouter</button>
      </div>

      {/* Formulaire de mise à jour d'événement */}
      {editingEvent && (
        <div>
          <h3>Modifier l'événement</h3>
          <input
            type="text"
            value={editingEvent.name}
            onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
          />
          <input
            type="date"
            value={editingEvent.date}
            onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
          />
          <button onClick={handleUpdateEvent}>Mettre à jour</button>
          <button onClick={() => setEditingEvent(null)}>Annuler</button>
        </div>
      )}

      {/* Liste des événements */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button onClick={() => handleEditEvent(event.id)}>Modifier</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;