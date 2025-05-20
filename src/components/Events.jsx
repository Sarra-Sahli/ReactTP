import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEventStore from "../ZultanStore/useEventStore";
import useFavoriteStore from "../ZultanStore/useFavoriteStore";
import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long"),
  price: z.number().min(1).max(1000, "The price must be between 1 and 1000"),
  description: z.string().min(10, "The description must contain at least 10 characters"),
  nbTickets: z.number().min(1).max(100, "Tickets must be between 1 and 100"),
  nbParticipants: z.number().min(1, "The number of participants must be at least 1"),
});

const Events = () => {
  const { events, fetchEvents, addEventObject, deleteEventObject, updateEventObject } = useEventStore();
  const { addToFavorites } = useFavoriteStore();
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
    date: "",
  });
  const [editingEvent, setEditingEvent] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleAddEvent = () => {
    try {
      eventSchema.parse(newEvent);
      setErrors({});

      addEventObject(newEvent);
      setNewEvent({
        name: "",
        description: "",
        price: 0,
        nbTickets: 0,
        nbParticipants: 0,
        like: false,
        date: "",
      });
      navigate("/events");
    } catch (error) {
      const validationErrors = {};
      error.errors.forEach((err) => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleDeleteEvent = (id) => {
    deleteEventObject(id);
  };

  const handleEditEvent = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setEditingEvent(eventToEdit);
  };

  const handleUpdateEvent = () => {
    try {
      eventSchema.parse(editingEvent);
      setErrors({});

      updateEventObject(editingEvent);
      setEditingEvent(null);
    } catch (error) {
      const validationErrors = {};
      error.errors.forEach((err) => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleAddToFavorites = (event) => {
    addToFavorites(event);
  };

  return (
    <div className="events-container">
      <h2>Liste des événements</h2>

      {/* Formulaire d'ajout d'événement */}
      <div className="event-form">
        <h3>Ajouter un événement</h3>
        <input
          type="text"
          placeholder="Nom de l'événement"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <input
          type="number"
          placeholder="Prix"
          value={newEvent.price}
          onChange={(e) => setNewEvent({ ...newEvent, price: parseFloat(e.target.value) })}
        />
        {errors.price && <p className="error">{errors.price}</p>}

        <input
          type="number"
          placeholder="Nombre de tickets"
          value={newEvent.nbTickets}
          onChange={(e) => setNewEvent({ ...newEvent, nbTickets: parseInt(e.target.value) })}
        />
        {errors.nbTickets && <p className="error">{errors.nbTickets}</p>}

        <input
          type="number"
          placeholder="Nombre de participants"
          value={newEvent.nbParticipants}
          onChange={(e) => setNewEvent({ ...newEvent, nbParticipants: parseInt(e.target.value) })}
        />
        {errors.nbParticipants && <p className="error">{errors.nbParticipants}</p>}

        <label>
          Like :
          <input
            type="checkbox"
            checked={newEvent.like}
            onChange={(e) => setNewEvent({ ...newEvent, like: e.target.checked })}
          />
        </label>

        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />

        <button onClick={handleAddEvent}>Ajouter</button>
      </div>

      {/* Formulaire de mise à jour d'événement */}
      {editingEvent && (
        <div className="event-form">
          <h3>Modifier l'événement</h3>
          <input
            type="text"
            value={editingEvent.name}
            onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            value={editingEvent.description}
            onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <input
            type="number"
            value={editingEvent.price}
            onChange={(e) => setEditingEvent({ ...editingEvent, price: parseFloat(e.target.value) })}
          />
          {errors.price && <p className="error">{errors.price}</p>}

          <input
            type="number"
            value={editingEvent.nbTickets}
            onChange={(e) => setEditingEvent({ ...editingEvent, nbTickets: parseInt(e.target.value) })}
          />
          {errors.nbTickets && <p className="error">{errors.nbTickets}</p>}

          <input
            type="number"
            value={editingEvent.nbParticipants}
            onChange={(e) => setEditingEvent({ ...editingEvent, nbParticipants: parseInt(e.target.value) })}
          />
          {errors.nbParticipants && <p className="error">{errors.nbParticipants}</p>}

          <label>
            Like :
            <input
              type="checkbox"
              checked={editingEvent.like}
              onChange={(e) => setEditingEvent({ ...editingEvent, like: e.target.checked })}
            />
          </label>

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
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Prix : {event.price} €</p>
            <p>Tickets disponibles : {event.nbTickets}</p>
            <p>Participants : {event.nbParticipants}</p>
            <p>Like : {event.like ? "Oui" : "Non"}</p>
            <p>Date : {event.date}</p>
            <div className="event-actions">
              <button onClick={() => handleEditEvent(event.id)}>Modifier</button>
              <button onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
              <button onClick={() => handleAddToFavorites(event)}>Ajouter aux Favoris</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;