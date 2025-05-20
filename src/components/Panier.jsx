import React from 'react';
import useAuthStore from "../ZultanStore/useAuthStore";
import useCartStore from "../ZultanStore/UseCarteStore";

function Panier() {
    const { user, login, logout } = useAuthStore();
    const { items, addItem } = useCartStore();

    return (
        <>
            <h1>Gestion du Panier avec Zustand</h1>
            {user ? (
                <>
                    <p>Bienvenue, {user.name} !</p>
                    <button onClick={logout}>Se déconnecter</button>
                </>
            ) : (
                <button onClick={() => login({ name: "Foulen ben foulen" })}>
                    Se connecter
                </button>
            )}
            <button onClick={() => addItem({ id: 1, name: "Produit A" })}>
                Ajouter un produit A
            </button>
            <h2>Panier</h2>
            {items.length > 0 ? (
                items.map((item) => <p key={item.id}>{item.name}</p>)
            ) : (
                <p>Le panier est vide</p>
            )}
        </>
    );
}

export default Panier;