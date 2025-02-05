import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Importez Button

function ListManager({ initialItems = [], placeholder = "Ajouter un élément" }) {
  // Déclarer l'état `items` avec la valeur initiale `initialItems`
  const [items, setItems] = useState(initialItems);

  // Déclarer l'état `newItem` pour gérer la valeur de l'input
  const [newItem, setNewItem] = useState('');
    
  // Fonction pour ajouter un nouvel élément à la liste
  const addItem = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    if (newItem.trim() !== '') {
      setItems([...items, newItem]); // Ajouter le nouvel élément à la liste
      setNewItem(''); // Réinitialiser l'input
    }
  };

  return (
    <div>
      <h2>Gestionnaire de liste</h2>
      {/* Formulaire pour ajouter un nouvel élément */}
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <Button type="submit">Ajouter</Button>

      </form>

      {/* Afichage de la liste des éléments */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default ListManager;