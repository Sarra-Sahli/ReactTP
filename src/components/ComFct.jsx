import { useState } from 'react';
import { Button } from "react-bootstrap"; // Assurez-vous que react-bootstrap est installé

function ComFct() {

  const [monText, setMonTexte] = useState("hello hello");
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };

  // Retour du composant fonctionnel
  return (
    <>
      <p>{monText}</p>
      <p>Valeur : {value}</p>
      <p>Ceci est un composant fonctionnel</p>

      <Button variant="primary" onClick={handleClick}>
        Incrémenter
      </Button>

      <h2>{value}</h2>
    </>
  );
}

export default ComFct; // Export correct du composant
