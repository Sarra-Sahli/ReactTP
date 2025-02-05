import React from 'react';
import Button from 'react-bootstrap/Button'; // Importez Button

function Form(props) {
  return (
    <>
      <label>{props.labelle}: </label>
      <input type="text" name={props.Name} />
      <Button variant="primary" size="lg" onClick={() => alert('Primary Button Clicked!')}>
        je valide 
      </Button>
    </>
  );
}

export default Form; // Exportez Form