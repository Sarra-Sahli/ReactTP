import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div>
      <h1>React Bootstrap Button Example</h1>
      <Button variant="primary">Primary Button</Button>{' '}
      <Button variant="secondary">Secondary Button</Button>{' '}
      <Button variant="success">Success Button</Button>{' '}
      <Button variant="warning">Warning Button</Button>{' '}
      <Button variant="danger">Danger Button</Button>{' '}
      <Button variant="info">Info Button</Button>{' '}
      <Button variant="light">Light Button</Button>{' '}
      <Button variant="dark">Dark Button</Button>{' '}
      <Button variant="link">Link Button</Button>
    </div>
  );
}

export default App;