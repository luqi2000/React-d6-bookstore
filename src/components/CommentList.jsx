import { Alert, ListGroup } from "react-bootstrap";

const CommentList = props => {
  const currentComments = [...props.comments];
  console.log(currentComments);

  if (currentComments.length < 1) {
    return <Alert variant="info">There are no comments</Alert>;
  }
  return (
    <ListGroup>
      {currentComments.map(comment => {
        return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default CommentList;
