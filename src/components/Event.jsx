import { Card, Button } from "react-bootstrap";
import useFavoriteStore from "../ZultanStore/useFavoriteStore";

function Event({ id, name, description, img, price, nbTickets, nbParticipants, buy, like, toggleLike }) {
  const { addToFavorites, removeFromFavorites } = useFavoriteStore();
  const placesRestantes = nbTickets - nbParticipants;
  const isSoldOut = placesRestantes === 0;

  const handleToggleLike = () => {
    if (like) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, name, description, img, price, nbTickets, nbParticipants });
    }
    toggleLike();
  };

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

        <Button variant={like ? "danger" : "success"} onClick={handleToggleLike}>
          {like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;