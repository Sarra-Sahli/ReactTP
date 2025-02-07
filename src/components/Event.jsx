import { Card, Button } from "react-bootstrap";

function Event({ name, description, img, price, nbTickets, nbParticipants, like }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>name :{name}</Card.Title>
        <Card.Text>description: {description}</Card.Text>
        <Card.Text>Prix : {price}€</Card.Text>
        <Card.Text>Places disponibles : {nbTickets - nbParticipants}</Card.Text>
        <Button variant={like ? "danger" : "success"}>
          {like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;
