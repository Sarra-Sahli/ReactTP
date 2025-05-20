import React from "react";
import useFavoriteStore from "../ZultanStore/useFavoriteStore";

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavoriteStore();

  return (
    <div className="favorites-container">
      <h2>Mes Favoris</h2>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((event) => (
            <li key={event.id} className="favorite-card">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>Prix : {event.price} €</p>
              <p>Tickets disponibles : {event.nbTickets}</p>
              <p>Participants : {event.nbParticipants}</p>
              <p>Like : {event.like ? "Oui" : "Non"}</p>
              <p>Date : {event.date}</p>
              <button onClick={() => removeFromFavorites(event.id)}>
                Retirer des Favoris
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun élément en favoris</p>
      )}
      <button onClick={clearFavorites}>Vider les Favoris</button>
    </div>
  );
};

export default Favorites;