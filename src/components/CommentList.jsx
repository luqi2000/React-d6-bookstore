import { Alert, ListGroup } from "react-bootstrap";

const CommentList = props => {
  const currentComments = [...props.comments];
  console.log(currentComments);

  if (currentComments.length < 1) {
    return (
      <Alert variant="info" className="mb-3">
        Non ci sono commenti
      </Alert>
    );
  }
  return (
    <ListGroup className="mb-3">
      {currentComments.map(comment => {
        return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default CommentList;
