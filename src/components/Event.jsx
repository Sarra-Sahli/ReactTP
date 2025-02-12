import { Card, Button } from "react-bootstrap";

function Event({ name, description, img, price, nbTickets, nbParticipants, buy, like, toggleLike }) {
  const placesRestantes = nbTickets - nbParticipants;
  const isSoldOut = placesRestantes === 0;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${img}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Prix : {price}€</Card.Text>
        <Card.Text>
          Places disponibles :{" "}
          {isSoldOut ? <span style={{ color: "red" }}>Sold Out</span> : placesRestantes}
        </Card.Text>

        <Button variant="primary" onClick={buy} disabled={isSoldOut}>
          {isSoldOut ? "Sold Out" : "Book an event"}
        </Button>{" "}

        <Button variant={like ? "danger" : "success"} onClick={toggleLike}>
          {like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;
